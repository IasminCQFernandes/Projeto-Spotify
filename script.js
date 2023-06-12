//MINHAS MUSICAS FAVORITAS
let musicas = [
    {
        titulo: 'Burn',
        artista: 'David Kushner',
        src:'music/DavidKushner-Burn.mp3',
        img:'image/david-kushner.jpg'
    },


    {
        titulo: 'In the Stars',
        artista: 'Benson Boone',
        src:'music/BensonBoone-InTheStars.mp3',
        img:'image/benson-boone.jpg'
    },


    {
        titulo: 'Daylight',
        artista: 'David Kushner',
        src:'music/DavidKushner-Daylight.mp3',
        img:'image/david-kushner.jpg'
    },

    {
        titulo: 'Miserable Man',
        artista: 'David Kushner',
        src:'music/DavidKushner-MiserableMan.mp3',
        img:'image/david-kushner.jpg'
    },

    {
        titulo: 'Mr. Forgettable',
        artista: 'David Kushner',
        src:'music/DavidKushner-Mr.Forgettable.mp3',
        img:'image/david-kushner.jpg'
    },

    {
        titulo: 'You Somebody Else',
        artista: 'Flora Cash',
        src:'music/floraCash-YoureSomebodyElse.mp3',
        img:'image/flora-cash.jpg'
    },

    {
        titulo: 'IDK You Yet',
        artista: 'Alexander 23',
        src:'music/idkYouYet-alexander23.mp3',
        img:'image/alexander23.jpg'
    },

    {
        titulo: 'Way Down We Go',
        artista: 'KALEO',
        src:'music/KALEO-WayDownWeGo.mp3',
        img:'image/kaleo.jpg'
    },

    {
        titulo: 'Rescue',
        artista: 'Lauren Daigle',
        src:'music/LaurenDaigle-Rescue.mp3',
        img:'image/lauren.jpg'
    },

    {
        titulo: 'Little Lion Man',
        artista: 'Mumford $ Sons',
        src:'music/LittleLionMan.mp3',
        img:'image/Little-lion-man.jpg'
    },

    {
        titulo: 'Stay',
        artista: 'Rihanna',
        src:'music/Rihanna-Stay.mp3',
        img:'image/stay- rihanna.jpg'
    },

    {
        titulo: 'Riptide',
        artista: 'Vance Joy',
        src:'music/Riptide.mp3',
        img:'image/vance-joy-riptide.jfif'
    },

    {
        titulo: 'Straight and Narrow',
        artista: 'Sam Barber',
        src:'music/SamBarber-StraightAndNarrow.mp3',
        img:'image/sam-barber.jfif'
    },

    {
        titulo: 'Ho Hey',
        artista: 'The Lumineers',
        src:'music/TheLumineers-HoHey.mp3',
        img:'image/the-luminners.jpg'
    },
];

// Variáveis para armazenar os dados da minha página HTML
let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos

// PLAY
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

// PAUSE
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

// BARRA ACOMPANHAR A DURAÇÃO DA MÚSICA
musica.addEventListener('timeupdate', atualizarBarra);

// VOLTAR MÚSICAS
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica);
});

// PRÓXIMA MÚSICA
document.querySelector('.proximo').addEventListener('click', () => {
    avancarParaProximaMusica();
});

// Funções

// TROCAR NOME DA MÚSICA, IMAGEM DO CANTOR E NOME DO CANTOR
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => { // CARREGAR
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

// DAR PLAY E TROCAR BOTÃO
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

// DAR PAUSE E TROCAR BOTÃO
function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

// FAZER BARRA CORRER COM A MÚSICA
function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

// TRANSFORMAR SEG. P/ MIN
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

// AVANÇAR PARA A PRÓXIMA MÚSICA
function avancarParaProximaMusica()
