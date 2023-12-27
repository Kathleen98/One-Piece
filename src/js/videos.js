const containerVideos = document.querySelector('.videos__container');


const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) =>
    videos.forEach((video) =>{
        containerVideos.innerHTML += `
            <li class"videos__item">
                <iframe class="video__iframe" src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao__video">
                    <h3 class="titulo__video">${video.titulo}</h3>
                </div>
            </li>
        `
    })
);