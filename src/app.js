const express = require("express");
const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Rota de teste - vamos remover depois
app.get("/", (req, res) => {
    res.json({ mensagem: "API de notificações funcionando! 🚀"})
});

module.exports = app;