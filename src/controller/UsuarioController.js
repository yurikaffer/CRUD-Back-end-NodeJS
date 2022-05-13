const Usuario = require("../model/Usuario")

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();
        res.json(user)
    },

    async detail(req, res) {
        const id = req.params

        const user = await Usuario.findOne(id);
        res.json(user)
    },

    async store(req, res) {
        const {nome, senha} = req.body;

        let dataCreate = {};

        dataCreate = {
            nome, senha
        }

        const user = await Usuario.create(dataCreate);
        res.json(user)
    },

    async update(req, res) {
        const {_id, nome, senha} = req.body;

        let dataCreate = {};

        dataCreate = {
            nome, senha
        }

        const user = await Usuario.findByIdAndUpdate(_id, dataCreate, {new: true});
        res.json(user)
    },

    async delete(req, res) {
        const id = req.params

        const user = await Usuario.deleteOne(id);
        res.json(user)
    }
}