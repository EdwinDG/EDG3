import express from "express";
const index = express();
import * as dotenv from "dotenv"
dotenv.config()
import { dbConection } from "./config.js";
import Cliente from "../mongo/models/cliente.js"
import Web from "../mongo/models/web.js"
import Anuncio from "../mongo/models/anuncio.js"
import Admi from "../mongo/models/admi.js"
import Referencias from "../mongo/models/refencias.js"

index.use(express.json());
const conectiondb = async()=>{
    await dbConection()
}

conectiondb()

index.post("/cliente", async function (req, res) {
    const {email,phone, name, address} = req.body;
    const cliente = new Cliente({email,phone, name, address})
    await cliente.save()
    res.json('se guardo cliente') 
  });

  index.post("/web", async function (req, res) {
    const {url,name, topic_interest} = req.body;
    const web = new Web({url,name, topic_interest})
    await web.save()
    res.json('se guardo web') 
  });

  index.post("/anuncio", async function (req, res) {
    const {cliente,name,type,title,content, category,price} = req.body;
    const anuncio = new Anuncio({cliente,name,type,title,content, category,price})
    await anuncio.save()
    res.json('se guardo anuncio') 
  });

  index.post("/admi", async function (req, res) {
    const {name,document,email,password} = req.body;
    const admi = new Admi({name,document,email,password})
    await admi.save()
    res.json('se guardo admi') 
  });
  
  index.post("/referencias", async function (req, res) {
    const {web,anuncio} = req.body;
    const refe = new Referencias({web,anuncio})
    await refe.save()
    res.json('se guardo referencias') 
  });

  index.get("/prueba", async function(req, res){
    const lis = await Cliente.find()
    res.json(lis)
  })

  index.get("/palabra", async function( req, res){
    const { search }= req.query
    const anun = await Anuncio.find(
      {
        name: new RegExp(search, "i")
      }
    )
    res.json(anun)
  })

  index.get("/popular", async function (req, res){
    const anuni = await Anuncio.find().populate("cliente")
    res.json(anuni)
  })
  index.get("/prueba2", async function(req, res){
    const lis = await Referencias.find().populate("web").populate("anuncio",["name","type"])
    res.json(lis)
  })





  
// EL PUERTO NO DEBE SER IGUAL AL DE MONGOOOOOOOOOOOOO
  index.listen(process.env.PORT, () =>{
      console.log(`escuchando puerto ${process.env.PORT}`);
  })