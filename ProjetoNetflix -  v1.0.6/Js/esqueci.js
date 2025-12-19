const formulario = document.getElementById("formTrocarSenha");
const inputSenha = document.getElementById("senha");
const inputConfirmar = document.getElementById("confirmar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = inputSenha.value.trim();
  const confirmar = inputConfirmar.value.trim();

  if (senha === "" || confirmar === "") {
    alert("Preencha todos os campos.");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Senha confirmada com sucesso!");
  window.location.href = "MainPage.html";
});

function showHidePassword() {
  const password = document.getElementById('senha');
  const toggler = document.querySelector('.input i');

  if (password.type === 'password') {
    password.type = 'text'; //  mostra a senha
    //toggler.classList.remove('bi-eye-slash');
    //toggler.classList.add('bi-eye-fill');
  } else {
    password.type = 'password'; //  esconde a senha
   // toggler.classList.remove('bi-eye-fill');
    //toggler.classList.add('bi-eye-slash');   
}
}





