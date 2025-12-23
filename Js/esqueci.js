const formTrocarSenha = document.getElementById("formTrocarSenha");
const campoSenha = document.getElementById("SenhaCadastro");
const campoConfirmar = document.getElementById("ConfirmarSenhaCadastro");
const btnConfirmar = document.getElementById("btnConfirmar");
const msgErro = document.getElementById("msgErro");

// Validação da senha
function validarSenha(senha) {
  if (senha.length < 8) return "A senha deve ter pelo menos 8 caracteres.";
  if (!/[0-9]/.test(senha)) return "A senha deve ter pelo menos um número.";
  if (!/[A-Z]/.test(senha))
    return "A senha deve ter pelo menos uma letra maiúscula.";
  if (!/[@#$%&]/.test(senha))
    return "A senha deve ter pelo menos um símbolo (@#$%&).";

  return ""; // Sem erro
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
// Checar senhas e mostrar mensagem
function checarSenhas() {
  if (campoSenha.value === "" || campoConfirmar.value === "") {
    btnConfirmar.disabled = true;
    msgErro.style.display = "none";
    return;
  }

  if (campoSenha.value === campoConfirmar.value) {
    btnConfirmar.disabled = false;
    msgErro.style.display = "none";
  } else {
    btnConfirmar.disabled = true;
    msgErro.style.display = "block";
  }
}

// Eventos de input
campoSenha.addEventListener("input", checarSenhas);
campoConfirmar.addEventListener("input", checarSenhas);

// Submissão do formulário
formTrocarSenha.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = campoSenha.value;
  const confirmarSenha = campoConfirmar.value;

  const erro = validarSenha(senha);
  if (erro !== "") {
    alert(erro);
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Salvar senha no localStorage (ou enviar para API)
  localStorage.setItem("senhaNova", senha);

  alert("Senha alterada com sucesso!");
  formTrocarSenha.reset();
  btnConfirmar.disabled = true;
  window.location.href = "MainPage.html";
});
