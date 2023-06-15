import mongoose from "mongoose";
const cliente = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        name: { type: String, required: true },
        address: { type: String, required: true },
    })


export default mongoose.model("Clientes", cliente)

