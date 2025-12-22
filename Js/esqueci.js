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

