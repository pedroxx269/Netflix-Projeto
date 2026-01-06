// routes/auth.js
const express = require('express');
const router = express.Router();

// -------------------- ESQUECI SENHA --------------------
router.post('/esqueci', (req, res) => {
    const { SenhaCadastro, ConfirmarSenhaCadastro } = req.body;
    console.log('Nova senha:', SenhaCadastro, ConfirmarSenhaCadastro);

    if (SenhaCadastro !== ConfirmarSenhaCadastro) {
        return res.send('As senhas não coincidem!');
    }

    // Aqui você poderia atualizar a senha no banco
    res.redirect('/login');
});

// auth.js
let usuarios = []; // array em memória

router.post('/cadastro', (req, res) => {
  const { EmailCadastro, SenhaCadastro, ConfirmarSenha } = req.body;

  if (SenhaCadastro !== ConfirmarSenha) {
    return res.send('As senhas não coincidem!');
  }

  if (usuarios.some(u => u.email === EmailCadastro)) {
    return res.send('E-mail já cadastrado!');
  }

  usuarios.push({ email: EmailCadastro, senha: SenhaCadastro });
  console.log('Usuários cadastrados:', usuarios);

  res.redirect('/login');
});

router.post('/login', (req, res) => {
  const { EmailLogin, SenhaLogin } = req.body;
  const usuario = usuarios.find(u => u.email === EmailLogin && u.senha === SenhaLogin);

  if (!usuario) return res.send('Email ou senha incorretos!');

  res.redirect('/mainpage');
});


module.exports = router;
