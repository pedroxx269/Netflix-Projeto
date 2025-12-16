// Busca os usuários cadastrados no LocalStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Seleciona elementos da página
const formulario = document.querySelector("form");
const inputEmail = document.querySelector("input[type='text']");
const inputSenha = document.querySelector("input[type='password']");
const botaoEntrar = document.querySelector("form .submit");

// Ação de login
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = inputsenha.value.trim();
  const confirmar = inputConfirmar.value.trim();

  // Validação básica
  if (senha === "" || confirmar === "") {
    alert("Preencha todos os campos.");
    return;
  }

  // Verifica se o usuário existe
  const usuarioEncontrado = usuarios.find(
    (u) => u.senha.toLowerCase() === senha.toLowerCase() && u.confirmar === confirmar
  );

  if (!usuarioEncontrado) {
    alert("As senhas nao se concidem!");
    return;
  }

  // Armazena usuário logado (opcional)
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

  // Redireciona
  alert("Senha trocada com sucesso!");
  window.location.href = "MainPage.html"; // ajuste o nome se for diferente
});

const botaoCadastro = document.getElementById("btnCadastro");

botaoCadastro.addEventListener("click", () => {
  window.location.href = "cadastro.html"; // coloque o nome correto do arquivo
});
function showHidePassword() {
  const password = document.getElementById('confirmar');
  const toggler = document.querySelector('.input i');

  if (password.type === 'password') {
    password.type = 'text'; //  mostra a senha
    toggler.classList.remove('bi-eye-slash');
    toggler.classList.add('bi-eye-fill');
  } else {
    password.type = 'password'; //  esconde a senha
    toggler.classList.remove('bi-eye-fill');
    toggler.classList.add('bi-eye-slash');   
}
}