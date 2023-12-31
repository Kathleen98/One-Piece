const containerImages = document.querySelector('.wanted__container');

async function searchShowImages () {
  try{
    const search = await fetch("http://localhost:3000/images");
    const images = await search.json();

      images.forEach((image, index) =>{
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

        const titleElement = document.createElement('h2');
        titleElement.textContent = image.name;
        titleElement.classList.add('wanted__container__list__title');
        imgList.appendChild(titleElement);

        const textElement = document.createElement('p');
        textElement.textContent = image.description;
        textElement.classList.add('wanted__container__list__text');
        imgList.appendChild(textElement);

        containerImages.appendChild(imgList);
        

      })

  }catch(error) {
    containerImages.innerHTML = `<p>Houve um erro ao carregas as imagens: ${error}</p>`
  }

}


searchShowImages()

  