const containerImages = document.querySelector('.wanted__container');

async function searchShowImages () {
  try{
    const search = await fetch("https://api-one-piece-seven.vercel.app/content.json");
    const api = await search.json();
    const images = api.images;

    
      images.forEach((image) =>{
        if(image.url == ""){
          throw new Error('Imagem sem url cadastrada')
        }
        
        const imgList = document.createElement('li');
        imgList.classList.add('wanted__container__list')

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.classList.add('wanted__container__list__img');
        imgList.appendChild(imgElement);

        containerImages.appendChild(imgList);
        

      });

      // Adicionando carroussel com JQuery e Slick
      $('.wanted__container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });

  }catch(error) {
    const paragrafyError = document.createElement('p');
    paragrafyError.textContent = `Houve um erro ao carregas as imagens: ${error}`
    containerImages.appendChild(paragrafyError);
  }

}


searchShowImages();


  