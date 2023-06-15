import mongoose from "mongoose"; 
const admi = new mongoose.Schema(
    { name: { type: String, required: true},
      document: { type: String, required: true, unique: true},
       email: { type: String, required: true, unique: true},
       password: { type: String, required: true}, 
        //  createdAt: { type: Date, default: Date.now } 
    }) 
         
         
export default mongoose.model("Admis", admi)