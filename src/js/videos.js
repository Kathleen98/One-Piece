const containerVideos = document.querySelector('.videos__container');

async function buscarMostrarVideos(){
    try{
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
        
            videos.forEach((video) =>{
                if(video.url == ""){
                    throw new Error('Vídeo sem url');
                }
                containerVideos.innerHTML += `
                    <li class"videos__item">
                        <iframe class="video__iframe" src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao__video">
                            <h3 class="titulo__video">${video.titulo}</h3>
                        </div>
                    </li>
                `
            })
    } catch(error){
        containerVideos.innerHTML = `
            <p>Houve um erro ao carregar os vídeos: ${error}</p>
        `
    }
}

buscarMostrarVideos();
