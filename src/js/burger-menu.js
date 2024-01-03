document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.hero__hamburguer');
    const hero = document.querySelector('.hero__container__list');
  
    hamburguer.addEventListener('click', function () {
      hero.classList.toggle('hero__container__list--active-menu');
    });
  });