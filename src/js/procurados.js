// carousel.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container__img');
    const slides = document.querySelectorAll('.container__img img');
    const slideWidth = slides[0].offsetWidth; // Largura de um slide
  
    // variável para guardar o índice do slide atual
    let currentIndex = 0;
  
    /*
        Função que pega o scrollTo do elemento container,
        pega o tamanho da imagem armazenado na const slideWidth 
        e scrola esse tamanho na horizontal.
        O "behavior: smooth" é para trazer animação ao carrossel. 
     */
    function updateCarousel() {
      container.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });
    }


    /* 
        Criando função para scrolar imagens para esquerda e direita
        usando o let current para saber qual imagem deve ser exibida
        updateCarousel é a função que rola até a próxima imagem.
    */
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }

  
    // Adiciona eventos aos botões
    document.getElementById('next-slide').addEventListener('click', nextSlide);
    document.getElementById('prev-slide').addEventListener('click', prevSlide);
  
    // Atualiza o carrossel quando a página é carregada.
    updateCarousel();
  });
  