const menuToggle = document.querySelector('#menuToggle');
    const mainNav = document.querySelector('#mainNav');
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
    });

    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
    }));

    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.product-card').forEach(card => {
        card.hidden = button.dataset.filter !== 'todos' && card.dataset.category !== button.dataset.filter;
      });
    }));

    const toast = document.querySelector('#toast');
    document.querySelectorAll('.quick-add').forEach(button => button.addEventListener('click', () => {
      toast.textContent = `¡Te interesa ${button.dataset.product}! Escríbenos para consultar tallas y disponibilidad.`;
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 3500);
    }));
