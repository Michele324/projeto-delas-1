const mongoose = require("mongoose");
const empreendedoraSchema = new mongoose.Schema(
    {
        id: { type: String },
        nomeDaEmpreendedora: { type: String ,required: true},
        nomeDoEmpreendimento: { type: String , required: true},
        cpf: { type: String,required: true },
        cnpj: { type: String, required: true},
        redesocial: { type: Array },
        site: { type: String },
        whatsapp: { type: String,required: true },
        email: { type: String, required: true },
        nicho: { type: Array, required: true },
        categoria: { type: String,required: true },
        endereço: { type: Object, required: true },
        descricao: { type: String ,required: true},
        youLiked: { type: Boolean }
    }
)

const empreendedoras = mongoose.model("empreendedoras", empreendedoraSchema);

module.exports = empreendedoras;