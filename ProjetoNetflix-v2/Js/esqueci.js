const formulario = document.getElementById("formTrocarSenha");
const campoSenha = document.getElementById("SenhaCadastro");
const campoConfirmarSenha = document.getElementById("ConfirmarSenhaCadastro");
const botao = document.getElementById("btnConfirmar");

function validarCampos() {
  if (
    campoSenha.value !== "" &&
    campoConfirmarSenha.value !== "" &&
    campoSenha.value === campoConfirmarSenha.value
  ) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

campoSenha.addEventListener("input", validarCampos);
campoConfirmarSenha.addEventListener("input", validarCampos);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (campoSenha.value !== campoConfirmarSenha.value) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Senha alterada com sucesso!");
   window.location.href = "MainPage.html";
});


