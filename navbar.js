document.addEventListener('DOMContentLoaded', function () {
  const headerMount = document.getElementById('site-header');
  if (!headerMount) return;

  headerMount.innerHTML = `
<header class="tk-nav-header">
  <nav class="tk-nav">
    <div class="tk-nav-left">
      <a href="index.html" class="tk-logo">
        <img src="images/logo1.png" alt="taksitmi.com">
      </a>
    </div>

    <div class="tk-nav-links">
      <a href="index.html" data-page="index.html">Ana Sayfa</a>
      <a href="hakkimizda.html" data-page="hakkimizda.html">Hakkımızda</a>
      <a href="kampanyalar.html" data-page="kampanyalar.html">Banka Kampanyaları</a>
      <a href="blog.html" data-page="blog.html">Blog</a>
      <a href="brutten-nete-2025.html" data-page="brutten-nete-2025.html">Brütten Nete Maaş Hesaplama</a>
      <a href="yillik-maas-artis-tablosu.html" data-page="yillik-maas-artis-tablosu.html">Zam Hesaplama</a>
      <a href="iletisim.html" data-page="iletisim.html">İletişim</a>
    </div>
  </nav>
</header>
  `;

  // Aktif sayfa
  const path = window.location.pathname.split('/').pop() || 'index.html';
  headerMount.querySelectorAll('.tk-nav-links a').forEach(a => {
    if (a.dataset.page === path) {
      a.classList.add('active');
    }
  });
});
