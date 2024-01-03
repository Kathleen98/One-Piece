const containerImages = document.querySelector('.wanted__container');

async function searchShowImages () {
  try{
    const search = await fetch("http://localhost:3000/images");
    const images = await search.json();

    
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
        

      })

  }catch(error) {
    const paragrafyError = document.createElement('p');
    paragrafyError.textContent = `Houve um erro ao carregas as imagens: ${error}`
    containerImages.appendChild(paragrafyError);
  }

}


searchShowImages();


  