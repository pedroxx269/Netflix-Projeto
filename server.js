// server.js
const express = require('express');
const path = require('path');
const authRoutes = require('./Routes/auth'); // importa as rotas POST

const app = express();
const PORT = 3000;

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// -------------------- ROTAS GET --------------------

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cadastro.html')));
app.get('/esqueci', (req, res) => res.sendFile(path.join(__dirname, 'public', 'esqueci.html')));
app.get('/mainpage', (req, res) => res.sendFile(path.join(__dirname, 'public', 'MainPage.html')));

// -------------------- ROTAS POST --------------------

app.use('/', authRoutes); 

// -------------------- ROTA 404 --------------------

app.use((req, res) => {res.status(404).send('Página não encontrada');});

// -------------------- START SERVER --------------------

app.listen(PORT, () => {console.log(`Servidor rodando em http://localhost:${PORT}`);});
