const diasElemento = document.querySelector('[data-dias]');
const horasElemento = document.querySelector('[data-horas]');
const minutosElemento = document.querySelector('[data-minutos]');
const segundosElemento = document.querySelector('[data-segundos]');

const luff = document.querySelector('[data-luff]');
const zoro = document.querySelector('[data-zoro]');
const nami = document.querySelector('[data-nami]');
const sanji = document.querySelector('[data-sanji]');
const robin = document.querySelector('[data-robin]');
const chopper = document.querySelector('[data-chopper]');
const usopp = document.querySelector('[data-usopp]');
const imgPersonagens = document.querySelector('.container__lista__item__img'); 


const render = (dias, horas, minutos, segundos) => {
    diasElemento.innerHTML = dias;
    horasElemento.innerHTML = horas;
    minutosElemento.innerHTML = minutos;
    segundosElemento.innerHTML = segundos;
};

const contador = () =>{
    // capturando os dias
    const hoje = new Date();
    const dataEstreia = new Date(2023,11,31);

    // cálculo para saber quantos dias faltam
    const calculo = dataEstreia - hoje;

    // convertendo o cálculo em dias, horas, minutos e segundos
    const dias = Math.floor(calculo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((calculo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((calculo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((calculo % (1000 * 60)) / 1000 );

    render(dias, horas, minutos, segundos);
}

setInterval( contador, 1000);

luff.addEventListener('click', () => {

})

function alterarPersonagens(personagem){
    imgPersonagens.setAttribute('src', `./src/img/`)
}