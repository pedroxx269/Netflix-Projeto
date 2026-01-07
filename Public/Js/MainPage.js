document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PROTEÇÃO DE ROTA
  ========================= */
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuarioLogado) {
    window.location.href = "/login";
    return;
  }

  /* =========================
     SKELETON LOADING
  ========================= */
  const skeleton = document.getElementById("skeleton");
  const content = document.getElementById("content");

  setTimeout(() => {
    if (skeleton) skeleton.style.display = "none";
    if (content) {
      content.classList.remove("hidden");
      content.classList.add("fade-in");
    }
  }, 1200);

  /* =========================
     HERO SLIDER
  ========================= */
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

    document.querySelector(".caption-title").textContent =
      descricoes[heroIndex].title;

    document.querySelector(".caption-synopsis").textContent =
      descricoes[heroIndex].synopsis;

    document.querySelector(".caption-sub").textContent =
      descricoes[heroIndex].sub;
  }

  atualizarHero();

  window.proximobanner = () => {
    heroIndex = (heroIndex + 1) % totalSlides;
    atualizarHero();
  };

  window.banneranterior = () => {
    heroIndex = (heroIndex - 1 + totalSlides) % totalSlides;
    atualizarHero();
  };

  setInterval(proximobanner, 6000);

  /* =========================
     BOAS-VINDAS (1x)
  ========================= */
  if (!sessionStorage.getItem("boasVindasExibida")) {
    Swal.fire({
      title: "Bem-vindo 👋",
      text: `Aproveite o conteúdo, ${usuarioLogado.email}!`,
      icon: "success",
      confirmButtonColor: "#e50914",
    });
    sessionStorage.setItem("boasVindasExibida", "true");
  }

});

/* =========================
   SCROLL DAS ROWS
========================= */
function scrollTrack(trackId, direction) {
  const track = document.querySelector(trackId);
  if (!track) return;

  const card = track.querySelector(".item");
  if (!card) return;

  const deslocamento = card.offsetWidth + 20;

  track.scrollBy({
    left: direction * deslocamento,
    behavior: "smooth",
  });
}

function rolarEsquerdaFilmes() {
  scrollTrack("#filmes-item", -1);
}
function rolarDireitaFilmes() {
  scrollTrack("#filmes-item", 1);
}
function rolarEsquerdaSeries() {
  scrollTrack("#series-item", -1);
}
function rolarDireitaSeries() {
  scrollTrack("#series-item", 1);
}

/* =========================
   LOGOUT
========================= */
function logout() {
  Swal.fire({
    title: "Deseja sair?",
    text: "Você será desconectado da sua conta.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e50914",
    cancelButtonColor: "#333",
    confirmButtonText: "Sair",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("usuarioLogado");
      window.location.href = "/login";
    }
  });
}

// SCROLL REVEAL DOS CARDS
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 80);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".item").forEach((item) => {
  observer.observe(item);
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const age = card.querySelector(".age").innerText;
        const time = card.querySelector(".time").innerText;
        const genres = card.querySelector(".genres").innerHTML;
        const trailer = card.dataset.trailer;


        document.getElementById("modal-age").innerText = age;
        document.getElementById("modal-time").innerText = time;
        document.getElementById("modal-genres").innerHTML = genres;

        document.getElementById("modal-trailer").src = trailer + "?autoplay=1";

        document.getElementById("modal-filme").classList.remove("hidden");
    });
});

// FECHAR MODAL
function fecharModal() {
    document.getElementById("modal-filme").classList.add("hidden");
    document.getElementById("modal-trailer").src = "";
}

// FECHAR AO CLICAR FORA
document.querySelector(".modal-overlay").addEventListener("click", fecharModal);



  document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const imdbId = card.dataset.imdb;
    abrirModal(card, imdbId);
  });
});

function abrirModal(card, imdbId) {
  document.getElementById("modal-filme").classList.remove("hidden");


  document.getElementById("modal-age").innerText =
    card.querySelector(".age").innerText;

  document.getElementById("modal-time").innerText =
    card.querySelector(".time").innerText;

  document.getElementById("modal-genres").innerHTML =
    card.querySelector(".genres").innerHTML;

  carregarFilme(imdbId);
}

// API imdb
function carregarFilme(imdbId) {
  fetch(`https://api.imdbapi.dev/titles/${imdbId}`)
    .then(res => res.json())
    .then(json => {
      const nota = json.rating?.aggregateRating ?? "N/A";
      const sinopse =
        json.plot;

      document.getElementById("modal-api").innerHTML = `
        <p><strong>Nota:</strong> ${nota}</p>
        <p>${sinopse}</p>
      `;
    });
}
