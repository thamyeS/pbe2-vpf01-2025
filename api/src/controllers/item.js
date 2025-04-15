const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    req.body.sub_total = req.body.valor * req.body.quantidade;
    try {
        const item = await prisma.item.create({
            data: req.body
        });
        res.status(201).json(item).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const itens = await prisma.item.findMany();
    res.json(itens);
}

const update = async (req, res) => {
    try {
        const item = await prisma.item.update({
            data: req.body,
            where: {
                item_id: Number(req.params.id)
            }
        });
        res.status(202).json(item).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const item = await prisma.item.delete({
            where: {
                item_id: Number(req.params.id)
            }
        });
        res.status(204).json(item).end();
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