const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pizza = await prisma.pizza.create({
            data: req.body
        });
        res.status(201).json(pizza).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const pizzas = await prisma.pizza.findMany();
    res.json(pizzas);
}

const update = async (req, res) => {
    try {
        const pizza = await prisma.pizza.update({
            data: req.body,
            where: {
                pizza_id: Number(req.params.id)
            }
        });
        res.status(202).json(pizza).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const pizza = await prisma.pizza.delete({
            where: {
                pizza_id: Number(req.params.id)
            }
        });
        res.status(204).json(pizza).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}