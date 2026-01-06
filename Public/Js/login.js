// Busca os usuários cadastrados no LocalStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Seleciona elementos da página
const formulario = document.querySelector("form");
const inputEmail = document.getElementById("EmailLogin");
const inputSenha = document.getElementById("SenhaLogin");

// Ação de login
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = inputEmail.value.trim();
  const senha = inputSenha.value.trim();

  // Validação básica
  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  // Verifica se o usuário existe
  const usuarioEncontrado = usuarios.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
  );

  if (!usuarioEncontrado) {
    alert("E-mail ou senha incorretos!");
    return;
  }

  // Armazena usuário logado (opcional)
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

  // Redireciona
  alert("Login realizado com sucesso!");
  window.location.href = "/mainpage"; // redireciona para a rota do server.js
});

// Mostrar / esconder senha
function showHidePassword() {
  const password = document.getElementById('SenhaLogin'); // corresponde ao input
  const toggler = password.parentElement.querySelector('i'); // pega o ícone dentro do mesmo div

  if (password.type === 'password') {
    password.type = 'text';
    toggler.classList.remove('bi-eye-fill');
    toggler.classList.add('bi-eye-slash');
  } else {
    password.type = 'password';
    toggler.classList.remove('bi-eye-slash');
    toggler.classList.add('bi-eye-fill');   
  }
}
