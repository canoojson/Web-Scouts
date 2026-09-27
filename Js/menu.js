// Menú de navegación común a todas las páginas
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // Fondo oscuro que cubre la página mientras el menú móvil está abierto
  const fondo = document.createElement('div');
  fondo.className = 'menu-fondo';
  document.body.appendChild(fondo);

  function setMenuAbierto(abierto) {
    nav.classList.toggle('abierto', abierto);
    fondo.classList.toggle('visible', abierto);
    document.body.classList.toggle('menu-abierto', abierto);
    toggle.setAttribute('aria-expanded', abierto);
    toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = abierto ? '✕' : '☰';
  }

  // Botón hamburguesa (móvil): muestra u oculta el panel lateral
  toggle.addEventListener('click', () => {
    setMenuAbierto(!nav.classList.contains('abierto'));
  });

  // Se cierra al tocar el fondo o pulsar Escape
  fondo.addEventListener('click', () => setMenuAbierto(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('abierto')) {
      setMenuAbierto(false);
      toggle.focus();
    }
  });

  // Si la pantalla se agranda (p. ej. al girar el móvil), se cierra el panel
  window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) setMenuAbierto(false);
  });

  // Submenús: se abren al tocar (en escritorio también se abren al pasar el ratón)
  document.querySelectorAll('.dropdown > a').forEach((enlace) => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      const dropdown = enlace.parentElement;
      document.querySelectorAll('.dropdown.open').forEach((otro) => {
        if (otro !== dropdown) otro.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });
  });

  // Cierra los submenús al tocar fuera del menú
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
    }
  });

  // Marca como activa la página actual (y su apartado del menú)
  let actual = location.href.split(/[?#]/)[0];
  if (actual.endsWith('/')) actual += 'index.html'; // la raíz del sitio es index.html
  nav.querySelectorAll('a').forEach((enlace) => {
    if (enlace.href === actual) {
      enlace.classList.add('active');
      const dropdown = enlace.closest('.dropdown');
      if (dropdown) dropdown.querySelector(':scope > a').classList.add('active');
    }
  });
});
