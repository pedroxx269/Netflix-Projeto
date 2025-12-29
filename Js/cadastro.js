// Carrega usuários do LocalStorage (ou cria array vazio)
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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
  let valido = true
  if (!/[A-Z]/.test(senha)) { mostrarMsgMaiuscula();
    valido = false;
} else {
    esconderMsgMaiuscula();
}
  if (!/[0-9]/.test(senha)) {
    mostrarMsgNumero();
    valido = false;
} else {
    esconderMsgNumero();
};

  if (senha.length < 8) { 
    mostrarMsgQuantidade();
    valido = false;
} else {
    esconderMsgQuantidade();
}

  if (!/[#*_@%$]/.test(senha)) {
    mostrarMsgEspeciais();
    valido = false;
} else {
    esconderMsgEspeciais();
};

  return valido
}

function validarSenhaAoDigitar() {
  const senha = campoSenha.value;

  const regra8 = document.getElementById("regra8");
  const regraNumero = document.getElementById("regraNumero");
  const regraMaiuscula = document.getElementById("regraMaiuscula");
  const regraSimbolo = document.getElementById("regraSimbolo");

  // sempre esconde tudo antes
  regra8.style.display = "none";
  regraNumero.style.display = "none";
  regraMaiuscula.style.display = "none";
  regraSimbolo.style.display = "none";

  // agora mostra só a primeira regra que falhar
  if (senha.length < 8) {
    regra8.style.display = "block";
  } 
  else if (!/[0-9]/.test(senha)) {
    regraNumero.style.display = "block";
  } 
  else if (!/[A-Z]/.test(senha)) {
    regraMaiuscula.style.display = "block";
  } 
  else if (!/[@#$%&]/.test(senha)) {
    regraSimbolo.style.display = "block";
  }
}


// dispara enquanto digita
campoSenha.addEventListener("input", validarSenhaAoDigitar);
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirmarSenha = campoConfirmarSenha.value;

  // Validação de e-mail
  if (!validarEmail(email)) {
    return;
  }

  // Validação de senha
  const erroSenha = validarSenha(senha);
  if (erroSenha !== "") {

    return;
  }

  // Confirmação de senha
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Verificar e-mail duplicado
  if (usuarios.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    alert("Este e-mail já está cadastrado.");
    return;
  }

  // Criar usuário
  const novoUsuario = { id: Date.now(), email, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  formulario.reset();
});


// Tema
const botaoTema = document.getElementById('ToggleTema');

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    botaoTema.textContent = "☀️ Light Mode";
  } else {
    botaoTema.textContent = "🌙 Dark Mode";
  }
});
console.log(usuarios);

//Mostrar msg erro
function mostrarMsgQuantidade() {
    document.getElementById("regra8").style.display = "block";
}

function mostrarMsgNumero() {
    document.getElementById("regraNumero").style.display = "block";
}

function mostrarMsgEspeciais() {
    document.getElementById("regraSimbolo").style.display = "block";
}

function mostrarMsgMaiuscula() {
    document.getElementById("regraMaiuscula").style.display = "block";
}

//esconder msg erro
function esconderMsgQuantidade() {
    document.getElementById("regra8").style.display = "none";
}

function esconderMsgNumero() {
    document.getElementById("regraNumero").style.display = "none";
}

function esconderMsgEspeciais() {
    document.getElementById("regraSimbolo").style.display = "none";
}

function esconderMsgMaiuscula() {
    document.getElementById("regraMaiuscula").style.display = "none";
}
