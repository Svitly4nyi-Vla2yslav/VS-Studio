# UTM campaign guide

Base URL: `https://vs-web-studio.de/`

Use lowercase values with underscores. Keep campaign names stable so reports remain comparable. UTM parameters belong only on inbound campaign links, never on internal site navigation.

| Channel | Ready-to-use URL |
| --- | --- |
| Instagram profile / posts | `https://vs-web-studio.de/?utm_source=instagram&utm_medium=social&utm_campaign=local_launch` |
| Facebook profile / posts | `https://vs-web-studio.de/?utm_source=facebook&utm_medium=social&utm_campaign=local_launch` |
| LinkedIn company page | `https://vs-web-studio.de/?utm_source=linkedin&utm_medium=social&utm_campaign=webdesign_hildesheim` |
| Google Business Profile | `https://vs-web-studio.de/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=local_profile` |
| Email newsletter | `https://vs-web-studio.de/?utm_source=newsletter&utm_medium=email&utm_campaign=monthly_update` |
| Email signature | `https://vs-web-studio.de/?utm_source=email_signature&utm_medium=email&utm_campaign=always_on` |
| Printed flyer QR | `https://vs-web-studio.de/?utm_source=flyer&utm_medium=qr&utm_campaign=hildesheim_local` |
| Business card QR | `https://vs-web-studio.de/?utm_source=business_card&utm_medium=qr&utm_campaign=offline_networking` |

Optional `utm_content` should distinguish creative variants, for example `hero_video` or `case_study`. Use `utm_term` only for a paid-search keyword or another meaningful term. Do not place names, emails, phone numbers, message text, or other personal data in UTM values.

The application accepts only `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`, truncates values to 200 characters, and stores them in session storage only when statistics consent exists.

