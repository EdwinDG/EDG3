import mongoose from "mongoose";
const web = new mongoose.Schema(
    {

        url: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        topic_interest: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    })


export default mongoose.model("Webs", web)