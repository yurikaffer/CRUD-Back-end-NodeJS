const Usuario = require("../model/Usuario")

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();
        res.json(user)
    },

    async detail(req, res) {
        const id = req.params

        const user = await Usuario.findOne(icd);
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
    }
}