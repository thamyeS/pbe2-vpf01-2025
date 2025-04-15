const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente');
const Pizza = require('./controllers/pizza');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/item');

router.get('/',(req, res)=>{
    res.json({titulo:'Pizzaria Ginno e Silva'});
});

router.post('/clientes',Cliente.create);
router.get('/clientes',Cliente.read);
router.get('/clientes/:id',Cliente.readOne);
router.patch('/clientes/:id',Cliente.update);
router.delete('/clientes/:id',Cliente.remove);

router.post('/pizzas',Pizza.create);
router.get('/pizzas',Pizza.read);
router.patch('/pizzas/:id',Pizza.update);
router.delete('/pizzas/:id',Pizza.remove);

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);
router.get('/pedidos/:id',Pedido.readOne);
router.patch('/pedidos/:id',Pedido.update);
router.delete('/pedidos/:id',Pedido.remove);

router.post('/itens',Item.create);
router.get('/itens',Item.read);
router.patch('/itens/:id',Item.update);
router.delete('/itens/:id',Item.remove);

module.exports = router;