import mongoose from "mongoose";
const dbConection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CN) 
        console.log('base de datos conectada');
    } catch(error){
        throw new Error ('error al iniciar base de datos')
    }
}

export{
    dbConection
}


