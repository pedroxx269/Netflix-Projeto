
// Busca os usuários cadastrados no LocalStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Seleciona elementos da página
const formulario = document.querySelector("form");
const inputEmail = document.querySelector("input[type='email']");
const inputSenha = document.querySelector("input[type='password']");
const botaoEntrar = document.querySelector("form .submit");

// Ação de login
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = inputEmail.value.trim();
  const senha = inputSenha.value.trim();

  // Validação básica
  if (email === "" || senha === "") {
    Swal.fire({
  title: "Login falhou!",
  text: "Preencha todos os campos",
  icon: "error"
});
    return;
  }

  // Verifica se o usuário existe
  const usuarioEncontrado = usuarios.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
  );

  if (!usuarioEncontrado) {
    Swal.fire({
  title: "Login falhou!",
  text: "Email ou senha incorretos",
  icon: "error"
});
    return;
  }

  // Armazena usuário logado (opcional)
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

  // Redireciona
  Swal.fire({
  title: "Sucesso!",
  text: "Login realizado com sucesso!",
  icon: "success"
});
  window.location.href = "MainPage.html"; // ajuste o nome se for diferente
});

const botaoCadastro = document.getElementById("btnCadastro");

botaoCadastro.addEventListener("click", () => {
  window.location.href = "cadastro.html"; // coloque o nome correto do arquivo
});
function showHidePassword() {
  const password = document.getElementById('senha');
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