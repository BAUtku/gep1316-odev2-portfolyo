# GEP1316 — Ara Değerlendirme Ödevi 2
## Kişisel portfolyo geliştirme süreci raporu

**Öğrenci:** Ahmet Utku Acar  
**Ders / dönem:** GEP1316 Kodlama Okuryazarlığı / 2026–2027 Güz  
**Rapor tarihi:** 11.11.2026  
**Canlı sayfa:** Henüz GitHub Pages'e yayımlanmadı.

## 1. Tasarım kararları

Portfolyoyu Türkçe ve dört ana bölümden oluşturdum: kısa tanıtım, hakkımda, projeler ve iletişim. Tekrarlanan gezinme ve alt bilgi bütün sayfalarda tutarlı kalacak şekilde ortak `style.css` ve `script.js` dosyalarında toplandı. Açık bej zemin, koyu metin, kiremit vurgu rengi ve sade tipografi seçildi. Sayfa küçük ekranda tek sütuna geçen düzenler ve iki mobil kırılma noktasıyla (760 px ve 480 px) hazırlandı. Koyu tema, açılır mobil menü ve proje arama/filtreleri sayfalar arasında ortak JavaScript ile çalışıyor.

Ana sayfada adım ve kendimle ilgili verdiğim bilgiler kullanıldı. Projeler bölümündeki ilk iki çalışma, sağladığım gerçek ödev dosyalarından hazırlandı: Küçük İşletme Kasa Defteri ve Gemi Brokerliğinde Yüke Uygun Gemi Bulma. Kasa defteri için kendi deposundaki GitHub bağlantısı ve ekran görüntüsü, gemi algoritması için ödev dosyasındaki akış şeması kullanıldı. Son iki proje, portfolyo çalışması sırasında oluşturulan bütçe takip ve tekne ilan vitrini demolarıdır; tamamlanmış eski ödevler gibi sunulmaz. Bütçe kaydı yalnızca sayfanın belleğinde tutulur, yenilemede silinir. Tekne adları ve fiyatları temsili örneklerdir. Profesyonel profil bağlantılarını paylaşmama tercihim uygulandı.

## 2. Üretken yapay zekâ kullanım kaydı

Aşağıdaki istemler bu portfolyo çalışması sırasındaki gerçek kullanıcı mesajlarıdır; yeniden yazılmış örnek promptlar değildir. Araç, GitHub Copilot uygulamasıdır; model seçimi Auto olduğundan tek bir temel model adı ileri sürülmemiştir.

| # | Tarih / araç | Gerçek istem | Yapay zekâ çıktısı ve benim kararım |
|---|---|---|---|
| 1 | 11.11.2026 / GitHub Copilot | “sen banadoldurmam gerekenleri yaz buraya ben buraya yazcam” | Portfolyo için doldurulacak bilgi şablonu verdi. Bilgileri sonraki mesajımda sağladım; şablonun ardından gerçek içerikle devam edildi. |
| 2 | 11.11.2026 / GitHub Copilot | “AHMET UTKU ACAR adım / Bahçeşehir üniversitesi işletme / finans / kodlama / tekne brokerliği / 2 / daha önce yaptığımızı iki projeyi koy bi de iki tane de rastgele koy / prof bağlantılarımı paylaşmak istemiyoeum” | Ad, bölüm, sınıf ve ilgi alanları sayfalara eklendi; profil bağlantıları çıkarıldı. İlk aşamada önceki projeler ayrıntılandırılamadı; daha sonra dosyalar sağlanınca kartlar gerçek dosyalara göre düzenlendi. Tamamlanmamış fikirleri gerçek proje gibi göstermeme kararı verildi. |
| 3 | 11.11.2026 / GitHub Copilot | “bu iki dosya daha önce yaptığımız iki proje” | Paylaşılan kasa defteri klasörü ve algoritma ödevi incelendi. Gerçek başlıklar, açıklamalar, ekran görüntüsü/akış şeması ve depo bağlantısı proje sayfasına eklendi. |
| 4 | 11.11.2026 / GitHub Copilot | “seninle beraber yaptık daha önceki chatlerimizde duruyor bir tanesi küçük işletmeler için muhsabeyle alakalı diğeri de gemi brokerliğiyle alakalı” | Önceki konuşmada proje ayrıntıları bulunamayınca yönlendirme sonraki dosyalarla doğrulandı. Tahmin edilen başlıklar dosyalardaki gerçek bilgilerle değiştirildi. |
| 5 | 11.11.2026 / GitHub Copilot | “kalan iki projeyi sen kafana göre bunlara benzer bir ş ey yapar mıısın” | İki benzer ve çalışan tarayıcı demosu geliştirildi: oturum belleğinde çalışan bütçe takibi ve temsili ilanları filtreleyen tekne vitrini. Gerçek finansal veri saklanmaması ve örnek ilanların gerçek olmadığının açıkça yazılması tercih edildi. |
| 6 | 11.11.2026 / GitHub Copilot | “süreç raporunu yaz” | Tasarım kararları, prompt günlüğü, test bulguları, yansıtma ve YZ kullanım beyanı/atıf bölümleri rapora yazıldı. |
| 7 | 11.11.2026 / GitHub Copilot | “kalan her şeyi tamamla” | Tarayıcıda çalışan bütçe/tekne filtreleri, menü, proje araması ve form kontrolleri denendi; kısa mesaj doğrulamasındaki eksik bulunup düzeltildi. Ekran görüntüsü dosyası yakalama ve GitHub Pages yayını için kalan adımlar başlatıldı. |

## 3. Erişilebilirlik ve gizlilik incelemesi

Dosyalar oluşturulup bütün sayfalara bağlandıktan sonra, statik HTML kontrolü proje görsellerinde `alt` metni, form alanlarında ilişkili `label`, yinelenmeyen kimlikler ve çalışan yerel bağlantılar olduğunu doğruladı. Kontrol sırasında görsellerin açıklayıcı alternatif metinle sunulması ve filtre/form sonuçlarının `aria-live` durumlarıyla duyurulması özellikle kontrol edildi. İletişim formu mesaj göndermez; yalnızca yerel tarayıcı doğrulaması yapar. Bütçe demosu kayıtları sunucuya göndermez ve kalıcı depoya yazmaz. Bu nedenle kod incelemesinde doğrulanmış, erişilebilirlik veya güvenlik açığı olarak raporlayabileceğim bir hata bulunmadı; bulunmuş gibi bir hata ve düzeltme uydurmadım. Otomatik statik kontroller ekran okuyucu, klavye, renk kontrastı ya da gerçek tarayıcı kullanım testinin yerini tutmaz.

## 4. Gerçekleştirilen testler ve henüz alınmamış kanıtlar

| Kontrol | Gerçek sonuç |
|---|---|
| Portfolyo HTML sayfaları, yerel dosya bağlantıları, form etiketleri ve görsel `alt` metinleri | Altı HTML sayfasında statik kontrol başarılı. |
| Duyarlı CSS ve yerel SVG dosyaları | En az iki `@media` kuralı ve SVG dosyalarının XML yapısı kontrol edildi; başarılı. |
| JavaScript sözdizimi | macOS JavaScriptCore kullanılarak `script.js` ayrıştırıldı; sözdizimi hatası yok. |
| Önceki Kasa Defteri projesinin otomatik testleri | `python3 -m unittest discover -s . -p 'test_*.py' -v` komutuyla 7 test çalıştırıldı; 7'si de başarılı. |
| Portfolyo tarayıcı görünümü | Uygulama içi tarayıcı canvas'ında 500 × 779 CSS piksel görünümünde sayfalar açıldı ve okundu. Bu, istenen 390 × 844, 768 × 1024 ve 1440 × 900 ölçülerini tek tek doğrulamaz. |
| Tema ve mobil menü | Tema iki kez değiştirilip başlangıç durumuna döndürüldü. 500 px genişlikte menü açıldı; Escape ile kapandığı ve `aria-expanded` durumunun güncellendiği doğrulandı. |
| Proje araması ve kategorileri | Dört kart başlangıçta görünür. “kasa defteri” araması 1 kart gösterdi; web ve diğer kategorileri ayrı ayrı 2'şer kart gösterdi. |
| Bütçe demosu | Boş form reddedildi. ₺1.000 gelir ve ₺250 gider eklendi; toplamlar ₺1.000/₺250, bakiye ₺750 oldu. Temizle düğmesi kayıtları kaldırdı. Kayıtların JavaScript oturum belleğinde tutulduğu kodla doğrulandı; kalıcılık yok. |
| Tekne vitrini filtresi | 3 örnek ilandan yelkenli filtresi 2, ₺5.000.000 üst sınırı 1 ilan gösterdi; motor yat + aynı üst sınır sıfır sonuç verdi ve boş durum mesajı gösterildi. |
| İletişim formu | Boş alanlar ve geçersiz e-posta yerel form doğrulamasında reddedildi. Deneme sırasında 4 karakterlik mesaj tarayıcı otomasyonuyla girildiğinde HTML `minlength` tek başına yeterli olmadı; gönderim anında boşlukları da sayan JavaScript kontrolü eklendi. Tekrar testte kısa mesaj reddedildi, yeterli uzunluktaki mesaj “gönderilmedi ve kaydedilmedi” sonucunu verdi. |
| Renk kontrastı | Tema değişkenlerindeki ana metin/zemin, ikincil metin/zemin ve vurgu renkleri hesaplandı: açık temada 14.21:1, 4.95:1, 7.58:1; koyu temada 15.05:1, 8.64:1, 12.40:1. Bu ölçüm, her sayfadaki tüm renk eşleşmelerinin veya ekran okuyucu erişilebilirliğinin tam denetimi değildir. |
| Üç viewport ekran görüntüsü | Henüz dosya olarak alınamadı. Bu macOS çalışma ortamındaki `screencapture` komutu ekrana erişemedi; uygulama içi tarayıcı yalnızca 500 × 779 görünüm sundu. |

**Kalan kanıt:** Bu raporu teslim etmeden önce kendi bilgisayarında tarayıcıyı 390 × 844, 768 × 1024 ve 1440 × 900 ölçülerinde açıp ekran görüntülerini ekle. Klavye ile sayfalarda gezinme ve ekran okuyucu kontrolünü de kendin yapıp gerçek sonucunu yaz. Pages yayını tamamlandığında canlı URL'yi bu rapora ekle.

## 5. Yansıtma (250–350 kelime)

Bu portfolyoyu hazırlarken önce kendimle ilgili paylaşmak istediğim bilgileri netleştirdim: Bahçeşehir Üniversitesi İşletme Bölümünde ikinci sınıftayım; finans, kodlama ve tekne brokerliğiyle ilgileniyorum. Ardından daha önce hazırladığım iki ödev dosyasını paylaştım. Bu dosyaları kullanmak önemliydi; çünkü proje sayfasında olmayan çalışmaları olmuş gibi göstermemek, gerçekten yaptığım işleri doğru anlatmak istedim. Kasa Defteri projesinin ekran görüntüsü ve GitHub bağlantısı, gemi brokerliği ödevinin ise akış şeması ve problem açıklaması portfolyoya eklendi.

Sayfalar ortak bir görünüm ve gezinme yapısıyla hazırlandı; küçük ekranda sütunların daralması ve menünün açılıp kapanması gibi davranışlar da eklendi. Formlarda etiket, görsellerde alternatif metin ve klavye odağı için görünür stil kullanıldı. Böylece içerik yalnızca görsel sunumdan ibaret kalmayıp farklı kullanım biçimleri de düşünülerek düzenlendi.

İlk taslakta iki ek proje fikri vardı. Bunların tamamlanmış proje sanılabileceğini fark edince, benzer konularda çalışan iki küçük demo hazırlanmasını istedim. Bütçe panelinde kayıtların yalnızca açık sayfada kalması ve yenilemede silinmesi; tekne vitrindeki örnek fiyat ve ilanların temsili olduğunun açıkça yazılması benim için önemli bir tercih oldu. Böylece gerçek finansal bilgi veya gerçek ilan varmış izlenimi oluşmuyor. Profesyonel bağlantılarımı paylaşmak istemediğimi de belirttim ve bu tercih sayfaya yansıtıldı.

Çalışma sırasında yapay zekâdan taslak ve kod desteği aldım; ancak önceki proje ayrıntılarını yalnızca tahmin ederek tamamlamak yerine kaynak dosyaları incelemesini istedim. Bu yaklaşım, AI çıktısını kontrol etmenin ve gerçek kanıtla desteklemenin önemini gösteriyor. Otomatik kontrollerde altı sayfanın bağlantıları, form etiketleri, görsel açıklamaları ve JavaScript sözdizimi incelendi; ayrıca kasa defterinin yedi testi geçti. Bunlar yararlı kontroller olsa da siteyi telefonda ve klavyeyle bizzat denediğimi kanıtlamıyor. Teslimden önce üç ekran boyutunda görüntü alıp formları ve filtreleri tarayıcıda denemem gerekiyor. Bir sonraki adımım bu kontrolleri tamamlamak, gerçek sonuçları rapora eklemek ve siteyi GitHub Pages’te yayımlamak olacak.

> **Not:** Bu yansıtma, bu oturumda doğrulanabilen çalışma adımlarından hazırlanmış bir taslaktır. Teslimden önce kendi deneyimini ve kişisel ifadelerini yansıtacak şekilde gözden geçir.

## 6. Öğrenci YZ Kullanım Beyanı ve atıf

**Beyan taslağı:** Bu portfolyonun sayfa yapısı, HTML/CSS/JavaScript demoları ve dokümantasyonunun hazırlanmasında GitHub Copilot'tan yardım aldım. Önceki çalışmalarım için kendi proje dosyalarımı sağladım; Copilot'un oluşturduğu içerikleri bu dosyalar ve çalıştırılan kontroller ışığında gözden geçirdim. Üretilen içeriğin doğruluğu ve teslim ettiğim çalışmanın akademik dürüstlüğünden ben sorumluyum.

**APA kaynakça taslağı:** GitHub. (2026). *GitHub Copilot* [Yapay zekâ destekli kodlama aracı]. https://github.com/features/copilot

> Dersin istediği beyan biçimini ve APA kaynakça kuralını öğretmeninin yönergesiyle karşılaştır; üç ekran görüntüsü, manuel klavye/ekran okuyucu kontrolü ve Pages canlı URL'sini teslimden önce ekle.
