import mongoose from "mongoose";
const anuncio = new mongoose.Schema(
    {
        cliente:{type:mongoose.Schema.Types.ObjectId, ref:'Clientes', required: true},
        name: { type: String, required: true },
        type: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        //  createdAt: { type: Date, default: Date.now } 
    })


export default mongoose.model("Anuncio", anuncio)

