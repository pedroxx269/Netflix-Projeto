// Busca os usuários cadastrados
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Aguarda DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const inputEmail = document.getElementById("EmailLogin");
  const inputSenha = document.getElementById("SenhaLogin");
  const btnLogin = document.getElementById("btnLogin");
});

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

  // Redireciona
  Swal.fire({
  title: "Sucesso!",
  text: "Login realizado com sucesso!",
  icon: "success"
});
  window.location.href = "MainPage.html"; // ajuste o nome se for diferente
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
