// Array de usuários no localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Seleciona elementos
const formulario = document.querySelector(".FormularioCadastro");
const campoEmail = document.getElementById("EmailCadastro");
const campoSenha = document.getElementById("SenhaCadastro");
const campoConfirmarSenha = document.getElementById("ConfirmarSenha");

// Validação de e-mail
function validarEmail(email) {
  const regra = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regra.test(email);
}

// Validação de senha
function validarSenha(senha) {
  let valido = true;

  if (senha.length < 8) { mostrarMsgQuantidade(); valido = false; } else { esconderMsgQuantidade(); }
  if (!/[0-9]/.test(senha)) { mostrarMsgNumero(); valido = false; } else { esconderMsgNumero(); }
  if (!/[A-Z]/.test(senha)) { mostrarMsgMaiuscula(); valido = false; } else { esconderMsgMaiuscula(); }
  if (!/[@#$%&]/.test(senha)) { mostrarMsgEspeciais(); valido = false; } else { esconderMsgEspeciais(); }

  return valido;
}

// Mostrar/Esconder mensagens
function mostrarMsgQuantidade() { document.getElementById("regra8").style.display = "block"; }
function mostrarMsgNumero() { document.getElementById("regraNumero").style.display = "block"; }
function mostrarMsgMaiuscula() { document.getElementById("regraMaiuscula").style.display = "block"; }
function mostrarMsgEspeciais() { document.getElementById("regraSimbolo").style.display = "block"; }

function esconderMsgQuantidade() { document.getElementById("regra8").style.display = "none"; }
function esconderMsgNumero() { document.getElementById("regraNumero").style.display = "none"; }
function esconderMsgMaiuscula() { document.getElementById("regraMaiuscula").style.display = "none"; }
function esconderMsgEspeciais() { document.getElementById("regraSimbolo").style.display = "none"; }

// Atualiza mensagens enquanto digita
campoSenha.addEventListener("input", () => {
  const senha = campoSenha.value;
  document.getElementById("regra8").style.display = senha.length < 8 ? "block" : "none";
  document.getElementById("regraNumero").style.display = !/[0-9]/.test(senha) ? "block" : "none";
  document.getElementById("regraMaiuscula").style.display = !/[A-Z]/.test(senha) ? "block" : "none";
  document.getElementById("regraSimbolo").style.display = !/[@#$%&]/.test(senha) ? "block" : "none";
});

// Ao enviar formulário
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // previne envio para servidor

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirmar = campoConfirmarSenha.value;

  // Validação
  if (!validarEmail(email)) {
    alert("E-mail inválido!");
    return;
  }
  if (!validarSenha(senha)) {
    alert("Senha inválida! Verifique as regras.");
    return;
  }
  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  // Checa duplicado
  if (usuarios.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    alert("E-mail já cadastrado!");
    return;
  }

  // Adiciona usuário
  usuarios.push({ email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  console.log("Usuários cadastrados:", usuarios); // mostra array no console
  alert("Usuário cadastrado com sucesso!");

  // Redireciona para login
  window.location.href = "/login"; // ou "login.html" dependendo do seu arquivo
});
