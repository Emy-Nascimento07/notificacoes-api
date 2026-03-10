const express = require("express");
const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Rota para favicon (evita erro 404)
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Importar rotas
const eventoRoutes = require("./routes/eventoRoutes");

// Usar rotas com prefixo
app.use("/eventos", eventoRoutes);


// Participantes:

const participanteRoutes = require("./routes/participanteRoutes");
app.use("/participantes", participanteRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Notificações",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
        },
    });
});

module.exports = app;