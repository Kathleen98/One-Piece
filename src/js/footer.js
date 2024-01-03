const footerElement = document.querySelector('.footer');

function createFooter(){

    // Criando logo footer
    const img = document.createElement('img');
    img.src = 'https://i.pinimg.com/564x/3f/c8/6b/3fc86bd3ab6b3e7a632d6ab3e9326c93.jpg';
    img.alt = 'Caveira do bando Chapeu de Palha';
    img.classList.add('footer__logo');

    // Criando container footer
    const divTexts = document.createElement('div');
    divTexts.classList.add('footer__texts');

    // Criando os textos da div
    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = `Em um mundo de Grandes Linhas, descubra a sua própria história 
    navegando conosco. O tesouro está na jornada, não apenas no destino. Yohoho!`;

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = `
        &copy;Copyright - 2023 | Desenvolvido por Kathleen Santos
    `;

    // Adicionando os parágrafos na div
    divTexts.appendChild(paragraphOne);
    divTexts.appendChild(paragraphTwo);

    // Criando div das redes sociais
    const divSocial = document.createElement('div');
    divSocial.classList.add('footer__socials');

    // Criando tag link do LinkedIn
    const linkedinLink = document.createElement('a');
    linkedinLink.href = `https://www.linkedin.com/in/kathleenc-santos/`;
    linkedinLink.target = "_blank";
    
    // Criando imagem logo do LinkedIn
    const linkedinImg = document.createElement('img');
    linkedinImg.src = `https://i.pinimg.com/564x/05/da/34/05da3431471058c803afacb2f5483f7b.jpg`;
    linkedinImg.alt = `LinkedIn`;
    linkedinImg.classList.add('footer__socials__link__img');

    // Adicionando imagem na tag link do LinkdedIn
    linkedinLink.appendChild(linkedinImg);

    // Criando tag a do Github
    const githubLink = document.createElement('a');
    githubLink.href = `https://github.com/Kathleen98`;
    githubLink.target = "_blank";

    // Criando imagem logo do Github
    const githubImg = document.createElement('img');
    githubImg.src = `https://i.pinimg.com/564x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg`;
    githubImg.alt = `Github`;
    githubImg.classList.add('footer__socials__link__img');

    // Adicionando imagem na tag link do Github
    githubLink.appendChild(githubImg);

    // Adicionando as tags ao container de redes sociais
    divSocial.appendChild(linkedinLink);
    divSocial.appendChild(githubLink);

    footerElement.appendChild(img);
    footerElement.appendChild(divTexts);
    footerElement.appendChild(divSocial);
    
}

createFooter();