
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
  window.location.href = "MainPage.html"; // ajuste o nome se for diferente
});

const botaoCadastro = document.getElementById("btnCadastro");

botaoCadastro.addEventListener("click", () => {
  window.location.href = "cadastro.html"; // coloque o nome correto do arquivo
});
