/* =========================================================
   CARDS – MELHORES FILMES / MELHORES SÉRIES
   (APENAS CONTROLE MANUAL POR SETAS)
========================================================= */

function scrollTrack(trackId, direction) {
  const track = document.querySelector(trackId);
  if (!track) return;

  const card = track.querySelector(".item, .card");
  if (!card) return;

  const gap = 20;
  const deslocamento = card.offsetWidth + gap;

  track.scrollBy({
    left: direction * deslocamento,
    behavior: "smooth",
  });
}

// Filmes
function rolarEsquerdaFilmes() {
  scrollTrack("#filmes-item", -1);
}

function rolarDireitaFilmes() {
  scrollTrack("#filmes-item", 1);
}

// Séries
function rolarEsquerdaSeries() {
  scrollTrack("#series-item", -1);
}

function rolarDireitaSeries() {
  scrollTrack("#series-item", 1);
}

/* =========================================================
   HERO – CONTAINER PRINCIPAL (AUTO SCROLL)
========================================================= */

const heroTrack = document.querySelector(".hero-track");
const heroSlides = document.querySelectorAll(".hero-item");

let heroIndex = 0;
const totalSlides = heroSlides.length;

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

function atualizarHero() {
  if (!heroTrack) return;

  heroTrack.style.transform = `translateX(-${heroIndex * 100}%)`;

  const titulo = document.querySelector(".caption-title");
  const sinopse = document.querySelector(".caption-synopsis");
  const subtitulo = document.querySelector(".caption-sub");

  if (titulo) titulo.textContent = descricoes[heroIndex].title;
  if (sinopse) sinopse.textContent = descricoes[heroIndex].synopsis;
  if (subtitulo) subtitulo.textContent = descricoes[heroIndex].sub;
}

// Setas do HERO (opcional, se existirem)
function proximobanner() {
  heroIndex = (heroIndex + 1) % totalSlides;
  atualizarHero();
}

function banneranterior() {
  heroIndex = (heroIndex - 1 + totalSlides) % totalSlides;
  atualizarHero();
}

/* =========================================================
   AUTO-SCROLL DO HERO (ÚNICO AUTO-SCROLL DO SITE)
========================================================= */

setInterval(() => {
  proximobanner();
}, 6000);
