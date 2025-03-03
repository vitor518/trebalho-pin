const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let carrinho = [
    { produto: 'Floratta Blue', quantidade: 2, preco: 99.90 },
    { produto: 'Malbec', quantidade: 1, preco: 129.90 }
];

// Configurar o diretório de visualizações e o mecanismo de visualização EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir arquivos estáticos e para analisar o corpo das requisições
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para a página de contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

// Rota para a página do carrinho de compras
app.get('/carrinho', (req, res) => {
    res.render('carrinho', { carrinho });
});

// Rota para adicionar um produto ao carrinho
app.post('/adicionar-ao-carrinho', (req, res) => {
    const { produto, preco } = req.body;
    const itemExistente = carrinho.find(item => item.produto === produto);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ produto, quantidade: 1, preco });
    }
    res.json({ success: true });
});

// Rota para remover um produto do carrinho
app.delete('/remover-do-carrinho/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < carrinho.length) {
        carrinho.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
