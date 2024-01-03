document.addEventListener('DOMContentLoaded', function() {
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
});
