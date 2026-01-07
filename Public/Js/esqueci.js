const formTrocarSenha = document.getElementById("formTrocarSenha");
const campoSenha = document.getElementById("SenhaCadastro");
const campoConfirmar = document.getElementById("ConfirmarSenhaCadastro");
const btnConfirmar = document.getElementById("btnConfirmar");
const msgErro = document.getElementById("msgErro");

  //  Validação da senha

function validarSenha(senha) {
  if (senha.length < 8) {
    return "A senha deve ter pelo menos 8 caracteres.";
  }
  if (!/[0-9]/.test(senha)) {
    return "A senha deve ter pelo menos um número.";
  }
  if (!/[A-Z]/.test(senha)) {
    return "A senha deve ter pelo menos uma letra maiúscula.";
  }
  if (!/[@#$%&]/.test(senha)) {
    return "A senha deve ter pelo menos um símbolo (@#$%&).";
  }
  return "";
}

  //  Conferir se as senhas batem

function checarSenhas() {
  if (!campoSenha.value || !campoConfirmar.value) {
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

  //  Eventos de digitação

campoSenha.addEventListener("input", checarSenhas);
campoConfirmar.addEventListener("input", checarSenhas);

  //  Submit do formulário
  
formTrocarSenha.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = campoSenha.value;
  const confirmarSenha = campoConfirmar.value;

  const erro = validarSenha(senha);
  if (erro) {
    Swal.fire({
      icon: "warning",
      title: "Senha inválida",
      text: erro,
      confirmButtonColor: "#e50914",
    });
    return;
  }

  if (senha !== confirmarSenha) {
    Swal.fire({
      icon: "error",
      title: "Senhas não coincidem",
      text: "Digite a mesma senha nos dois campos.",
      confirmButtonColor: "#e50914",
    });
    return;
  }

  // Simulação de salvamento (localStorage ou API)
  localStorage.setItem("senhaNova", senha);

  Swal.fire({
    icon: "success",
    title: "Senha alterada com sucesso!",
    text: "Você será redirecionado para a página de login.",
    confirmButtonColor: "#e50914",
    timer: 1800,
    showConfirmButton: false,
  }).then(() => {
    formTrocarSenha.reset();
    btnConfirmar.disabled = true;
    window.location.href = "login.html";
  });
  alertPadrao.fire({
  icon: "error",
  title: "Erro ao entrar",
  text: "E-mail ou senha incorretos"
});

});
