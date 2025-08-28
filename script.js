document.addEventListener('DOMContentLoaded', function() {

  // 1️⃣ Menu hambúrguer e dropdown mobile
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  const closeBtn = document.getElementById('close-btn');
  const dropdownLink = document.querySelector('.dropdown > a');

  const toggleDropdownMobile = (event) => {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('active');
  };

  // Abre e fecha menu
  hamburger.addEventListener('click', () => nav.classList.add('open'));
  closeBtn.addEventListener('click', () => nav.classList.remove('open'));

  // Fecha menu ao clicar fora
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && event.target !== hamburger) {
      nav.classList.remove('open');
    }
  });

  // Aplica comportamento do dropdown somente no mobile
  const updateDropdownListener = () => {
    if (window.innerWidth <= 768) {
      dropdownLink.removeEventListener('click', toggleDropdownMobile);
      dropdownLink.addEventListener('click', toggleDropdownMobile);
    } else {
      dropdownLink.removeEventListener('click', toggleDropdownMobile);
    }
  };

  updateDropdownListener();
  window.addEventListener('resize', updateDropdownListener);

  // 2️⃣ Acordeão FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Fecha os outros itens
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Alterna o item atual
      item.classList.toggle('active');
    });
  });

});
