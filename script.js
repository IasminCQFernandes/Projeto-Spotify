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
];


let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
