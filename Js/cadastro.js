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
  if (senha.length < 8) return "A senha deve ter pelo menos 8 caracteres.";
  if (!/[0-9]/.test(senha)) return "A senha deve ter pelo menos um número.";
  if (!/[A-Z]/.test(senha))
    return "A senha deve ter pelo menos uma letra maiúscula.";
  if (!/[@#$%&]/.test(senha))
    return "A senha deve ter pelo menos um símbolo (@#$%&).";

  return ""; // Sem erro
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirmarSenha = campoConfirmarSenha.value;

  // Validação de e-mail
  if (!validarEmail(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  // Validação de senha
  const erroSenha = validarSenha(senha);
  if (erroSenha !== "") {
    alert(erroSenha);
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
