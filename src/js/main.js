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
const tituloPersonagens = document.querySelector('.container__lista__item__titulo');
const textoPersonagens = document.querySelector('.container__lista__item__texto');


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
    alterarPersonagens('luff');
    tituloPersonagens.textContent = 'Luff';
    textoPersonagens.textContent = 'Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo. '
});

zoro.addEventListener('click', () =>{
    alterarPersonagens('zoro');
    tituloPersonagens.textContent = 'Zoro';
    textoPersonagens.textContent = 'Roronoa Zoro, é um personagem fictício da série One Piece criada por Eiichiro Oda. Na história, Zoro era um caçador de piratas que por fim se torna um quando é convencido pelo protagonista Monkey D. Luffy a ser o primeiro membro de sua tripulação, os Piratas do Chapéu de Palha.'
});

nami.addEventListener('click', () =>{
    alterarPersonagens('nami');
    tituloPersonagens.textContent = 'Nami';
    textoPersonagens.textContent = 'Nami, é uma personagem fictícia do mangá e anime One Piece criada por Eiichiro Oda. Nami é introduzida na narrativa como uma aliada oportunista do protagonista Monkey D. Luffy mas que possui motivos nobres por trás de suas ações ambíguas.'
});

sanji.addEventListener('click', () =>{
    alterarPersonagens('sanji');
    tituloPersonagens.textContent = 'Sanji';
    textoPersonagens.textContent = 'Vinsmoke Sanji é um personagem criado por Eiichiro Oda para o seu mangá e anime One Piece. Ele é introduzido ainda na primeira saga da história como um cozinheiro do restaurante-navio Baratie e depois passa a trabalhar para o capitão Monkey D. Luffy no seu bando dos Piratas do Chapéu de Palha.'
});

robin.addEventListener('click', () =>{
    alterarPersonagens('robin');
    tituloPersonagens.textContent = 'Robin';
    textoPersonagens.textContent = 'Nico Robin é uma personagem fictícia da obra japonesa One Piece de Eiichiro Oda. Inicialmente uma antagonista, ela depois convence o capitão Monkey D. Luffy a deixá-la entrar no seu bando dos Piratas do Chapéu de Palha.'
});

chopper.addEventListener('click', () =>{
    alterarPersonagens('chopper');
    tituloPersonagens.textContent = 'Chopper';
    textoPersonagens.textContent = 'Traduzido do inglês-Tony Tony Chopper, também conhecido como "Amante de Algodão Doce", é um personagem fictício da série de mangá One Piece criada por Eiichiro Oda. Ele é o sexto membro a ingressar e o médico dos Piratas do Chapéu de Palha. Chopper aparece frequentemente em mercadorias oficiais, servindo como mascote da série.'
});

usopp.addEventListener('click', () =>{
    alterarPersonagens('usopp');
    tituloPersonagens.textContent = 'Usopp';
    textoPersonagens.textContent = 'Usopp é um personagem fictício da série em mangá One Piece criada por Eiichiro Oda. Ele faz parte do grupo principal, os Piratas do Chapéu de Palha, onde atua primariamente como atirador mas quando necessário cumpre outras posições como inventor, escultor e pintor.'
});



function alterarPersonagens(personagem){
    imgPersonagens.setAttribute('src', `./src/img/${personagem}.jpg`);
}