const mongoose = require("mongoose");
const clienteSchema = new mongoose.Schema(
    {
        id: { type: String },
        nomedaEmpreendedora: { type: String ,required: true},
        nomedoEmpreendimento: { type: String , required: true},
        cpf: { type: String,required: true },
        CNPJ: { type: String, required: true},
        redesocial: { type: Array },
        Site: { type: String },
        Whatsapp: { type: String,required: true },
        email: { type: String, required: true },
        Nicho: { type: String,required: true },
        categoria: { type: String,required: true },
        endereço: { type: Object, required: true },
        descriçao: { type: String ,required: true},
        Youliked: { type: Boolean }
    }
)

const cliente = mongoose.model("cliente", clienteSchema);

module.exports = cliente;