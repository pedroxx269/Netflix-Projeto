// Busca os usuários cadastrados
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Aguarda DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const inputEmail = document.getElementById("EmailLogin");
  const inputSenha = document.getElementById("SenhaLogin");
  const btnLogin = document.getElementById("btnLogin");

  // Proteção extra
  if (!formulario || !btnLogin) return;

  const btnText = btnLogin.querySelector(".btn-text");
  const spinner = btnLogin.querySelector(".spinner");

  // Validação básica
  if (email === "" || senha === "") {
    Swal.fire({
  title: "Login falhou!",
  text: "Preencha todos os campos",
  icon: "error"
});
    return;
  }
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

  if (!usuarioEncontrado) {
    Swal.fire({
  title: "Login falhou!",
  text: "Email ou senha incorretos",
  icon: "error"
});
    return;
  }

    // Loading
    btnLogin.disabled = true;
    btnText.textContent = "Entrando...";
    spinner.classList.remove("hidden");

    setTimeout(() => {
      const usuarioEncontrado = usuarios.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.senha === senha
      );

      if (!usuarioEncontrado) {
        Swal.fire({
          icon: "error",
          title: "Login inválido",
          text: "E-mail ou senha incorretos.",
          confirmButtonColor: "#e50914",
        });

        btnLogin.disabled = false;
        btnText.textContent = "Entrar";
        spinner.classList.add("hidden");
        return;
      }

      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioEncontrado)
      );

      Swal.fire({
        icon: "success",
        title: "Login realizado!",
        text: "Redirecionando...",
        confirmButtonColor: "#e50914",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/mainpage";
      });
    }, 1200);
  });
});

// Mostrar / esconder senha
function showHidePassword() {
  const password = document.getElementById("SenhaLogin");
  const toggler = password?.parentElement.querySelector("i");

  if (!password || !toggler) return;

  if (password.type === "password") {
    password.type = "text";
    toggler.classList.replace("bi-eye-fill", "bi-eye-slash");
  } else {
    password.type = "password";
    toggler.classList.replace("bi-eye-slash", "bi-eye-fill");
  }
}
