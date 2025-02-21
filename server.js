const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', require('./routes/products'));

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao aplicativo de delivery!');

});

app.use('/api/customers', require('./routes/customers'));

app.use('/api/cart', require('./routes/cart'));

app.use(express.static('public'));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
