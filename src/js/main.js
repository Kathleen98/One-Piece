document.addEventListener('DOMContentLoaded', function () {

  // Função para menu hamburguer responsivo
    const hamburguer = document.querySelector('.hero__hamburguer');
    const hero = document.querySelector('.hero__container__list');
  
    hamburguer.addEventListener('click', function () {
      hero.classList.toggle('hero__container__list--active-menu');
    });

    // Seção mares One Piece
    const worldElement = document.querySelector('.world');
    const endpointAPI = "http://localhost:3000/world";
    let seas = [];

    async function searchWorld() {
        try {
            const search = await fetch(endpointAPI);
            if (!search.ok) {
                throw new Error(`HTTP error! Status: ${search.status}`);
            }
            seas = await search.json();
            displaySeas(seas);
        } catch (error) {
            const erro = document.createElement('p');
            erro.textContent = `Houve um erro no carregamento ${error}`
        }
    }

    searchWorld();

    function displaySeas(listSeas) {
        listSeas.forEach(sea => {
            worldElement.innerHTML += `
            <div class="world__container">
                <img class="world__container__img" src="${sea.image}" alt="North Blue">
                <h2 class="world__container__title">
                    ${sea.name}
                </h2>
                <p class="world__container__text">
                    ${sea.paragrafy}
                </p>
                <a class="world__container__link" href="${sea.link}">Ver mais</a>
            </div>
            `;
        });
    }


    // Seção Akuma No Mi
    const frutElement = document.querySelector('.akumaNoMi');

    frutElement.innerHTML = `
    <h2 class="akumaNoMi__title">
    Akuma No Mi
    </h2>
    <img class="akumaNoMi__img" src="https://i.pinimg.com/564x/4b/72/83/4b7283da90cf705abd700c1f752342e5.jpg" alt="Akuma No Mi">
    <div class="akumaNoMi__texts">
      <p class="akumaNoMi__texts__item">
          Vamos explorar o mistério das Akuma No Mi, essas frutas especiais e enigmáticas que pontilham nosso vasto mundo, prometendo poderes sobrenaturais permanentes para aqueles corajosos o suficiente para dar uma mordida. Mas, como tudo na vida, há um preço a se pagar, e as Akuma No Mi não são exceção!
      </p>
      <p class="akumaNoMi__texts__item">
          Essas frutas concedem habilidades sobre-humanas, transformando aqueles que as consomem em verdadeiros titãs dos mares. Contudo, como toda boa história, há uma reviravolta. Os afortunados (ou talvez desafortunados) consumidores dessas frutas ficam permanentemente impedidos de controlar poderes que possam causar destruição em massa. Criar terremotos ou desencadear caos massivo se torna uma habilidade inalcançável.
      </p>
    </div>
    <a class="akumaNoMi__link" href="">Ver mais</a>
    `

  });
