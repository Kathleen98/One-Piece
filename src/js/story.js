const story = document.querySelector('.story');

function elementsCreate(){

    // Criando Título da seção
    const titile = document.createElement('h2');
    titile.textContent = `One Piece`;
    titile.classList.add('story__title');

    // Criando imagem
    const img = document.createElement('img');
    img.src = `https://i.pinimg.com/564x/0b/70/85/0b70851176043ef036561b66f25603ef.jpg`;
    img.alt =`Mapa One Piece`;
    img.classList.add('story__img');

    // Criando paragrafo
    const text = document.createElement('p');
    text.textContent = `Ahoy, aventureiro! Vamos falar sobre 
    essa maravilha dos mares conhecida como One Piece. Criada 
    pelo mago das palavras e traços, Eiichiro Oda, essa saga 
    épica vem conquistando corações desde julho de 1997 na 
    revista Weekly Shōnen Jump. Imagine só, mais de mil capítulos 
    de pura emoção, risadas e pirataria!`;
    text.classList.add('story__text');

    // Criando link
    const link = document.createElement('a');
    link.href= `./src/pages/story.html`;
    link.textContent = `Ver mais`;
    link.classList.add('story__link');

    // Criando nó no elemento pai
    story.appendChild(titile);
    story.appendChild(img);
    story.appendChild(text);
    story.appendChild(link);

}

elementsCreate();