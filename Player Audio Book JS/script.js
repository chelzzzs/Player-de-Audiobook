const musicContainer = document.querySelector(".music-container");
const botaoPlay = document.getElementById("play");
const botaoPause = document.getElementById("pause");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

const audio = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let capituloAtual = 1;

function tocarFaixa() {
  musicContainer.classList.add("tocando");
  audio.play();
}

// Função para Pausar
function pausarFaixa() {
  musicContainer.classList.remove("tocando");
  audio.pause();
}

// Função para decidir se toca ou pausa
function tocarOuPausar() {
  const estaTocando = musicContainer.classList.contains("tocando");
  if (estaTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

// Função para atualizar o capítulo
function carregarCapitulo() {
  audio.src = `./audios/${capituloAtual}.mp3`;
  nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

function proximaFaixa() {
  if (capituloAtual < numeroCapitulos) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }

  carregarCapitulo();
  tocarFaixa(); //
}

// Função para Faixa Anterior
function faixaAnterior() {
  if (capituloAtual > 1) {
    capituloAtual = capituloAtual - 1;
  } else {
    capituloAtual = numeroCapitulos;
  }

  carregarCapitulo();
  tocarFaixa();
}

// Conectando os Botões
botaoPlay.addEventListener("click", tocarOuPausar);
botaoPause.addEventListener("click", tocarOuPausar);
botaoProximo.addEventListener("click", proximaFaixa);
botaoAnterior.addEventListener("click", faixaAnterior);

carregarCapitulo();
