document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const label = document.createElement('div');
      label.className = 'icon-label';
      label.innerText = link.getAttribute('data-label');

      // Cores personalizadas
      if (label.innerText.toLowerCase().includes('whatsapp')) {
        label.style.backgroundColor = '#25D366'; // Verde WhatsApp
        label.style.color = '#fff';
      } else if (label.innerText.toLowerCase().includes('instagram')) {
        label.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
        label.style.color = '#fff';
      }

      link.appendChild(label);
      setTimeout(() => label.style.opacity = '1', 10);
    });


    link.addEventListener('mouseleave', () => {
      const label = link.querySelector('.icon-label');
      if (label) {
        label.style.opacity = '0';
        setTimeout(() => label.remove(), 100);
      }
    });
  });



  







  // Script para controlar o menu hambúrguer e dropdown no mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const closeBtn = document.getElementById('close-btn');
    const dropdownLink = document.querySelector('.dropdown > a');
    
    // Abre o menu ao clicar no hambúrguer
    hamburger.addEventListener('click', function() {
      nav.classList.add('open');
    });
    
    // Fecha o menu ao clicar no botão de fechar
    closeBtn.addEventListener('click', function() {
      nav.classList.remove('open');
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && event.target !== hamburger) {
        nav.classList.remove('open');
      }
    });
  
    // Controla o dropdown no mobile
    if (window.innerWidth <= 768) {
      // Previne o comportamento padrão do link do dropdown no mobile
      dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('active');
      });
    }
    
    // Atualiza o comportamento do dropdown quando a janela é redimensionada
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 768) {
        dropdownLink.addEventListener('click', function(event) {
          event.preventDefault();
          const dropdownContent = this.nextElementSibling;
          dropdownContent.classList.toggle('active');
        });
      }
    });
  });
  












  // Funcionalidade de acordeão para a página de FAQ
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Alterna o estado do item atual
        item.classList.toggle('active');
      });
    });
  }
});
