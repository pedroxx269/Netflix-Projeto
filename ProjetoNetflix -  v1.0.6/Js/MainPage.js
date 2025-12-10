function rolarEsquerdaFilmes() {
  const carrosselF = document.querySelector("#filmes-item");
  carrosselF.scrollBy({
    left: -200,
    behavior: "smooth",
  });
}

function rolarDireitaFilmes() {
  const carrosselF = document.querySelector("#filmes-item");
  carrosselF.scrollBy({
    left: 200,
    behavior: "smooth",
  });
}

function rolarEsquerdaSeries() {
  const carrosselS = document.querySelector("#series-item");
  carrosselS.scrollBy({
    left: -200,
    behavior: "smooth",
  });
}

function rolarDireitaSeries() {
  const carrosselS = document.querySelector("#series-item");
  carrosselS.scrollBy({
    left: 200,
    behavior: "smooth",
  });
}

// Seleciona o trilho do banner
const track = document.querySelector(".hero-track");
const slides = document.querySelectorAll(".hero-item");

let index = 0;
const totalSlides = slides.length;

// Próximo banner
function proximobanner() {
  index = (index + 1) % totalSlides;
  atualizarCarrossel();
}

// Banner anterior
function banneranterior() {
  index = (index - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
}

const descricoes = [
  {
    title: "Maze Runner",
    synopsis:
      "Após acordar em um enorme labirinto sem memória, Thomas se une a outros jovens para decifrar segredos mortais e tentar escapar.",
    sub: "Ação · Suspense · Mistério",
  },
  {
    title: "Stranger Things",
    synopsis:
      "A cidade de Hawkins enfrenta eventos sobrenaturais quando um garoto desaparece e uma garota com poderes aparece.",
    sub: "Sci-Fi · Terror · Drama",
  },
  {
    title: "The 100",
    synopsis:
      "Após um apocalipse nuclear, cem jovens são enviados de volta à Terra para testar se o planeta é habitável.",
    sub: "Sci-Fi · Sobrevivência · Aventura",
  },
  {
    title: "Dark",
    synopsis:
      "Quatro famílias têm seus segredos revelados quando uma criança desaparece e viagens no tempo mudam tudo.",
    sub: "Sci-Fi · Suspense · Linha do Tempo",
  },
];

// Função que move o trilho
function atualizarCarrossel() {
  track.style.transform = `translateX(-${index * 100}%)`;

  const titulo = document.querySelector(".caption-title");
  const sinopse = document.querySelector(".caption-synopsis");
  const subtitulo = document.querySelector(".caption-sub");

  titulo.textContent = descricoes[index].title;
  sinopse.textContent = descricoes[index].synopsis;
  subtitulo.textContent = descricoes[index].sub;
}
