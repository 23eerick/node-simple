const express = require('express');
const { randomUUID } = require('crypto');

const app = express();

app.use(express.json())


const products = [];


app.post('/products', (req, res) => {
    const { name, price } = req.body;

    const product = {
        name,
        price,
        id: randomUUID()
    };

    products.push(product);

    return res.json(product);
})

app.get('/products', (req, res) => {
    return res.json(products)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    const product = products.find(product => product.id === id);
    return res.json(product);
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const productIndex = products.findIndex(product => product.id === id);

    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.json({
        message: 'product changed successfully'
    })
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(product => product.id === id);

    products.splice(productIndex, 1);

    return res.json({
        message: 'product removed successfully'
    })

})

app.listen(3001, () => {
    console.log('server running!')
})