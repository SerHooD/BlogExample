export interface Blog {
    id: number;
    img : string;
    categoryKey: string;
    title: string;
    subtitle: string;
    text?: string; 
    author?: string;
    date?: string; 
}
const textmini = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const text = textmini.repeat(10);
export const bloglist: Blog[] = [
    { id: 1, categoryKey: 'finance', img: "https://picsum.photos/id/500/800/400",title: 'Akıllı Yatırım Stratejileri', subtitle: 'Geleceğinizi güvence altına almak için portföyünüzü nasıl çeşitlendirmeli?' ,text: text, author: "John Smith", date: "2025-07-01" },
    { id: 2, categoryKey: 'finance', img: "https://picsum.photos/id/201/800/400", title: 'Bütçe Yönetiminin İncelikleri', subtitle: 'Gelir ve giderleri dengeleyerek tasarruf oranınızı artırmanın yolları.', text: text, author: "Emily Johnson", date: "2025-07-02" },
    { id: 3, categoryKey: 'finance', img: "https://picsum.photos/id/202/800/400", title: 'Emeklilik Planlaması 101', subtitle: 'Erken başlamak neden önemli ve hangi araçları kullanabilirsiniz?', text: text, author: "Michael Williams", date: "2025-07-03" },
    { id: 4, categoryKey: 'finance', img: "https://picsum.photos/id/203/800/400", title: 'Kripto Dünyasına Giriş', subtitle: 'Bitcoin’den altcoin’lere: Dijital varlıklarda nelere dikkat etmeli?', text: text, author: "Olivia Brown", date: "2025-07-04" },
    { id: 5, categoryKey: 'finance', img: "https://picsum.photos/id/204/800/400", title: 'Finansal Teknolojiler (FinTech)', subtitle: 'Bankacılık ve ödeme çözümlerinde yenilikçi uygulamalar.', text: text, author: "James Jones", date: "2025-07-05" },
    { id: 6, categoryKey: 'finance', img: "https://picsum.photos/id/215/800/400", title: 'Borç Yönetimi Taktikleri', subtitle: 'Kredi kartı ve kredileri kontrol altına alarak faiz yükünü hafifletme.', text: text, author: "Sophia Garcia", date: "2025-07-06" },
    { id: 7, categoryKey: 'finance', img: "https://picsum.photos/id/216/800/400", title: 'Gayrimenkul Yatırımlarında Fırsatlar', subtitle: 'Doğru lokasyon ve zamanlama ile getirinizi maksimize edin.', text: text, author: "Benjamin Martinez", date: "2025-07-07" },
    { id: 8, categoryKey: 'finance', img: "https://picsum.photos/id/217/800/400", title: 'Vergi Avantajlarından Yararlanma', subtitle: 'Hangi kalemlerde indirim alabilir, nasıl beyanname veririz?', text: text, author: "Charlotte Lee", date: "2025-07-08" },
    { id: 9, categoryKey: 'finance', img: "https://picsum.photos/id/208/800/400", title: 'Pasif Gelir Modelleri', subtitle: 'Dijital ürünler, kiralama veya temettü gelirleriyle ek kazanç.', text: text, author: "Daniel Harris", date: "2025-07-09" },
    { id: 10, categoryKey: 'finance', img: "https://picsum.photos/id/209/800/400", title: 'Finansal Okuryazarlık Rehberi', subtitle: 'Temel terimler ve kavramlarla paranızı daha bilinçli yönetin.', text: text, author: "Amelia Clark", date: "2025-07-10" },
    { id: 11, categoryKey: 'sports', img: "https://picsum.photos/id/210/800/400", title: 'Günlük Antrenman Rutinleri', subtitle: 'Vücut ağırlığıyla evde yapılabilecek etkili egzersizler.', text: text, author: "Matthew Lewis", date: "2025-07-11" },
    { id: 12, categoryKey: 'sports', img: "https://picsum.photos/id/211/800/400", title: 'Koşu Performansınızı Artırın', subtitle: 'Doğru teknik ve programla daha hızlı mesafe kat edin.', text: text, author: "Mia Walker", date: "2025-07-12" },
    { id: 13, categoryKey: 'sports', img: "https://picsum.photos/id/212/800/400", title: 'Sporcu Beslenme Temelleri', subtitle: 'Antrenman öncesi ve sonrası hangi makro besinleri almalısınız?', text: text, author: "William Hall", date: "2025-07-13" },
    { id: 14, categoryKey: 'sports', img: "https://picsum.photos/id/213/800/400", title: 'Esneme ve Mobilite Çalışmaları', subtitle: 'Sakatlık riskini azaltmak için günlük esneme protokolleri.', text: text, author: "Ella Allen", date: "2025-07-14" },
    { id: 15, categoryKey: 'sports', img: "https://picsum.photos/id/214/800/400", title: 'Ağırlık Çalışmalarında İlerleme Planı', subtitle: 'Güç kazanımı ve kas hipertrofisi için set-tekrar düzenleri.', text: text, author: "Alexander Young", date: "2025-07-15" },
    { id: 16, categoryKey: 'sports', img: "https://picsum.photos/id/234/800/400", title: 'Yüzme Teknikleri ve İpuçları', subtitle: 'Verimli kulaç atışı ve nefes kontrolüyle hızınızı yükseltin.', text: text, author: "Grace King", date: "2025-07-16" },
    { id: 17, categoryKey: 'sports', img: "https://picsum.photos/id/219/800/400", title: 'Yoga ile Zihinsel ve Fiziksel Denge', subtitle: 'Esneklik kazanırken stresi azaltmanın yolları.', text: text, author: "Henry Wright", date: "2025-07-17" },
    { id: 18, categoryKey: 'sports', img: "https://picsum.photos/id/220/800/400", title: 'Dayanıklılık Sporlarında Psikoloji', subtitle: 'Motivasyon ve odaklanmayı yüksek tutmanın stratejileri.', text: text, author: "Scarlett Scott", date: "2025-07-18" },
    { id: 19, categoryKey: 'sports', img: "https://picsum.photos/id/221/800/400", title: 'Spor Teknolojileri ve Giyilebilir Cihazlar', subtitle: 'Kalp atış hızı, uyku takibi ve performans analizi.', text: text, author: "Jack Green", date: "2025-07-19" },
    { id: 20, categoryKey: 'sports', img: "https://picsum.photos/id/218/800/400", title: 'Yaralanmalardan Korunma Yöntemleri', subtitle: 'Isınma, soğuma ve uygun ekipman seçiminin önemi.', text: text, author: "Lily Adams", date: "2025-07-20" },
    { id: 21, categoryKey: 'tech', img: "https://picsum.photos/id/309/800/400", title: '2025’in En İyi Akıllı Telefon İncelemeleri', subtitle: 'Performans, kamera ve pil ömründe öne çıkan modeller.', text: text, author: "Samuel Nelson", date: "2025-07-21" },
    { id: 22, categoryKey: 'tech', img: "https://picsum.photos/id/330/800/400", title: 'Yapay Zekâ ve Makine Öğrenmesi', subtitle: 'İş dünyasında verimliliği artıran uygulama örnekleri.', text: text, author: "Ava Carter", date: "2025-07-22" },
    { id: 23, categoryKey: 'tech', img: "https://picsum.photos/id/331/800/400", title: 'Bulut Bilişim Temelleri', subtitle: 'AWS, Azure ve Google Cloud karşılaştırması.', text: text, author: "David Mitchell", date: "2025-07-23" },
    { id: 24, categoryKey: 'tech', img: "https://picsum.photos/id/320/800/400", title: 'Siber Güvenlik En İyi Uygulamaları', subtitle: 'Veri ihlallerini önlemek için almanız gereken önlemler.', text: text, author: "Chloe Perez", date: "2025-07-24" },
    { id: 25, categoryKey: 'tech', img: "https://picsum.photos/id/100/800/400", title: 'Web Geliştirmede Modern Çerçeveler', subtitle: 'React, Vue ve Angular’ın güçlü ve zayıf yanları.', text: text, author: "Logan Roberts", date: "2025-07-25" },
    { id: 26, categoryKey: 'tech', img: "https://picsum.photos/id/322/800/400", title: 'Nesnelerin İnterneti (IoT) Uygulamaları', subtitle: 'Akıllı ev ve endüstriyel otomasyonda öne çıkan çözümler.', text: text, author: "Harper Turner", date: "2025-07-26" },
    { id: 27, categoryKey: 'tech', img: "https://picsum.photos/id/323/800/400", title: 'Blokzincir Teknolojisinin Geleceği', subtitle: 'Dağıtık defterler, akıllı sözleşmeler ve sektörlerdeki kullanımı.', text: text, author: "Sebastian Phillips", date: "2025-07-27" },
    { id: 28, categoryKey: 'tech', img: "https://picsum.photos/id/324/800/400", title: 'Oyun Geliştirmenin Temelleri', subtitle: 'Unity ve Unreal Engine ile ilk oyununuzu nasıl yaparsınız?', text: text, author: "Layla Campbell", date: "2025-07-28" },
    { id: 29, categoryKey: 'tech', img: "https://picsum.photos/id/325/800/400", title: 'Yazılım Test Otomasyonu', subtitle: 'Selenium, Cypress ve Jest ile hızlı regresyon testi.', text: text, author: "Mason Parker", date: "2025-07-29" },
    { id: 30, categoryKey: 'tech', img: "https://picsum.photos/id/326/800/400", title: '5G ve Ötesi', subtitle: 'Yeni nesil mobil iletişimin sunduğu hız ve gecikme avantajları.', text: text, author: "Zoe Evans", date: "2025-07-30" },
];



