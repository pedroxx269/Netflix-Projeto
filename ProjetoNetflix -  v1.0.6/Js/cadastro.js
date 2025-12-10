// Carrega usuários do LocalStorage (ou cria array vazio)
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const formulario = document.querySelector(".FormularioCadastro");
const campoEmail = document.getElementById("EmailCadastro");
const campoSenha = document.getElementById("SenhaCadastro");

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

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;

  // Validações
  if (!validarEmail(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  const erroSenha = validarSenha(senha);
  if (erroSenha !== "") {
    return;
  }

  // Verificar e-mail duplicado
  if (usuarios.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    alert("Este e-mail já está cadastrado.");
    return;
  }

  // Criar e salvar novo usuário
  const novoUsuario = {
    id: Date.now(),
    email: email,
    senha: senha
  };

  usuarios.push(novoUsuario);

  //  SALVANDO NO LOCALSTORAGE
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