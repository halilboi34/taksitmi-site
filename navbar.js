// navbar.js
document.addEventListener('DOMContentLoaded', function () {
  const headerMount = document.getElementById('site-header');
  if (!headerMount) return;

  headerMount.innerHTML = `
<header>
  <nav class="nav">
    <div class="nav-left">
      <a href="index.html">
        <img src="images/logo1.png" alt="taksitmi.com logo">
      </a>
    </div>
    <div class="nav-links">
      <a href="index.html" data-page="index.html">Ana Sayfa</a>
      <a href="hakkimizda.html" data-page="hakkimizda.html">Hakkımızda</a>
      <a href="kampanyalar.html" data-page="kampanyalar.html">Banka Kampanyaları</a>
      <a href="blog.html" data-page="blog.html">Finansal Farkındalık Blogu</a>
      <a href="brutten-nete-2025.html" data-page="brutten-nete-2025.html">Brütten Nete Maaş Hesaplama</a>
            <a href="yillik-maas-artis-tablosu.html" data-page="yillik-maas-artis-tablosu.html">Yıllık Maaş Artış Tablosu</a>
      <a href="iletisim.html" data-page="iletisim.html">İletişim</a>
    </div>
  </nav>
</header>
  `;

  // Aktif sayfayı işaretle
  const path = window.location.pathname.split('/').pop() || 'index.html';
  headerMount.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === path) {
      a.classList.add('active');
    }
  });
});
