import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProductos)


// app.get("/prueba",(req,res)=>{
//     res.send("esto es una prueba de una peticioon get")
// })

// app.delete("/prueba",(req,res)=>{
//    res.send("aqui tendria q borrar un dato")
// })

export default router;