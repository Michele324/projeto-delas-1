const mongoose = require("mongoose");
const clienteSchema = new mongoose.Schema(
    {
        id: { type: String },
        nomeDoCliente: { type: String, required: true },
        cpf: { type: String, required: true },
        whatsapp: { type: String, required: true },
        endereco: { type: Object, required: true },
        email: { type: String, required: true },
        dataDeNascimento: { type: String },
        genero: { type: String, required: true },
        youLiked: { type: Boolean },
    }
)

const cliente = mongoose.model("cliente", clienteSchema);

module.exports = cliente;