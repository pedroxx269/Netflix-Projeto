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
  if (!/[A-Z]/.test(senha)) {
    mostrarMsgMaiuscula();
    valido = false;
  }

  if (!/[0-9]/.test(senha)) {
    mostrarMsgNumero();
    valido = false;
  }

  if (senha.length < 8) {
    mostrarMsgQuantidade();
    valido = false;
  }

  if (!/[#*_@%$]/.test(senha)) {
    mostrarMsgEspeciais();
    valido = false;
  }

  return valido;
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;

  // Validações
  if (!validarEmail(email)) {
    return;
  }

  if (!validarSenha(senha)) {
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

  Swal.fire({
  title: "Cadastro realizado com sucesso",
  text: "",
  icon: "success"
});

  formulario.reset();

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
});
//Mostrar msg erro
function mostrarMsgQuantidade() {
    Swal.fire({
  title: "Senha inválida",
  text: "Sua senha deve conter pelo menos 8 caracteres",
  icon: "error"
})
  }
function mostrarMsgNumero() {
    Swal.fire({
  title: "Senha inválida",
  text: "Sua senha deve conter pelo menos 1 número",
  icon: "error"
})
}

function mostrarMsgEspeciais() {
    Swal.fire({
  title: "Senha inválida",
  text: "Sua senha deve conter pelo menos 1 caractere especial",
  icon: "error"
})
}

function mostrarMsgMaiuscula() {
    Swal.fire({
  title: "Senha inválida",
  text: "Sua senha deve conter pelo menos 1 letra Maiúscula",
  icon: "error"
})
}
