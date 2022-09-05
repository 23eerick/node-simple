const express = require('express');
const app = express();

app.get('/primary-router', (req, res) => {
    return res.json({
        message: 'Acessou a primeira rota'
    })
})

app.listen(3001, () => {
    console.log('server running!')
})