import mongoose from "mongoose";
const referencia = new mongoose.Schema(
    {
        web:{type:mongoose.Schema.Types.ObjectId, ref:'Webs', required: true},
        anuncio:{type:mongoose.Schema.Types.ObjectId, ref:'Anuncios', required: true},
    })

export default mongoose.model("Referencias", referencia)