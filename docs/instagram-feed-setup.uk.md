# Instagram-стрічка на головній сторінці

Інтеграція використовує офіційний Instagram API with Instagram Login. Секретний токен зберігається тільки в Netlify, а браузер звертається до `/api/instagram-feed`.

## Що вже реалізовано

- Netlify Function `netlify/functions/instagram-feed.ts` завантажує 6 останніх постів, активні Stories та наступні сторінки за безпечним cursor-параметром.
- Відповідь кешується на CDN 15 хвилин; при короткому збої може віддаватися застаріла відповідь до 1 години.
- Компонент `InstagramFeedSection` має loading, empty та error/fallback стани.
- Токен не потрапляє у Vite bundle і не комітиться в Git.

## 1. Підготувати Instagram

1. В Instagram відкрийте **Налаштування → Тип облікового запису й інструменти**.
2. Переконайтеся, що профіль є **Business** або **Creator**. Особисті профілі офіційний API не обслуговує.
3. Профіль має бути публічним, якщо відвідувачі сайту повинні відкривати пости без входу в Instagram.

## 2. Створити Meta App

1. Увійдіть на `developers.facebook.com` тим самим власником профілю.
2. Відкрийте **My Apps → Create App** і створіть Business app.
3. Додайте продукт **Instagram** та оберіть **API setup with Instagram login**.
4. Додайте `vs.studio.anfrage` як Instagram tester/account і підтвердьте доступ у самому Instagram, якщо Meta це попросить.
5. Для читання власного контенту потрібен дозвіл `instagram_business_basic`. Для цієї секції дозволи на публікацію, повідомлення чи коментарі не потрібні.

## 3. Отримати токен та ID

1. У розділі Instagram → API setup згенеруйте access token для `vs.studio.anfrage`.
2. Обміняйте короткоживучий токен на long-lived token за інструкцією Meta. Зазвичай він чинний близько 60 днів.
3. Скопіюйте Instagram User ID. Якщо ID не заданий, функція використовує `/me`, тому `INSTAGRAM_USER_ID` можна спочатку залишити порожнім.
4. Ніколи не надсилайте токен у чат, не вставляйте в `VITE_*` змінні та не комітьте у Git.

## 4. Додати змінні в Netlify

У **Netlify → Site configuration → Environment variables** додайте:

```text
INSTAGRAM_ACCESS_TOKEN=<long-lived token>
INSTAGRAM_USER_ID=<Instagram User ID, optional>
INSTAGRAM_API_VERSION=v26.0
```

Область дії: Production і Deploy Previews. Після збереження виконайте новий deploy.

## 5. Перевірити

1. Локально створіть `.env` (файл ігнорується Git) з тими самими змінними.
2. Запустіть `npm run dev:netlify`, а не лише `npm run dev`, бо потрібна Netlify Function.
3. Відкрийте `http://localhost:8888/api/instagram-feed` і перевірте `ok: true`.
4. Відкрийте головну сторінку: після секції проєктів мають з'явитися активні Stories та 6 останніх постів.
5. У production перевірте Network: браузер повинен бачити тільки `/api/instagram-feed`, а не `graph.instagram.com` і не access token.

## 6. Підтримка токена

Long-lived token потрібно оновлювати до завершення строку дії. Найпростіший перший варіант — поставити нагадування кожні 45–50 днів, згенерувати/оновити токен у Meta та замінити `INSTAGRAM_ACCESS_TOKEN` у Netlify. Пізніше можна додати окрему scheduled function з безпечним сховищем для автоматичного refresh.

## Відомі обмеження

- Stories доступні лише поки вони активні (приблизно 24 години); архів Stories API не повертає.
- Частина Stories може не повертатися через обмеження Meta (наприклад, деякі reshared або захищені матеріали).
- URL медіа від Meta не слід зберігати назавжди: вони можуть змінюватися, тому функція запитує актуальні URL та коротко кешує відповідь.
- Якщо API або токен недоступні, сайт не падає: секція показує посилання на Instagram-профіль.
