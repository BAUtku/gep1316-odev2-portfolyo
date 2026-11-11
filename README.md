# Kişisel portfolyo — GEP1316 Ödev 2

Türkçe, dört bölümlü kişisel portfolyo ve iki ek çalışan demo sayfasıdır. HTML/CSS/JavaScript ile hazırlanmış, duyarlı tasarım ve erişilebilirlik gereksinimleri gözetilmiştir.

## Dosyalar

- `index.html`: Ana sayfa ve kısa tanıtım
- `hakkimda.html`: Eğitim, ilgi alanları, kodlama ve yapay zekâ
- `projeler.html`: Aranabilir ve kategorilere göre filtrelenebilir dört proje kartı
- `iletisim.html`: Yerel form doğrulaması, profesyonel profil yerleri ve gizlilik açıklaması
- `butce-takip.html`, `tekne-vitrini.html`: İki ek çalışan demo
- `style.css`, `script.js`: Ortak görünüm ve etkileşimler
- `assets/avatar.svg`: Değiştirilebilir örnek avatar illüstrasyonu
- `assets/kasa-defteri.png`: Önceki kasa defteri ödevinden alınan ekran görüntüsü
- `assets/gemi-brokerligi-akis.png`: Önceki gemi brokerliği ödevindeki akış şeması
- `butce-takip.html`: Bellekte çalışan ve yenilemede silinen bütçe kayıtları/özetleri demo uygulaması
- `tekne-vitrini.html`: Tür ve örnek fiyat aralığına göre filtrelenebilir tekne vitrini demo uygulaması
- `assets/butce-fikri.svg`, `assets/tekne-vitrin-fikri.svg`: Demo uygulamalar için hazırlanmış temsili illüstrasyonlar
- `SUREC-RAPORU.md`: Tasarım kararları, gerçek prompt günlüğü, test bulguları ve yansıtma raporu

## Teslim öncesi tamamlanacaklar

1. `SUREC-RAPORU.md` içinde üç viewport ekran görüntüsü ve canlı Pages adresi için boş kalan kanıtları ekle.
2. Kasa defteri projesinin GitHub deposu bağlantısı ve iki eski projenin görselleri eklenmiştir. Gemi brokerliği akış şeması bu portfolyoda görsel olarak açılır.
3. Son iki kartın çalışan demosu vardır. Bütçe girdileri kalıcı saklanmaz; tekne ilanları ve fiyatları temsili örneklerdir.
4. Profesyonel profil bağlantılarını paylaşmama tercihi uygulanmıştır. Portfolyoda telefon veya açık adres yoktur.
5. Eğitim, ilgi alanları ve yapay zekâ hakkındaki kişisel görüşü istersen kendi sözlerinle gözden geçir.

## Yerel görüntüleme

`index.html` dosyasını tarayıcıda açabilir veya klasörde bir terminal açıp `python3 -m http.server 8000` çalıştırarak `http://localhost:8000` adresini ziyaret edebilirsin. Form sunucuya bağlanmaz: tarayıcıda yalnızca gerekli alanları doğrular, başarı mesajı gösterir ve hiçbir veriyi göndermez ya da saklamaz.

## GitHub Pages'e yayımlama

1. Bu dosyaları GitHub deposunun kök dizinine yükle.
2. Depoda **Settings → Pages** bölümünü aç.
3. **Build and deployment** altında **Deploy from a branch** seç; `main` dalını ve `/(root)` klasörünü seçip kaydet.
4. GitHub Pages dağıtımı tamamlandığında görünen adresi kontrol edip rapora ve aşağıdaki alana yaz.

**Canlı portfolyo:** GitHub Pages dağıtımından sonra eklenecek.

Yayınlamadan önce Pages ayarlarını ve tüm bağlantıları doğrula. Bu sayfada analitik, reklam, üçüncü taraf izleyici, harici yazı tipi isteği veya form servisi yoktur; form verisi gönderilmez ve saklanmaz.
