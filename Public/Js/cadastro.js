// ===============================
// USUÁRIOS (LocalStorage)
// ===============================
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// ===============================
// ELEMENTOS
// ===============================
const formulario = document.querySelector(".FormularioCadastro");
const campoEmail = document.getElementById("EmailCadastro");
const campoSenha = document.getElementById("SenhaCadastro");
const campoConfirmarSenha = document.getElementById("ConfirmarSenha");

// ===============================
// VALIDAÇÕES
// ===============================
function validarEmail(email) {
  const regra = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regra.test(email);
}

function validarSenha(senha) {
  let valido = true;

  document.getElementById("regra8").style.display = senha.length < 8 ? "block" : "none";
  document.getElementById("regraNumero").style.display = !/[0-9]/.test(senha) ? "block" : "none";
  document.getElementById("regraMaiuscula").style.display = !/[A-Z]/.test(senha) ? "block" : "none";
  document.getElementById("regraSimbolo").style.display = !/[@#$%&]/.test(senha) ? "block" : "none";

  if (senha.length < 8) valido = false;
  if (!/[0-9]/.test(senha)) valido = false;
  if (!/[A-Z]/.test(senha)) valido = false;
  if (!/[@#$%&]/.test(senha)) valido = false;

  return valido;
}

// ===============================
// FEEDBACK EM TEMPO REAL
// ===============================
campoSenha.addEventListener("input", () => {
  validarSenha(campoSenha.value);
});

// ===============================
// SUBMIT
// ===============================
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirmar = campoConfirmarSenha.value;

  if (!validarEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "E-mail inválido",
      text: "Digite um e-mail válido.",
      confirmButtonColor: "#e50914",
    });
    return;
  }

  if (!validarSenha(senha)) {
    Swal.fire({
      icon: "warning",
      title: "Senha inválida",
      text: "A senha não atende aos requisitos.",
      confirmButtonColor: "#e50914",
    });
    return;
  }

  if (senha !== confirmar) {
    Swal.fire({
      icon: "error",
      title: "Senhas não coincidem",
      text: "Verifique e tente novamente.",
      confirmButtonColor: "#e50914",
    });
    return;
  }

  if (usuarios.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    Swal.fire({
      icon: "info",
      title: "E-mail já cadastrado",
      text: "Faça login ou use outro e-mail.",
      confirmButtonColor: "#e50914",
    });
    return;
  }

  // ===============================
  // SALVA USUÁRIO
  // ===============================
  usuarios.push({ email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  Swal.fire({
    icon: "success",
    title: "Cadastro realizado!",
    text: "Redirecionando para o login...",
    confirmButtonColor: "#e50914",
    timer: 1800,
    showConfirmButton: false,
  }).then(() => {
    window.location.href = "/login";
  });
});
