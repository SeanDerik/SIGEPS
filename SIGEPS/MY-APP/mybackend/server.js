const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();
const connection = new Sequelize('sigeps', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Middleware
app.use(cors());
app.use(express.json());

// Test the database connection
connection.authenticate()
    .then(() => console.log('Connected to MySQL database'))
    .catch(err => console.error('Unable to connect to the database:', err));

// Import models from MANUTENÇÃO
const Administrador = require('./models/manutencao/Administrador');
const Chamados = require('./models/manutencao/Chamados');
const Clientes = require('./models/manutencao/Clientes');
const Especialidade = require('./models/manutencao/Especialidade');
const EspecialidadeEspecialista = require('./models/manutencao/EspecialidadeEspecialista');
const EspecialistaChamado = require('./models/manutencao/EspecialistaChamado');
const Especialistas = require('./models/manutencao/Especialistas');
const Sistemas = require('./models/manutencao/Sistemas');
const StatusChamado = require('./models/manutencao/StatusChamado');
const TipoManutencao = require('./models/manutencao/TipoManutencao');
const TipoSistema = require('./models/manutencao/TipoSistema');
const Triagem = require('./models/manutencao/Triagem');

// Import models from TESTE



// Create a route to get data
app.get('/administrador', async (req, res) => {
    try {
        const admins = await Administrador.findAll();
        res.json(admins);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/chamados', async (req, res) => {
    try {
        const chamados = await Chamados.findAll(); // Changed to chamados
        res.json(chamados);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Clientes.findAll(); // Changed to triagens
        res.json(clientes);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialidade', async (req, res) => {
    try {
        const especialidade = await Especialidade.findAll();
        res.json(especialidades);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialidade-especialista', async (req, res) => {
    try {
        const especialidadeEspecialistas = await EspecialidadeEspecialista.findAll();
        res.json(especialidadeEspecialistas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialista-chamado', async (req, res) => {
    try {
        const especialistaChamados = await EspecialistaChamado.findAll();
        res.json(especialistaChamados);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialistas', async (req, res) => {
    try {
        const especialistas = await Especialistas.findAll();
        res.json(especialistas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/sistemas', async (req, res) => {
    try {
        const sistemas = await Sistemas.findAll();
        res.json(sistemas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/status-chamado', async (req, res) => {
    try {
        const statusChamados = await StatusChamado.findAll();
        res.json(statusChamados);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipo-manutencao', async (req, res) => {
    try {
        const tipoManutencao = await TipoManutencao.findAll();
        res.json(tipoManutencao);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipo-sistema', async (req, res) => {
    try {
        const tipoSistema = await TipoSistema.findAll();
        res.json(tipoSistema);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/triagem', async (req, res) => {
    try {
        const triagens = await Triagem.findAll(); // Changed to triagens
        res.json(triagens);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
