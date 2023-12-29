// const containerImages = document.querySelector('.wanted__slider__img');

// async function searchShowImages () {
//   try{
//     const search = await fetch("http://localhost:3000/images");
//     const images = await search.json();

//       images.forEach((image) =>{
//         if(image.url == ""){
//           throw new Error('Imagem sem url cadastrada')
//         }
        
//         const imgElement = document.createElement('img');
//         imgElement.src = image.src;
//         imgElement.alt = image.name;
//         imgElement.classList.add('wanted__slider__img__item');
//         containerImages.appendChild(imgElement);

//       })

//   }catch(error) {
//     containerImages.innerHTML = `<p>Houve um erro ao carregas as imagens: ${error}</p>`
//   }

// }


// searchShowImages()

  