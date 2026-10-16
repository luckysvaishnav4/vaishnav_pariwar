document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const brand = document.querySelector('.site-nav .navbar-brand');
  // if (brand && !brand.querySelector('small')) {
  //   brand.innerHTML = '<span class="brand-mark" aria-hidden="true"><i class="bi bi-flower1"></i></span><span>Vaishnav Samaj<small>COMMUNITY • HERITAGE • CONNECTION</small></span>';
  // }

  const nav = document.querySelector('.site-nav .navbar-collapse');
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    if (window.bootstrap && nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  const button = document.querySelector('.scroll-top');
  if (button) {
    const update = () => button.classList.toggle('is-visible', window.scrollY > 500);
    addEventListener('scroll', update, { passive: true });
    update();
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
