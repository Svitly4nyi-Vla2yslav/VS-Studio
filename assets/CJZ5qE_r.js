import{w as x,j as e,o,u as oe,a6 as d,a7 as T,B as N,F as q,a8 as b,a9 as l,T as le,a as se,aa as c,I as S,h as de,$ as ce,d as h,y as pe,c as E,k as U,m as Z,ab as Y,l as J,ac as _,g as i,E as X,P as me,b as ue,M as ge}from"./DJVUdjIW.js";const be=(n,g,a,m)=>`${a}${n.toFixed(g)}${m}`,M=({start:n,max:g,target:a,decimals:m=0,prefix:A="",suffix:C="",durationMs:v=1800,storageKey:k})=>{const s=a??g,[r,u]=x.useState(n),[te,K]=x.useState(!0),j=x.useRef(null);x.useEffect(()=>{if(typeof window>"u")return;if(k&&window.sessionStorage.getItem(k)==="1"){u(s),K(!1);return}let L=0;const O=n,V=s,F=W=>{L||(L=W);const Q=Math.min((W-L)/v,1),re=O+(V-O)*Q;u(re),Q<1?j.current=window.requestAnimationFrame(F):(K(!1),u(V),k&&window.sessionStorage.setItem(k,"1"))};return j.current=window.requestAnimationFrame(F),()=>{j.current&&window.cancelAnimationFrame(j.current)}},[v,s,n,k]);const ne=x.useMemo(()=>be(r,m,A,C),[r,m,A,C]);return e.jsxs(o.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[ne,te?e.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},he=""+new URL("DgMdhrch.webp",import.meta.url).href,ke={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşterilere","kontrol edilebilir bir sistemle"],heroLead:"Satış, pazarlama ve işletme sahiplerinin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik görüşmeyi başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Kalifikasyonu","Atıf"],heroChipValues:["Canlı yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Takip","Yapay Zeka Kalifikasyonu","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel müşteri puanlama","ROAS görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: güçlü bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","Sistem","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Performansı, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği kritik rakamlarla değerlendiriyoruz.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI","CRM senkronizasyonu","GDPR modu"],opsTitle:"Operasyon Notları",opsItems:["Haftalık test sırası","Bütçenin yeniden dağıtılması","Dönüşüm hunisi QA kontrolü"],packagesTitle:"SaaS mantığıyla paketler",recommended:"Önerilen",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek görünümde birleşir. Kararlar sezgiyle değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel müşteri hacmi","Kalite puanı","Anlaşma hızı"],kpiPanelTitle:"Canlı KPI sayaçları",kpiLabels:["Nitelikli potansiyel müşteriler","Ort. ilk yanıt","Randevu oranı","ROAS kümeleri"],controlBadges:["Lead kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam talep edin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Pixel, sunucu tarafı izleme, CRM ve GDPR kurulumu ile landing page veya çok sayfalı site.",outcome:"Her müşteri izlenebilir şekilde kaydedilir ve net biçimde doğru kanala atanır.",kpis:["İzleme oranı","Form doldurma","Potansiyel müşteri kaynağı netliği"],details:["İzin modu doğru yapılandırılır","Arama ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Kalifikasyon Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini yavaşlatıyor.",system:"Yapay zeka chatbot, otomatik kalifikasyon, WhatsApp/Instagram DM akışları, e-posta otomasyonu ve lead puanlama.",outcome:"Ekip, zaman alan ilk eleme yerine satışa daha yakın potansiyel müşterilere odaklanır.",kpis:["İlk yanıt süresi","Nitelikli potansiyel müşteri oranı","Satış ekibi verimi"],details:["Sektöre özel prompt akışları","No-show hatırlatmaları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinim",problem:"Bütçe, kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Ads + TikTok, A/B testleri, benzer kitleler, dönüşüm takibi ve ROAS görünürlüğü.",outcome:"Bütçe, sadece tıklama hacmine değil daha yüksek lead kalitesine sahip kampanyalara kayar.",kpis:["Nitelikli lead başı maliyet","Kampanya bazlı ROAS","Kazanan kreatif oranı"],details:["Bölgesel kampanya kümeleri","Test edilen kreatif varyasyonları","Sinyal bazlı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine göre alınıyor.",system:"Tek panelde kanal, huni ve CRM görünümlerini birleştiren kontrol odası yaklaşımı.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları veriye dayalı ve izlenebilir olur.",kpis:["Randevuya dönüşüm","Anlaşma oranı","Boru hattı hızı"],details:["Bölgeye ve hizmete göre segmentasyon","Huni düşüş uyarıları","Aylık hipotez listesi"]}},packages:[{id:"baslangic",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir lead temeli kurmak isteyen yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pixel + izin modu","CRM yakalama","Temel raporlama"],effect:"Lead kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"buyume",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli lead'lere ihtiyaç duyan ve aktif satış yapan ekipler için.",items:["Google + Meta kampanyaları","Yapay zeka kalifikasyon akışları","A/B test kurulumu","Lead puanlama + otomasyon"],effect:"Daha hızlı yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"olcek",title:"Ölçek",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu tarafı ilişkilendirme","Operasyonel web uygulama katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçekleme."}],timeline:[["01","Stratejik görüşme","Hedef pazar, teklif ve lead darboğazı net biçimde tanımlanır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlenir."],["03","Kurulum aşaması","Web sitesi, otomasyonlar ve entegrasyonlar uygulanır."],["04","Yayın","QA takibi, kampanya yayını ve CRM akışları devreye alınır."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler yapılır."],["06","Ölçekleme","İşe yarayan rotalar yeni bölgelere ve hizmetlere genişletilir."]]},ye={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","النظام","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"الباقات بمنطق SaaS",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"الانطلاق",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"التوسع",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},xe={copy:{eyebrow:"Systemy leadowe dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","w kwalifikowane leady","jako sterowalny system"],heroLead:"Łączymy stronę internetową, AI, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciel pracowali na tych samych danych.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ leadów","Kwalifikacja AI","Atrybucja"],heroChipValues:["Live intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + tracking","Kwalifikacja AI","Pipeline CRM"],heroBadges:["Tracking server-side","Lead scoring","Widok ROAS"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Nie klasyczny blok równych kart, tylko dominujący rdzeń, moduły uzupełniające i kompaktowa warstwa operacyjna.",trio:["Problem","System","Efekt"],detailsSummary:"Szczegóły wdrożenia",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każdy obszar oceniamy wyłącznie przez pryzmat wskaźników, które sprzedaż i marketing mogą wspólnie czytać oraz kontrolować.",signalLayerTitle:"Warstwa sygnałowa",signalItems:["Zdarzenia GA4","Meta CAPI","Synchronizacja CRM","Tryb DSGVO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Sloty QA dla lejka"],packagesTitle:"Pakiety w logice SaaS",recommended:"Polecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura dashboardu",controlPanelDesc:"Dane kanałów, sygnały lejka i status CRM zbieramy w jednym widoku. Decyzje zapadają na poziomie procesu, a nie na podstawie przeczucia.",miniCharts:["Liczba leadów","Quality Score","Tempo pipeline'u"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowane leady","Śr. pierwszy kontakt","Lead do terminu","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Kontrola lejka"],ctaBottom:"Zapytaj o zakres dla swojego systemu leadowego"},systems:{website:{title:"Silnik strony",problem:"Ruch jest, ale użytkownicy mobilni odpadają przed formularzem.",system:"Landing page albo strona wielopodstronowa z GA4, Meta Pixel, trackingiem server-side, CRM i konfiguracją DSGVO.",outcome:"Każdy lead jest rejestrowany w sposób możliwy do prześledzenia i jednoznacznie przypisany do kanału.",kpis:["Skuteczność trackingu","Ukończenie formularza","Przejrzystość źródła leada"],details:["Consent Mode skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","Push do CRM w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niekwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, auto-kwalifikacja, DM flow w WhatsAppie i Instagramie, automatyzacja e-maili oraz lead scoring.",outcome:"Zespół priorytetyzuje leady bliższe sprzedaży zamiast tracić czas na ręczną preselekcję.",kpis:["Czas pierwszej odpowiedzi","Udział kwalifikowanych leadów","Przepustowość zespołu sprzedaży"],details:["Ścieżki promptów dopasowane do branży","Przypomnienia o no-show","Priorytetyzacja według scoringu"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet rozkłada się między kanały bez wyraźnej pętli uczenia.",system:"Google Ads, Meta Ads i TikTok, testy A/B, lookalike'i, tracking konwersji i widok ROAS.",outcome:"Budżet trafia do kampanii o wyższej jakości leadów, a nie tylko do źródeł z dużą liczbą kliknięć.",kpis:["Koszt kwalifikowanego leada","ROAS według kampanii","Skuteczność kreacji"],details:["Regionalne klastry kampanii","Warianty formularzy w testach","Aktualizacje odbiorców oparte na sygnałach"]},analytics:{title:"Analityka kontrolna",problem:"Decyzje opierają się na screenshotach z platform zamiast na wiarygodnych danych z lejka.",system:"Dashboard control room z widokiem kanałów, lejka i CRM w jednej warstwie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są jasno uzasadnione danymi.",kpis:["Lead do terminu","Lead do sprzedaży","Tempo pipeline'u"],details:["Segmentacja według regionu i usługi","Alerty przy spadkach w lejku","Miesięczna lista hipotez"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Dla lokalnych firm, które przechodzą od zera do mierzalnej bazy leadów.",items:["Lejek webowy + GA4","Meta Pixel + consent","CRM capture","Podstawowe raportowanie"],effect:"Jasny obraz źródeł leadów i odporny proces startowy."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby kwalifikowanych leadów.",items:["Kampanie Google + Meta","AI qualification flows","Konfiguracja testów A/B","Lead scoring + automatyzacja"],effect:"Więcej kwalifikowanego popytu, lepszy czas reakcji i klarowna priorytetyzacja."},{id:"scale",title:"Scale",scale:3,lead:"Dla firm działających w wielu regionach albo klastrach usług.",items:["Sterowanie multi-channel","Atrybucja server-side","Ops Web-App Layer","Control-Room Governance"],effect:"Skalowanie oparte na procesach i wiarygodnych danych zamiast ręcznego trial-and-error."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i główne wąskie gardło leadowe są jasno definiowane."],["02","Dokument scope","Ustalamy plan kanałów, plan trackingu i odpowiedzialności."],["03","Faza build","Wdrażamy stronę, automatyzacje i integracje."],["04","Launch","Uruchamiamy QA trackingu, start kampanii i przepływy CRM."],["05","Optymalizacja","Co tydzień testujemy kreacje, lejek i logikę kwalifikacji."],["06","Skalowanie","Działające ścieżki rozszerzamy na kolejne regiony i usługi."]]},fe={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},ve={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان لید","صلاحیت‌سنجی با هوش مصنوعی","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مسئله","سیستم","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","Meta CAPI","همگام‌سازی CRM","حالت GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","بازتخصیص بودجه","بازبینی کیفیت قیف"],packagesTitle:"پکیج‌ها با منطق SaaS",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده‌های زنده KPI",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"لندینگ‌پیج یا سایت چندصفحه‌ای با GA4، Meta Pixel، رهگیری سمت سرور، CRM و راه‌اندازی GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت‌بات هوش مصنوعی، صلاحیت‌سنجی خودکار، فلوهای DM در WhatsApp/Instagram، اتوماسیون ایمیل و امتیازدهی لید.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"starter",title:"استارتر",scale:1,lead:"برای کسب‌وکارهای محلی که می‌خواهند از صفر یک پایه لید قابل اندازه‌گیری بسازند.",items:["قیف تبدیل وب + GA4","Meta Pixel + consent mode","دریافت در CRM","گزارش‌گیری پایه"],effect:"شفافیت در منبع لیدها و یک شروع منعطف."},{id:"growth",title:"رشد",scale:2,recommended:!0,lead:"برای تیم‌های فروش فعال که به لیدهای واجد شرایط‌تر نیاز دارند.",items:["کمپین‌های Google + Meta","جریان‌های صلاحیت‌سنجی با AI","راه‌اندازی A/B تست","امتیازدهی لید + اتوماسیون"],effect:"درخواست باکیفیت‌تر، پاسخ سریع‌تر و اولویت‌بندی شفاف‌تر."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت‌هایی با چند منطقه یا چند خوشه خدماتی.",items:["کنترل چندکاناله","Attribution سمت سرور","لایه وب‌اپ عملیاتی","مدیریت اتاق کنترل"],effect:"رشد بر پایه فرایندها و داده‌های قابل اعتماد، نه آزمون‌وخطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},ze={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},we={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},Ae=JSON.parse('{"copy":{"eyebrow":"Î—Î³ÎµÏ„Î¹ÎºÎ¬ ÏƒÏ…ÏƒÏ„Î®Î¼Î±Ï„Î± Î³Î¹Î± Ï„Î¿Ï€Î¹ÎºÎ­Ï‚ ÎµÏ„Î±Î¹ÏÎµÎ¯ÎµÏ‚ ÏƒÏ„Î· Î“ÎµÏÎ¼Î±Î½Î¯Î±","heroTitle":["Î‘Ï€ÏŒ Î¤ÏÎ¿Ï‡Î±Î¯Î±","Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿Î¹ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿Î¹ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚","Ï‰Ï‚ ÎµÎ»ÎµÎ³Ï‡ÏŒÎ¼ÎµÎ½Î¿ ÏƒÏÏƒÏ„Î·Î¼Î±"],"heroLead":"Î£Ï…Î½Î´Î­Î¿Ï…Î¼Îµ Î¹ÏƒÏ„ÏŒÏ„Î¿Ï€Î¿, Ï„ÎµÏ‡Î½Î·Ï„Î® Î½Î¿Î·Î¼Î¿ÏƒÏÎ½Î·, Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Î±Î½Î±Î»Ï…Ï„Î¹ÎºÎ¬ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± ÏƒÎµ Î¼Î¯Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ® Î±ÏÏ‡Î¹Ï„ÎµÎºÏ„Î¿Î½Î¹ÎºÎ®, Î­Ï„ÏƒÎ¹ ÏŽÏƒÏ„Îµ Î¿Î¹ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚, Ï„Î¿ Î¼Î¬ÏÎºÎµÏ„Î¹Î½Î³Îº ÎºÎ±Î¹ Î¿Î¹ Î¹Î´Î¹Î¿ÎºÏ„Î®Ï„ÎµÏ‚ Î½Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¿ÏÎ½ Î¼Îµ Ï„Î± Î¯Î´Î¹Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î±.","ctaTop":"ÎˆÎ½Î±ÏÎ¾Î· ÏƒÏ„ÏÎ±Ï„Î·Î³Î¹ÎºÎ®Ï‚ ÎºÎ»Î®ÏƒÎ·Ï‚","heroChips":["Î¡Î¿Î® Î¼Î¿Î»ÏÎ²Î´Î¿Ï…","AI Qualify","Î‘Î½Î±Ï†Î¿ÏÎ¬"],"heroChipValues":["Î–Ï‰Î½Ï„Î±Î½Î® Ï€ÏÏŒÏƒÎ»Î·ÏˆÎ·","DM + Bot","GA4 + CRM"],"flowNodes":["Google / Meta / TikTok","Î ÏÎ¿ÏƒÎ³ÎµÎ¯Ï‰ÏƒÎ· + Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·","Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ· AI","Î‘Î³Ï‰Î³ÏŒÏ‚ CRM"],"heroBadges":["Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î ÏÏ‰Ï„Î¿Î´Î¹ÎºÏŽÎ½","Î ÏÎ¿Î²Î¿Î»Î® ROAS"],"servicesTitle":"Î¥Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚ Ï‰Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ­Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ ÏƒÏ…ÏƒÏ„Î®Î¼Î±Ï„Î¿Ï‚","servicesDesc":"Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î­Î½Î± Î¿Î¼Î¿Î¹ÏŒÎ¼Î¿ÏÏ†Î¿ Î¼Ï€Î»Î¿Îº ÎºÎ¬ÏÏ„Î±Ï‚: Î­Î½Î±Ï‚ ÎºÏ…ÏÎ¯Î±ÏÏ‡Î¿Ï‚ Ï€Ï…ÏÎ®Î½Î±Ï‚, Ï€Î»ÎµÏ…ÏÎ¹ÎºÎ­Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ ÎºÎ±Î¹ Î­Î½Î± ÏƒÏ…Î¼Ï€Î±Î³Î­Ï‚ ÎµÏ€Î¯Ï€ÎµÎ´Î¿ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½.","trio":["Î ÏÏŒÎ²Î»Î·Î¼Î±","ÏƒÏÏƒÏ„Î·Î¼Î±","Î‘Ï€Î¿Ï„Î­Î»ÎµÏƒÎ¼Î±"],"detailsSummary":"Î›ÎµÏ€Ï„Î¿Î¼Î­ÏÎµÎ¹ÎµÏ‚ Ï…Î»Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚","kpiBadgesTitle":"Î£Î®Î¼Î±Ï„Î± KPI","kpiBadgesDesc":"ÎšÎ¬Î¸Îµ Î±Ï€ÏŒÎ´Î¿ÏƒÎ· Î±Î¾Î¹Î¿Î»Î¿Î³ÎµÎ¯Ï„Î±Î¹ Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÏ„Î¹ÎºÎ¬ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÏŽÎ½Ï„Î±Ï‚ Î²Î±ÏƒÎ¹ÎºÎ¬ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± Ï€Î¿Ï… Î¿Î¹ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï„Î¿ Î¼Î¬ÏÎºÎµÏ„Î¹Î½Î³Îº Î¼Ï€Î¿ÏÎ¿ÏÎ½ Î½Î± Î´Î¹Î±Î²Î¬ÏƒÎ¿Ï…Î½ ÎºÎ±Î¹ Î½Î± ÎµÎ»Î­Î³Î¾Î¿Ï…Î½ Î¼Î±Î¶Î¯.","signalLayerTitle":"Î•Ï€Î¯Ï€ÎµÎ´Î¿ ÏƒÎ®Î¼Î±Ï„Î¿Ï‚","signalItems":["Î“ÎµÎ³Î¿Î½ÏŒÏ„Î± GA4","Meta CAPI","CRM Sync","ÎœÏŒÎ´Î± GDPR"],"opsTitle":"Î£Î·Î¼ÎµÎ¹ÏŽÏƒÎµÎ¹Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½","opsItems":["Î•Î²Î´Î¿Î¼Î±Î´Î¹Î±Î¯Î± Î¿Ï…ÏÎ¬ Î´Î¿ÎºÎ¹Î¼Î®Ï‚","Î‘Î½Î±ÎºÎ±Ï„Î±Î½Î¿Î¼Î® Î ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼Î¿Ï","ÎšÎ¿Ï…Î»Î¿Ï‡Î­ÏÎ·Î´ÎµÏ‚ QA Funnel"],"packagesTitle":"Pakete in SaaS-Logik","recommended":"Î£Ï…Î½Î¹ÏƒÏ„Î¬Ï„Î±Î¹","timelineTitle":"Î ÏŽÏ‚ Î´Î¿Ï…Î»ÎµÏÎ¿Ï…Î¼Îµ","stepLabel":"Î’Î®Î¼Î±","controlTitle":"Î§ÏŽÏÎ¿Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï…: Î‘Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î± ÏƒÎµ Ï€ÏÎ±Î³Î¼Î±Ï„Î¹ÎºÏŒ Ï‡ÏÏŒÎ½Î¿","controlPanelTitle":"Î‘ÏÏ‡Î¹Ï„ÎµÎºÏ„Î¿Î½Î¹ÎºÎ® Ï„Î±Î¼Ï€Î»ÏŒ","controlPanelDesc":"Î¤Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î± ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Ï„Î± ÏƒÎ®Î¼Î±Ï„Î± Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚ ÎºÎ±Î¹ Î· ÎºÎ±Ï„Î¬ÏƒÏ„Î±ÏƒÎ· CRM ÏƒÏ…Î³ÎºÎ»Î¯Î½Î¿Ï…Î½ ÏƒÎµ Î¼Î¯Î± Ï€ÏÎ¿Î²Î¿Î»Î®. ÎŸÎ¹ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ Î»Î±Î¼Î²Î¬Î½Î¿Î½Ï„Î±Î¹ ÏƒÎµ ÎµÏ€Î¯Ï€ÎµÎ´Î¿ Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¯Î±Ï‚ Î±Î½Ï„Î¯ Î½Î± Î²Î±ÏƒÎ¯Î¶Î¿Î½Ï„Î±Î¹ ÏƒÏ„Î·Î½ Î±Î¯ÏƒÎ¸Î·ÏƒÎ· Ï„Î¿Ï… ÎµÎ½Ï„Î­ÏÎ¿Ï….","miniCharts":["ÎŒÎ³ÎºÎ¿Ï‚ Î¼Î¿Î»ÏÎ²Î´Î¿Ï…","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Ï€Î¿Î¹ÏŒÏ„Î·Ï„Î±Ï‚","Î¤Î±Ï‡ÏÏ„Î·Ï„Î± ÏƒÏ…Î¼Ï†Ï‰Î½Î¯Î±Ï‚"],"kpiPanelTitle":"Î–Ï‰Î½Ï„Î±Î½Î¿Î¯ Î¼ÎµÏ„ÏÎ·Ï„Î­Ï‚ KPI","kpiLabels":["Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿Î¹ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Î¯ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚","ÎœÎ­ÏƒÎ¿Ï‚ ÏŒÏÎ¿Ï‚ Î ÏÏŽÏ„Î· Î±Ï€Î¬Î½Ï„Î·ÏƒÎ·","ÎŸÎ´Î·Î³Î®ÏƒÏ„Îµ ÏƒÏ„Î¿ ÏÎ±Î½Ï„ÎµÎ²Î¿Ï","ÏƒÏ…ÏƒÏ„Î¬Î´ÎµÏ‚ Î±Ï€ÏŒÎ´Î¿ÏƒÎ·Ï‚ Î´Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ ÎµÏ€Î­Î½Î´Ï…ÏƒÎ·Ï‚ (ROAS)."],"controlBadges":["ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Î·Î»ÎµÎºÏ„ÏÎ¿Î´Î¯Î¿Ï…","ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼Î¿Ï","ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚"],"ctaBottom":"Î‘Î¯Ï„Î·Î¼Î± Ï€ÎµÎ´Î¯Î¿Ï… ÎµÏ†Î±ÏÎ¼Î¿Î³Î®Ï‚ Î³Î¹Î± Ï„Î¿ ÏƒÏÏƒÏ„Î·Î¼Î¬ ÏƒÎ±Ï‚"},"systems":{"website":{"title":"ÎœÎ·Ï‡Î±Î½Î® Î¹ÏƒÏ„ÏŒÏ„Î¿Ï€Î¿Ï…","problem":"Î¥Ï€Î¬ÏÏ‡ÎµÎ¹ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î±, Î±Î»Î»Î¬ Î¿Î¹ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ ÎºÎ¹Î½Î·Ï„ÏŽÎ½ ÎµÎ³ÎºÎ±Ï„Î±Î»ÎµÎ¯Ï€Î¿Ï…Î½ Ï„Î· Ï†ÏŒÏÎ¼Î±.","system":"Landing/Multi-Page Î¼Îµ GA4, Meta Pixel, Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®, CRM ÎºÎ±Î¹ ÏÏÎ¸Î¼Î¹ÏƒÎ· GDPR.","outcome":"ÎšÎ¬Î¸Îµ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿Ï‚ Ï€ÎµÎ»Î¬Ï„Î·Ï‚ ÎºÎ±Ï„Î±Î³ÏÎ¬Ï†ÎµÏ„Î±Î¹ Î¼Îµ Î±Î½Î¹Ï‡Î½ÎµÏÏƒÎ¹Î¼Î¿ Ï„ÏÏŒÏ€Î¿ ÎºÎ±Î¹ ÎµÎºÏ‡Ï‰ÏÎµÎ¯Ï„Î±Î¹ ÏƒÎ±Ï†ÏŽÏ‚ ÏƒÎµ Î­Î½Î± ÎºÎ±Î½Î¬Î»Î¹.","kpis":["Ï€Î¿ÏƒÎ¿ÏƒÏ„ÏŒ Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·Ï‚","Î£Ï…Î¼Ï€Î»Î®ÏÏ‰ÏƒÎ· ÎµÎ½Ï„ÏÏ€Î¿Ï…","Î”Î¹Î±ÏÎ³ÎµÎ¹Î± Ï€Î·Î³Î®Ï‚ Î¼Î¿Î»ÏÎ²Î´Î¿Ï…"],"details":["Î— Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯Î± ÏƒÏ…Î½Î±Î¯Î½ÎµÏƒÎ·Ï‚ Î´Î¹Î±Î¼Î¿ÏÏ†ÏŽÎ¸Î·ÎºÎµ ÏƒÏ‰ÏƒÏ„Î¬","Î•ÎºÎ´Î·Î»ÏŽÏƒÎµÎ¹Ï‚ ÎºÎ»Î®ÏƒÎµÏ‰Î½ ÎºÎ±Î¹ WhatsApp","CRM push ÏƒÎµ Ï€ÏÎ±Î³Î¼Î±Ï„Î¹ÎºÏŒ Ï‡ÏÏŒÎ½Î¿"]},"ai":{"title":"Î•Ï€Î¯Ï€ÎµÎ´Î¿ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚ AI","problem":"Î Î¬ÏÎ± Ï€Î¿Î»Î»Î­Ï‚ Î±ÎºÎ±Ï„Î¬Î»Î»Î·Î»ÎµÏ‚ Î­ÏÎµÏ…Î½ÎµÏ‚ Î¼Ï€Î»Î¿ÎºÎ¬ÏÎ¿Ï…Î½ Ï„Î¹Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï„Î·Î½ Ï„Î·Î»ÎµÏ†Ï‰Î½Î¹ÎºÎ® Î¿Î¼Î¬Î´Î±.","system":"AI chatbot, Î±Ï…Ï„ÏŒÎ¼Î±Ï„Î· Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·, ÏÎ¿Î­Ï‚ DM ÏƒÎµ WhatsApp/Instagram, Î±Ï…Ï„Î¿Î¼Î±Ï„Î¿Ï€Î¿Î¯Î·ÏƒÎ· email, Î²Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î·.","outcome":"Î— Î¿Î¼Î¬Î´Î± Î´Î¯Î½ÎµÎ¹ Ï€ÏÎ¿Ï„ÎµÏÎ±Î¹ÏŒÏ„Î·Ï„Î± ÏƒÏ„Î¿Ï…Ï‚ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿ÏÏ‚ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ‡ÎµÏ„Î¯Î¶Î¿Î½Ï„Î±Î¹ Î¼Îµ Ï„Î¹Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ Î±Î½Ï„Î¯ Ï„Î·Ï‚ Ï‡ÏÎ¿Î½Î¿Î²ÏŒÏÎ±Ï‚ Î±ÏÏ‡Î¹ÎºÎ®Ï‚ Ï„Î±Î¾Î¹Î½ÏŒÎ¼Î·ÏƒÎ·Ï‚.","kpis":["Î ÏÏŽÏ„Î¿Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚ Î±Ï€ÏŒÎºÏÎ¹ÏƒÎ·Ï‚","Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿ Î¼ÎµÏÎ¯Î´Î¹Î¿ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î·","Î”Î¹Î±ÎºÎ¯Î½Î·ÏƒÎ· Ï„Î·Ï‚ ÎŸÎ¼Î¬Î´Î±Ï‚ Î Ï‰Î»Î®ÏƒÎµÏ‰Î½"],"details":["Î”Î¹Î±Î´ÏÎ¿Î¼Î­Ï‚ Ï€ÏÎ¿Ï„ÏÎ¿Ï€Î®Ï‚ Î³Î¹Î± ÏƒÏ…Î³ÎºÎµÎºÏÎ¹Î¼Î­Î½Î¿ ÎºÎ»Î¬Î´Î¿","Î§Ï‰ÏÎ¯Ï‚ ÎµÎ¼Ï†Î¬Î½Î¹ÏƒÎ· Ï…Ï€ÎµÎ½Î¸Ï…Î¼Î¯ÏƒÎµÏ‰Î½","Î ÏÎ¿Ï„ÎµÏÎ±Î¹ÏŒÏ„Î·Ï„Î± Î±Î½Î¬ Î²Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î±"]},"ads":{"title":"Î‘Ï€ÏŒÎºÏ„Î·ÏƒÎ· ÎµÏ€Î¯ Ï€Î»Î·ÏÏ‰Î¼Î®","problem":"ÎŸ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒÏ‚ ÎºÎ±Ï„Î±Î½Î­Î¼ÎµÏ„Î±Î¹ Î¼ÎµÏ„Î±Î¾Ï Ï„Ï‰Î½ ÎºÎ±Î½Î±Î»Î¹ÏŽÎ½ Ï‡Ï‰ÏÎ¯Ï‚ ÏƒÎ±Ï†Î® Î²ÏÏŒÏ‡Î¿ ÎµÎºÎ¼Î¬Î¸Î·ÏƒÎ·Ï‚.","system":"Google Ads + Meta Ads + TikTok, Î´Î¿ÎºÎ¹Î¼Î­Ï‚ A/B, ÎµÎ¼Ï†Î±Î½Î¯ÏƒÎµÎ¹Ï‚, Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î¼ÎµÏ„Î±Ï„ÏÎ¿Ï€ÏŽÎ½ ÎºÎ±Î¹ Ï€ÏÎ¿Î²Î¿Î»Î® Î‘Ï€ÏŒÎ´Î¿ÏƒÎ·Ï‚ Î”Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ Î•Ï€Î­Î½Î´Ï…ÏƒÎ·Ï‚.","outcome":"ÎŸ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒÏ‚ ÏÎ­ÎµÎ¹ ÏƒÎµ ÎºÎ±Î¼Ï€Î¬Î½Î¹ÎµÏ‚ Î¼Îµ Ï…ÏˆÎ·Î»Î® Ï€Î¿Î¹ÏŒÏ„Î·Ï„Î± Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î· Î±Î½Ï„Î¯ Î³Î¹Î± ÎºÎ±Î¸Î±ÏÏŒ ÏŒÎ³ÎºÎ¿ ÎºÎ»Î¹Îº.","kpis":["ÎšÏŒÏƒÏ„Î¿Ï‚ Î±Î½Î¬ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î¿ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿ Ï€ÎµÎ»Î¬Ï„Î·","Î‘Ï€ÏŒÎ´Î¿ÏƒÎ· Î”Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ Î•Ï€Î­Î½Î´Ï…ÏƒÎ·Ï‚ ÎºÎ±Ï„Î¬ Campaign","Î Î¿ÏƒÎ¿ÏƒÏ„ÏŒ ÎºÎ­ÏÎ´Î¿Ï…Ï‚ Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¹ÎºÎ¿Ï"],"details":["Î ÎµÏÎ¹Ï†ÎµÏÎµÎ¹Î±ÎºÎ­Ï‚ Î¿Î¼Î¬Î´ÎµÏ‚ ÎµÎºÏƒÏ„ÏÎ±Ï„ÎµÎ¹ÏŽÎ½","Î Î±ÏÎ±Î»Î»Î±Î³Î­Ï‚ ÏƒÏ‡Î®Î¼Î±Ï„Î¿Ï‚ ÏƒÏ„Î· Î´Î¿ÎºÎ¹Î¼Î®","Î•Î½Î·Î¼ÎµÏÏŽÏƒÎµÎ¹Ï‚ ÎºÎ¿Î¹Î½Î¿Ï Î²Î¬ÏƒÎµÎ¹ ÏƒÎ®Î¼Î±Ï„Î¿Ï‚"]},"analytics":{"title":"Control Analytics","problem":"ÎŸÎ¹ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ Î²Î±ÏƒÎ¯Î¶Î¿Î½Ï„Î±Î¹ ÏƒÎµ ÏƒÏ„Î¹Î³Î¼Î¹ÏŒÏ„Ï…Ï€Î± Î¿Î¸ÏŒÎ½Î·Ï‚ Ï€Î»Î±Ï„Ï†ÏŒÏÎ¼Î±Ï‚ Î±Î½Ï„Î¯ ÏƒÎµ Î±Î¾Î¹ÏŒÏ€Î¹ÏƒÏ„Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î± Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚.","system":"Î Î¯Î½Î±ÎºÎ±Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï… Î´Ï‰Î¼Î±Ï„Î¯Î¿Ï… Î¼Îµ Ï€ÏÎ¿Î²Î¿Î»Î­Ï‚ ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚ ÎºÎ±Î¹ CRM ÏƒÎµ Î­Î½Î± ÎµÏ€Î¯Ï€ÎµÎ´Î¿.","outcome":"ÎŸÎ¹ ÎµÎ²Î´Î¿Î¼Î±Î´Î¹Î±Î¯ÎµÏ‚ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î¿Î½ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒ, Ï„Î· Î²ÎµÎ»Ï„Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ· ÎºÎ±Î¹ Ï„Î·Î½ ÎºÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ· ÎµÎ¯Î½Î±Î¹ Î±Î½Î¹Ï‡Î½ÎµÏÏƒÎ¹Î¼ÎµÏ‚ Î²Î¬ÏƒÎµÎ¹ Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½.","kpis":["ÎŸÎ´Î®Î³Î·ÏƒÎµ ÏƒÏ„Î¿ ÏÎ±Î½Ï„ÎµÎ²Î¿Ï","ÎŸÎ´Î®Î³Î·ÏƒÎµ ÏƒÎµ ÏƒÏ…Î¼Ï†Ï‰Î½Î¯Î±","Î¤Î±Ï‡ÏÏ„Î·Ï„Î± Î±Î³Ï‰Î³Î¿Ï"],"details":["Î¤Î¼Î·Î¼Î±Ï„Î¿Ï€Î¿Î¯Î·ÏƒÎ· Î±Î½Î¬ Ï€ÎµÏÎ¹Î¿Ï‡Î®/Ï…Ï€Î·ÏÎµÏƒÎ¯Î±","Î•Î¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÎ¹Ï‚ Ï€Ï„ÏŽÏƒÎ·Ï‚ Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚","ÎœÎ·Î½Î¹Î±Î¯Î± Î»Î¯ÏƒÏ„Î± Ï…Ï€Î¿Î¸Î­ÏƒÎµÏ‰Î½"]}},"packages":[{"id":"Î¼Î¯Î¶Î±","title":"ÎœÎ¯Î¶Î±","scale":1,"lead":"Î“Î¹Î± Ï„Î¿Ï€Î¹ÎºÎ­Ï‚ ÎµÏ€Î¹Ï‡ÎµÎ¹ÏÎ®ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Ï€Î·Î³Î±Î¯Î½Î¿Ï…Î½ Î±Ï€ÏŒ Ï„Î¿ Î¼Î·Î´Î­Î½ ÏƒÎµ Î¼Î¹Î± Î¼ÎµÏ„ÏÎ®ÏƒÎ¹Î¼Î· Î²Î¬ÏƒÎ· Î´Ï…Î½Î·Ï„Î¹ÎºÏŽÎ½ Ï€ÎµÎ»Î±Ï„ÏŽÎ½.","items":["Î”Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ· Î™ÏƒÏ„Î¿Ï + GA4","Meta Pixels + Consent","Î›Î®ÏˆÎ· CRM","Î’Î±ÏƒÎ¹ÎºÎ® Î±Î½Î±Ï†Î¿ÏÎ¬"],"effect":"ÎšÎ±Î¸Î±ÏÎ® Î¬Ï€Î¿ÏˆÎ· Ï„Ï‰Î½ Ï€Î·Î³ÏŽÎ½ Î¼Î¿Î»ÏÎ²Î´Î¿Ï… ÎºÎ±Î¹ Î¼Î¹Î± Î±Î½Î¸ÎµÎºÏ„Î¹ÎºÎ® Î±ÏÏ‡Î¹ÎºÎ® Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¯Î±."},{"id":"Î±Î½Î¬Ï€Ï„Ï…Î¾Î·","title":"Î‘Î½Î¬Ï€Ï„Ï…Î¾Î·","scale":2,"recommended":true,"lead":"Î“Î¹Î± Î¿Î¼Î¬Î´ÎµÏ‚ Î¼Îµ ÎµÎ½ÎµÏÎ³Î­Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Ï‡ÏÎµÎ¹Î¬Î¶Î¿Î½Ï„Î±Î¹ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ¿Ï…Ï‚ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î¿Ï…Ï‚ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿ÏÏ‚ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚.","items":["ÎšÎ±Î¼Ï€Î¬Î½Î¹ÎµÏ‚ Google + Meta","Î¡Î¿Î­Ï‚ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚ AI","Î¡ÏÎ¸Î¼Î¹ÏƒÎ· Î´Î¿ÎºÎ¹Î¼Î®Ï‚ A/B","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î´Ï…Î½Î¬Î¼ÎµÏ‰Î½ + Î‘Ï…Ï„Î¿Î¼Î±Ï„Î¹ÏƒÎ¼ÏŒÏ‚"],"effect":"Î Î¹Î¿ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î· Î¶Î®Ï„Î·ÏƒÎ· Î¼Îµ ÎºÎ±Î»ÏÏ„ÎµÏÎ¿Ï…Ï‚ Ï‡ÏÏŒÎ½Î¿Ï…Ï‚ Î±Ï€ÏŒÎºÏÎ¹ÏƒÎ·Ï‚ ÎºÎ±Î¹ ÏƒÎ±Ï†Î® Î¹ÎµÏÎ¬ÏÏ‡Î·ÏƒÎ· Ï€ÏÎ¿Ï„ÎµÏÎ±Î¹Î¿Ï„Î®Ï„Ï‰Î½."},{"id":"ÎºÎ»Î¯Î¼Î±ÎºÎ±","title":"ÎšÎ»Î¯Î¼Î±ÎºÎ±","scale":3,"lead":"Î“Î¹Î± ÎµÏ„Î±Î¹ÏÎµÎ¯ÎµÏ‚ Î¼Îµ Ï€Î¿Î»Î»Î­Ï‚ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚ Î® Î¿Î¼Î¬Î´ÎµÏ‚ Ï…Ï€Î·ÏÎµÏƒÎ¹ÏŽÎ½.","items":["ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Ï€Î¿Î»Î»Î±Ï€Î»ÏŽÎ½ ÎºÎ±Î½Î±Î»Î¹ÏŽÎ½","Î‘Ï€ÏŒÎ´Î¿ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®","Î•Ï€Î¯Ï€ÎµÎ´Î¿ ÎµÏ†Î±ÏÎ¼Î¿Î³Î®Ï‚ Î™ÏƒÏ„Î¿Ï Ops","Î”Î¹Î±ÎºÏ…Î²Î­ÏÎ½Î·ÏƒÎ· Ï„Î·Ï‚ Î±Î¯Î¸Î¿Ï…ÏƒÎ±Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï…"],"effect":"ÎšÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ· Î¼Î­ÏƒÏ‰ Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¹ÏŽÎ½ ÎºÎ±Î¹ Î±Î¾Î¹ÏŒÏ€Î¹ÏƒÏ„Ï‰Î½ Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½ Î±Î½Ï„Î¯ Î³Î¹Î± Î¼Î· Î±Ï…Ï„ÏŒÎ¼Î±Ï„Î· Î´Î¿ÎºÎ¹Î¼Î® ÎºÎ±Î¹ ÏƒÏ†Î¬Î»Î¼Î±."}],"timeline":[["01","Î£Ï„ÏÎ±Ï„Î·Î³Î¹ÎºÎ® ÎºÎ»Î®ÏƒÎ·","Î— Î±Î³Î¿ÏÎ¬-ÏƒÏ„ÏŒÏ‡Î¿Ï‚, Î· Ï€ÏÎ¿ÏƒÏ†Î¿ÏÎ¬ ÎºÎ±Î¹ Ï„Î¿ ÏƒÎ·Î¼ÎµÎ¯Î¿ ÏƒÏ…Î¼Ï†ÏŒÏÎ·ÏƒÎ·Ï‚ ÎµÎ¯Î½Î±Î¹ ÏƒÎ±Ï†ÏŽÏ‚ ÎºÎ±Î¸Î¿ÏÎ¹ÏƒÎ¼Î­Î½Î±."],["02","ÎˆÎ³Î³ÏÎ±Ï†Î¿ Ï€ÎµÎ´Î¯Î¿Ï…","Î¤Î¿ ÏƒÏ‡Î­Î´Î¹Î¿ ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Ï„Î¿ ÏƒÏ‡Î­Î´Î¹Î¿ Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·Ï‚ ÎºÎ±Î¹ Î¿Î¹ ÎµÏ…Î¸ÏÎ½ÎµÏ‚ Î­Ï‡Î¿Ï…Î½ Î´Î¹Î¿ÏÎ¸Ï‰Î¸ÎµÎ¯."],["03","Î¦Î¬ÏƒÎ· ÎºÎ±Ï„Î±ÏƒÎºÎµÏ…Î®Ï‚","Î™ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±, Î±Ï…Ï„Î¿Î¼Î±Ï„Î¹ÏƒÎ¼Î¿Î¯ ÎºÎ±Î¹ ÎµÎ½ÏƒÏ‰Î¼Î±Ï„ÏŽÏƒÎµÎ¹Ï‚ Ï…Î»Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹."],["04","Î•ÎºÎºÎ¯Î½Î·ÏƒÎ·","Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· QA, ÎµÎºÎºÎ¯Î½Î·ÏƒÎ· ÎºÎ±Î¼Ï€Î¬Î½Î¹Î±Ï‚ ÎºÎ±Î¹ ÏÎ¿Î­Ï‚ CRM ÎµÎ¼Ï†Î±Î½Î¯Î¶Î¿Î½Ï„Î±Î¹ Î¶Ï‰Î½Ï„Î±Î½Î¬."],["05","Î’ÎµÎ»Ï„Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·","Î•Î²Î´Î¿Î¼Î±Î´Î¹Î±Î¯ÎµÏ‚ Î´Î¿ÎºÎ¹Î¼Î­Ï‚ Î³Î¹Î± Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¹ÎºÎ¬, Î´Î¹Î¿Ï‡ÎµÏ„ÎµÏÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·."],["06","ÎšÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ·","ÎŸÎ¹ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ­Ï‚ Î´Î¹Î±Î´ÏÎ¿Î¼Î­Ï‚ ÎµÏ€ÎµÎºÏ„ÎµÎ¯Î½Î¿Î½Ï„Î±Î¹ ÏƒÎµ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚/Ï…Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚."]]}'),Ce={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienÈ›i potenÈ›iali calificaÈ›i","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + UrmÄƒrire","Calificare AI","CRM Pipeline"],heroBadges:["UrmÄƒrire pe partea serverului","Punctajul potenÈ›ial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare È™i un strat de operaÈ›iuni compact.",trio:["ProblemÄƒ","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaÈ›ionale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrÄƒm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul rÄƒspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"SolicitaÈ›i domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmÄƒrire pe server, configurare CRM È™i GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmÄƒrire","Completarea formularului","Claritatea sursei potenÈ›iale"],details:["Modul de consimțământ configurat corect","Evenimente de apel È™i WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului rÄƒspuns","CotÄƒ de lead calificatÄƒ","Randamentul echipei de vânzări"],details:["CÄƒi prompte specifice industriei","No Show Mementouri","Prioritizare dupÄƒ scor"]},ads:{title:"AchiziÈ›ie plÄƒtitÄƒ",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemÄƒnÄƒri, urmÄƒrirea conversiilor È™i vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potenÈ›ial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","ActualizÄƒri ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazeazÄƒ pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacÈ›ie","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunarÄƒ de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bazÄƒ de lead-uri mÄƒsurabilÄƒ.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bazÄƒ"],effect:"Vedere clarÄƒ a surselor de plumb È™i un proces iniÈ›ial rezistent."},{id:"creÈ™tere",title:"CreÈ™tere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificatÄƒ, cu timpi de rÄƒspuns mai buni È™i prioritizare clarÄƒ."},{id:"scarÄƒ",title:"ScarÄƒ",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","PiaÈ›a È›intÄƒ, oferta È™i blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmÄƒrire È™i responsabilitÄƒÈ›ile sunt fixate."],["03","Faza de construire","Site-ul web, automatizÄƒrile È™i integrÄƒrile sunt implementate."],["04","Lansare","UrmÄƒrirea QA, lansarea campaniei È™i fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcÈ›ionale sunt extinse la regiuni/servicii."]]},je={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},Te={tr:ke,ar:ye,pl:xe,ku:fe,fa:ve,it:ze,es:we,el:Ae,ro:Ce,bg:je},Se=X`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,Me=X`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,Re=i(me)`
  position: relative;
  overflow: clip;
  padding-top: 0;
  background:
    radial-gradient(1200px 600px at 12% -8%, rgba(77, 55, 92, .12), transparent 60%),
    radial-gradient(1000px 680px at 88% 2%, rgba(214, 165, 66, .12), transparent 64%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 34px 34px;
    opacity: 0.38;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 0.5px, transparent 0.5px);
    background-size: 3px 3px;
    opacity: 0.08;
    pointer-events: none;
  }
`,z=i(o.section)`
  position: relative;
  margin-top: clamp(54px, 8vw, 108px);
  padding-inline: clamp(2px, 1vw, 12px);

  h2 {
    margin: 0 0 18px;
    line-height: 1.08;
  }

  > p {
    margin: 8px 0 22px;
  }
`,Pe=i.div`
  position: relative;
  width: 100vw;
  min-height: calc(100svh - 76px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: grid;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(5, 9, 17, 0.92) 0%, rgba(5, 9, 17, 0.76) 42%, rgba(5, 9, 17, 0.3) 76%, rgba(5, 9, 17, 0.68) 100%),
    linear-gradient(180deg, rgba(5, 9, 17, 0.28) 0%, rgba(5, 9, 17, 0.18) 50%, rgba(5, 9, 17, 0.86) 100%),
    url(${he});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 1px solid var(--obsidian-border);

  @media (max-width: 767px) {
    min-height: calc(100svh - 66px);
  }
`,Ie=i(o.section)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: clamp(24px, 3vw, 44px);
  align-items: center;
  min-height: calc(100svh - 124px);
  padding: clamp(28px, 4vw, 52px) var(--gutter) clamp(18px, 3vw, 34px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: calc(100svh - 76px);
    align-items: start;
    padding-top: clamp(28px, 6vw, 44px);
    padding-bottom: clamp(28px, 6vw, 44px);
  }
`,Le=i.div`
  display: grid;
  gap: 20px;
  align-content: center;

  @media (max-width: 980px) {
    align-content: start;
  }
`,Be=i.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: var(--gold-400);
`,De=i.h1`
  margin: 0;
  line-height: 0.92;
  max-width: 12ch;
  display: grid;
  gap: 6px;

  span:first-child {
    font-size: clamp(34px, 7vw, 68px);
    font-weight: 400;
    color: var(--champagne-text);
  }

  span:nth-child(2) {
    font-size: clamp(40px, 9vw, 84px);
    font-weight: 700;
    color: transparent;
    background: var(--gold-metal);
    background-clip: text;
    -webkit-background-clip: text;
  }

  span:last-child {
    font-size: clamp(30px, 6vw, 58px);
    font-weight: 500;
    color: var(--gold-300);
  }
`,Ge=i.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: var(--champagne-text);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`,$=i(ue)`
  width: fit-content;
  border: 1px solid rgba(255, 228, 184, 0.6);
  box-shadow:
    0 0 0 1px rgba(243, 154, 79, 0.5),
    0 14px 30px rgba(243, 154, 79, 0.24),
    0 0 28px rgba(243, 154, 79, 0.3);

  &:hover,
  &:focus-visible {
    transform: translateY(-3px) scale(1.01);
    box-shadow:
      0 0 0 1px rgba(255, 225, 181, 0.7),
      0 18px 40px rgba(243, 154, 79, 0.36),
      0 0 44px rgba(251, 196, 122, 0.4);
  }
`,Ke=i.div`
  position: relative;
  min-height: clamp(460px, 44vw, 640px);
  border-radius: 24px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(660px 280px at 70% -10%, rgba(214, 165, 66, .13), transparent 72%),
    linear-gradient(160deg, rgba(24, 21, 27, .95), rgba(5, 5, 6, .96));
  box-shadow:
    inset 0 1px 0 rgba(195, 230, 255, 0.18),
    inset 0 -20px 40px rgba(7, 11, 20, 0.7),
    0 30px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 16px;
    border: 1px solid rgba(127, 204, 255, 0.3);
    background-image:
      linear-gradient(rgba(142, 209, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(142, 209, 255, 0.08) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  @media (max-width: 760px) {
    min-height: auto;
  }
`,Oe=i.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(214, 165, 66, .24), transparent 70%);
  filter: blur(2px);
  animation: ${Me} 6.2s ease-in-out infinite;
`,Ve=i.div`
  position: absolute;
  inset: 44px 34px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;

  @media (max-width: 760px) {
    position: relative;
    inset: auto;
    padding: 18px 14px 16px;
    gap: 10px;
  }
`,Fe=i(o.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,B=i(o.div)`
  border-radius: 12px;
  border: 1px solid rgba(135, 209, 255, 0.24);
  background: rgba(15, 28, 44, 0.84);
  padding: 10px 12px;
  backdrop-filter: blur(3px);

  b {
    display: block;
    font-size: 15px;
    color: #eff8ff;
  }

  span {
    font-size: 11px;
    color: rgba(191, 220, 247, 0.78);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,We=i(o.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,Qe=i.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: linear-gradient(175deg, rgba(15, 30, 48, 0.88), rgba(11, 19, 31, 0.84));
  padding: 14px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 93%, rgba(135, 206, 250, 0.08) 93%);
    background-size: 100% 20%;
  }

  @media (max-width: 760px) {
    min-height: 180px;
  }
`,Ne=i.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  gap: 8px;
  height: 100%;

  span {
    display: block;
    flex: 1;
    border-radius: 8px 8px 2px 2px;
    background: linear-gradient(180deg, rgba(101, 217, 255, 0.9), rgba(44, 110, 197, 0.34));
    transform-origin: bottom center;
    will-change: transform, filter, opacity;
  }
`,qe=i.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: rgba(10, 19, 30, 0.8);
  padding: 12px;
  display: grid;
  gap: 8px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
`,R=i(o.div)`
  border-radius: 10px;
  border: 1px solid rgba(116, 205, 255, 0.3);
  background: rgba(20, 34, 53, 0.8);
  padding: 8px 10px;
  font-size: 12px;
  color: rgba(219, 239, 255, 0.94);

  @media (max-width: 760px) {
    font-size: 11px;
    padding: 7px 8px;
  }
`,D=i(o.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,y=i(o.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,Ee=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,$e=i.button`
  border-radius: 999px;
  border: 1px solid ${({$active:n})=>n?"rgba(122, 206, 255, 0.72)":"rgba(255, 255, 255, 0.18)"};
  background: ${({$active:n})=>n?"rgba(25, 58, 87, 0.72)":"rgba(255, 255, 255, 0.04)"};
  color: ${({$active:n})=>n?"#ecf7ff":"rgba(225, 239, 255, 0.84)"};
  padding: 8px 14px;
  font-size: 13px;
  transition: all var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(134, 213, 255, 0.66);
  }
`,He=i(o.div)`
  margin-top: 24px;
  display: grid;
  gap: 14px;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-areas:
    'dominant mediumA compact'
    'dominant mediumB compact';

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'dominant dominant'
      'mediumA mediumB'
      'compact compact';
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'dominant'
      'mediumA'
      'mediumB'
      'compact';
  }
`,P=i(o.article)`
  grid-area: ${({$area:n})=>n??"auto"};
  border-radius: ${({$compact:n})=>n?"16px":"20px"};
  border: 1px solid ${({$featured:n})=>n?"var(--obsidian-border-hot)":"var(--obsidian-border)"};
  background:
    radial-gradient(420px 220px at 12% -12%, rgba(214, 165, 66, .1), transparent 65%),
    linear-gradient(168deg, rgba(23, 20, 26, .95), rgba(5, 5, 6, .94));
  padding: ${({$compact:n})=>n?"18px":"24px"};
  box-shadow:
    ${({$featured:n})=>n?"0 0 0 1px rgba(91, 198, 255, 0.2),":""}
    inset 0 1px 0 rgba(178, 216, 245, 0.12),
    0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--obsidian-border-hot);
    box-shadow:
      0 0 0 1px rgba(104, 208, 255, 0.2),
      inset 0 1px 0 rgba(178, 216, 245, 0.14),
      0 26px 50px rgba(0, 0, 0, 0.4);
  }

  h3 {
    margin: 0 0 12px;
    font-size: ${({$compact:n})=>n?"18px":"24px"};
    line-height: 1.2;
  }

  p {
    margin: 8px 0 14px;
    line-height: 1.58;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,Ue=i.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,G=i(o.div)`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 14px;

  strong {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9fdffd;
    margin-bottom: 4px;
  }

  span {
    color: rgba(229, 241, 252, 0.88);
    font-size: 14px;
    line-height: 1.5;
  }
`,Ze=i.details`
  margin-top: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 10px;

  summary {
    cursor: pointer;
    color: #d6ecff;
    font-size: 13px;
    font-weight: 600;
  }

  ul {
    margin: 12px 0 0;
    padding-left: 18px;
    display: grid;
    gap: 6px;
    color: rgba(225, 240, 255, 0.84);
    font-size: 13px;
  }
`,Ye=i.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  span {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(226, 241, 255, 0.84);
  }
`,Je=i(o.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,_e=i(o.article)`
  position: relative;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({$recommended:n})=>n?"rgba(255, 206, 121, 0.66)":"rgba(255, 255, 255, 0.16)"};
  background:
    ${({$recommended:n})=>n?"radial-gradient(380px 180px at 80% -20%, rgba(255, 205, 116, 0.16), transparent 66%), linear-gradient(170deg, rgba(20, 26, 38, 0.96), rgba(12, 16, 25, 0.95))":"linear-gradient(170deg, rgba(16, 23, 35, 0.94), rgba(11, 15, 23, 0.92))"};
  box-shadow:
    ${({$recommended:n})=>n?"0 0 34px rgba(255, 198, 99, 0.24),":""}
    inset 0 1px 0 rgba(192, 224, 249, 0.13),
    0 24px 44px rgba(0, 0, 0, 0.35);

  h3 {
    margin: 0;
    font-size: 26px;
  }
`,Xe=i.span`
  position: absolute;
  top: 12px;
  right: 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 205, 121, 0.72);
  color: #ffdeab;
  padding: 5px 10px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ea=i.div`
  margin-top: 14px;
  display: flex;
  gap: 6px;

  i {
    height: 6px;
    flex: 1;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
  }

  i.on {
    background: linear-gradient(90deg, #45cfff, #ffdca8);
    box-shadow: 0 0 12px rgba(80, 200, 255, 0.35);
  }
`,aa=i.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,ia=i(o.ol)`
  list-style: none;
  margin: 0;
  padding: 36px 0 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
    height: 2px;
    background: linear-gradient(90deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    box-shadow: 0 0 18px rgba(75, 182, 255, 0.36);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 0;

    &::before {
      left: 11px;
      top: 0;
      bottom: 0;
      width: 2px;
      right: auto;
      height: auto;
      background: linear-gradient(180deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    }
  }
`,ta=i(o.li)`
  position: relative;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: linear-gradient(165deg, rgba(17, 24, 37, 0.94), rgba(10, 14, 22, 0.92));
  padding: 16px;
  min-height: 140px;
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth);

  &::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid rgba(117, 209, 255, 0.95);
    background: #0c141f;
    top: -30px;
    left: 16px;
    animation: ${Se} 2.8s infinite;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(133, 213, 255, 0.64);
  }

  @media (max-width: 980px) {
    margin-left: 28px;

    &::before {
      top: 18px;
      left: -23px;
    }
  }
`,na=i.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,ra=i.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,oa=i(o.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,H=i(o.article)`
  border-radius: 20px;
  border: 1px solid rgba(114, 200, 255, 0.28);
  background:
    radial-gradient(560px 260px at 86% -18%, rgba(70, 189, 255, 0.16), transparent 70%),
    linear-gradient(165deg, rgba(16, 25, 39, 0.95), rgba(9, 14, 22, 0.95));
  padding: 24px;
  box-shadow:
    inset 0 1px 0 rgba(180, 220, 250, 0.12),
    0 26px 50px rgba(0, 0, 0, 0.38);

  h3 {
    margin: 0 0 12px;
  }
`,la=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,I=i(o.div)`
  border-radius: 12px;
  border: 1px solid rgba(132, 209, 255, 0.24);
  background: rgba(14, 28, 43, 0.78);
  padding: 14px;

  span {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(181, 220, 249, 0.78);
  }

  strong {
    font-size: clamp(24px, 4vw, 34px);
    color: #ecf8ff;
    font-weight: 700;
  }
`,sa=i.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;

  div {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    min-height: 78px;
  }

  i {
    display: block;
    width: 100%;
    height: 6px;
    border-radius: 999px;
    margin-top: 8px;
    background: linear-gradient(90deg, rgba(61, 208, 255, 0.92), rgba(255, 214, 147, 0.84));
  }
`,w=i(ge)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,f={website:{title:"Website Engine",icon:e.jsx(_,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:e.jsx(J,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},aiMusic:{title:"AI Songs & Jingles",icon:e.jsx(Y,{}),problem:"Marken, Kampagnen und lokale Angebote bleiben online oft austauschbar und werden schnell uebersehen.",system:"KI-generierte Songs, Werbejingles und Brand Music mit Text, AI Vocal, Social-Media-Versionen und kommerziellem Sound.",outcome:"Das Angebot klingt einpraegsamer, wirkt eigenstaendiger und laesst sich in Reels, Ads, YouTube oder lokalen Kampagnen einsetzen.",kpis:["Recall Hook","Social Ad Fit","Brand Sound Consistency"],details:["Englische oder deutsche Lyrics","MP3 + WAV Export","Versionen fuer TikTok, Instagram und Ads"]},ads:{title:"Paid Acquisition",icon:e.jsx(Z,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:e.jsx(U,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},da={website:{title:"Website Engine",icon:e.jsx(_,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:e.jsx(J,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},aiMusic:{title:"AI Songs & Jingles",icon:e.jsx(Y,{}),problem:"Brands, campaigns and local offers are often hard to remember in social feeds.",system:"AI-generated songs, commercial jingles and brand music with lyrics, AI vocal, social cuts and commercial sound.",outcome:"The offer becomes more memorable and can be used in Reels, ads, YouTube and local campaigns.",kpis:["Recall Hook","Social Ad Fit","Brand Sound Consistency"],details:["English or German lyrics","MP3 + WAV export","Versions for TikTok, Instagram and ads"]},ads:{title:"Paid Acquisition",icon:e.jsx(Z,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:e.jsx(U,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},ee=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],ca=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],ae=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests für Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],pa=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],ie={eyebrow:"Lead-Systeme für lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope für Ihr Lead-System anfragen"},ma={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},t=Te,p=n=>({website:{...f.website,...n.website},ai:{...f.ai,...n.ai},aiMusic:{...f.aiMusic,...n.aiMusic},ads:{...f.ads,...n.ads},analytics:{...f.analytics,...n.analytics}}),ua={de:f,uk:da,tr:p(t.tr.systems),ar:p(t.ar.systems),pl:p(t.pl.systems),ku:p(t.ku.systems),fa:p(t.fa.systems),it:p(t.it.systems),es:p(t.es.systems),el:p(t.el.systems),ro:p(t.ro.systems),bg:p(t.bg.systems)},ga={de:ee,uk:ca,tr:t.tr.packages,ar:t.ar.packages,pl:t.pl.packages,ku:t.ku.packages,fa:t.fa.packages,it:t.it.packages,es:t.es.packages,el:t.el.packages,ro:t.ro.packages,bg:t.bg.packages},ba={de:ae,uk:pa,tr:t.tr.timeline,ar:t.ar.timeline,pl:t.pl.timeline,ku:t.ku.timeline,fa:t.fa.timeline,it:t.it.timeline,es:t.es.timeline,el:t.el.timeline,ro:t.ro.timeline,bg:t.bg.timeline},ha={de:ie,uk:ma,tr:t.tr.copy,ar:t.ar.copy,pl:t.pl.copy,ku:t.ku.copy,fa:t.fa.copy,it:t.it.copy,es:t.es.copy,el:t.el.copy,ro:t.ro.copy,bg:t.bg.copy},ka=["34%","52%","47%","70%","62%","85%","73%"],xa=()=>{const{i18n:n}=oe(),g=(n.resolvedLanguage||n.language||"de").split("-")[0],a=ha[g]??ie,m=ua[g]??f,A=ga[g]??ee,C=ba[g]??ae,[v,k]=x.useState("website"),s=x.useMemo(()=>m[v],[v,m]);return e.jsxs(Re,{children:[e.jsx(Pe,{children:e.jsxs(Ie,{initial:"hidden",animate:"visible",variants:d,children:[e.jsxs(Le,{as:o.div,variants:T,children:[e.jsx(Be,{children:a.eyebrow}),e.jsxs(De,{children:[e.jsx("span",{children:a.heroTitle[0]}),e.jsx("span",{children:a.heroTitle[1]}),e.jsx("span",{children:a.heroTitle[2]})]}),e.jsx(Ge,{children:a.heroLead}),e.jsx(N,{children:e.jsxs($,{to:"/kontakt",children:[e.jsx(q,{})," ",a.ctaTop]})})]}),e.jsxs(Ke,{as:o.div,variants:b,children:[e.jsx(Oe,{}),e.jsxs(Ve,{children:[e.jsxs(Fe,{variants:d,initial:"hidden",animate:"visible",children:[e.jsxs(B,{variants:l,children:[e.jsx("span",{children:a.heroChips[0]}),e.jsx("b",{children:e.jsx(le,{text:a.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),e.jsxs(B,{variants:l,children:[e.jsx("span",{children:a.heroChips[1]}),e.jsx("b",{children:a.heroChipValues[1]})]}),e.jsxs(B,{variants:l,children:[e.jsx("span",{children:a.heroChips[2]}),e.jsx("b",{children:a.heroChipValues[2]})]})]}),e.jsxs(We,{variants:d,initial:"hidden",animate:"visible",children:[e.jsx(Qe,{children:e.jsx(Ne,{children:ka.map((r,u)=>e.jsx(o.span,{style:{height:r},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:u*.16,repeat:1/0,ease:"easeInOut"}},r+u))})}),e.jsxs(qe,{children:[e.jsx(R,{variants:b,children:a.flowNodes[0]}),e.jsx(R,{variants:b,children:a.flowNodes[1]}),e.jsx(R,{variants:b,children:a.flowNodes[2]}),e.jsx(R,{variants:b,children:a.flowNodes[3]})]})]}),e.jsxs(D,{variants:d,initial:"hidden",animate:"visible",children:[e.jsx(y,{variants:l,children:a.heroBadges[0]}),e.jsx(y,{variants:l,children:a.heroBadges[1]}),e.jsx(y,{variants:l,children:a.heroBadges[2]})]})]})]})]})}),e.jsxs(se,{children:[e.jsxs(z,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,children:[e.jsx("h2",{children:a.servicesTitle}),e.jsx(w,{children:a.servicesDesc}),e.jsx(Ee,{children:Object.keys(m).map(r=>e.jsx($e,{$active:v===r,onClick:()=>k(r),children:m[r].title},r))}),e.jsxs(He,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[e.jsxs(P,{$area:"dominant",$featured:!0,variants:T,children:[e.jsxs("h3",{children:[e.jsx(S,{children:s.icon}),s.title]}),e.jsxs(Ue,{children:[e.jsxs(G,{variants:c,children:[e.jsx("strong",{children:a.trio[0]}),e.jsx("span",{children:s.problem})]}),e.jsxs(G,{variants:c,children:[e.jsx("strong",{children:a.trio[1]}),e.jsx("span",{children:s.system})]}),e.jsxs(G,{variants:c,children:[e.jsx("strong",{children:a.trio[2]}),e.jsx("span",{children:s.outcome})]})]}),e.jsxs(Ze,{children:[e.jsx("summary",{children:a.detailsSummary}),e.jsx("ul",{children:s.details.map(r=>e.jsx("li",{children:r},r))})]})]}),e.jsxs(P,{$area:"mediumA",variants:c,children:[e.jsxs("h3",{children:[e.jsx(S,{children:e.jsx(de,{})}),a.kpiBadgesTitle]}),e.jsx(D,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:s.kpis.map(r=>e.jsx(y,{variants:l,children:r},r))}),e.jsx(w,{style:{marginTop:12},children:a.kpiBadgesDesc})]}),e.jsxs(P,{$area:"mediumB",variants:b,children:[e.jsxs("h3",{children:[e.jsx(S,{children:e.jsx(ce,{})}),a.signalLayerTitle]}),e.jsxs(Ye,{children:[e.jsxs("span",{children:[e.jsx(h,{})," ",a.signalItems[0]]}),e.jsxs("span",{children:[e.jsx(h,{})," ",a.signalItems[1]]}),e.jsxs("span",{children:[e.jsx(h,{})," ",a.signalItems[2]]}),e.jsxs("span",{children:[e.jsx(h,{})," ",a.signalItems[3]]})]})]}),e.jsxs(P,{$area:"compact",$compact:!0,variants:l,children:[e.jsxs("h3",{children:[e.jsx(S,{children:e.jsx(pe,{})}),a.opsTitle]}),e.jsxs(E,{children:[e.jsxs("li",{children:[e.jsx(h,{})," ",a.opsItems[0]]}),e.jsxs("li",{children:[e.jsx(h,{})," ",a.opsItems[1]]}),e.jsxs("li",{children:[e.jsx(h,{})," ",a.opsItems[2]]})]})]})]})]}),e.jsxs(z,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,children:[e.jsx("h2",{children:a.packagesTitle}),e.jsx(Je,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:A.map(r=>e.jsxs(_e,{$recommended:r.recommended,variants:r.recommended?l:c,children:[r.recommended?e.jsx(Xe,{children:a.recommended}):null,e.jsx("h3",{children:r.title}),e.jsx(aa,{children:r.lead}),e.jsx(E,{children:r.items.map(u=>e.jsxs("li",{children:[e.jsx(h,{})," ",u]},u))}),e.jsxs(ea,{children:[e.jsx("i",{className:r.scale>=1?"on":""}),e.jsx("i",{className:r.scale>=2?"on":""}),e.jsx("i",{className:r.scale>=3?"on":""})]}),e.jsx(w,{style:{marginTop:12},children:r.effect})]},r.id))})]}),e.jsxs(z,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,children:[e.jsx("h2",{children:a.timelineTitle}),e.jsx(ia,{variants:d,children:C.map(r=>e.jsxs(ta,{variants:Number(r[0])%2===0?b:T,children:[e.jsxs(na,{children:[a.stepLabel," ",r[0]]}),e.jsx(ra,{children:r[1]}),e.jsx(w,{children:r[2]})]},r[0]))})]}),e.jsxs(z,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,children:[e.jsx("h2",{children:a.controlTitle}),e.jsxs(oa,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[e.jsxs(H,{variants:T,children:[e.jsx("h3",{children:a.controlPanelTitle}),e.jsx(w,{children:a.controlPanelDesc}),e.jsxs(sa,{children:[e.jsxs("div",{children:[a.miniCharts[0],e.jsx("i",{style:{width:"68%"}})]}),e.jsxs("div",{children:[a.miniCharts[1],e.jsx("i",{style:{width:"82%"}})]}),e.jsxs("div",{children:[a.miniCharts[2],e.jsx("i",{style:{width:"59%"}})]})]})]}),e.jsxs(H,{variants:b,children:[e.jsx("h3",{children:a.kpiPanelTitle}),e.jsxs(la,{children:[e.jsxs(I,{variants:l,children:[e.jsx("span",{children:a.kpiLabels[0]}),e.jsx("strong",{children:e.jsx(M,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),e.jsxs(I,{variants:l,children:[e.jsx("span",{children:a.kpiLabels[1]}),e.jsx("strong",{children:e.jsx(M,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),e.jsxs(I,{variants:l,children:[e.jsx("span",{children:a.kpiLabels[2]}),e.jsx("strong",{children:e.jsx(M,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),e.jsxs(I,{variants:l,children:[e.jsx("span",{children:a.kpiLabels[3]}),e.jsx("strong",{children:e.jsx(M,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),e.jsxs(D,{style:{marginTop:12},variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[e.jsx(y,{variants:l,children:a.controlBadges[0]}),e.jsx(y,{variants:l,children:a.controlBadges[1]}),e.jsx(y,{variants:l,children:a.controlBadges[2]})]})]})]})]}),e.jsx(z,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,children:e.jsx(N,{children:e.jsxs($,{to:"/kontakt",children:[e.jsx(q,{})," ",a.ctaBottom]})})})]})]})};export{xa as default};
