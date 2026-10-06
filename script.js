(() => {
  const WHATSAPP_URL = 'https://wa.me/message/ESJRV63FECTAD1';

  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    const nav = document.getElementById(button.getAttribute('aria-controls'));
    if (!nav) return;
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
      });
    });
  });

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll('[data-faq]').forEach((list) => {
    list.querySelectorAll('.faq-question').forEach((button) => {
      button.addEventListener('click', () => {
        const answer = document.getElementById(button.getAttribute('aria-controls'));
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        if (answer) answer.hidden = expanded;
      });
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const message = String(data.get('message') || '').trim();
      if (!message) return;
      const text = [name ? `Olá! Meu nome é ${name}.` : 'Olá!', `Assunto: ${message}`].join('\n');
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
  }

  const intakeForm = document.querySelector('[data-intake-form]');
  if (intakeForm) {
    intakeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(intakeForm);
      const area = String(data.get('area') || '').trim();
      const subject = String(data.get('subject') || '').trim();
      const details = String(data.get('details') || '').trim();
      const feedback = intakeForm.querySelector('[data-form-feedback]');
      if (!area || !subject) {
        feedback.textContent = 'Selecione a área e o assunto para continuar.';
        return;
      }
      feedback.textContent = '';
      const text = [
        'Olá, MEV! Gostaria de orientação.',
        `Área: ${area}.`,
        `Assunto: ${subject}.`,
        details ? `Contexto: ${details}` : '',
      ].filter(Boolean).join('\n');
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
  }
})();
