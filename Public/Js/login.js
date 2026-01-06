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
