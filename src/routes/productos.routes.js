import { Router } from "express";
import { borrarProducto, crearProductos, editarProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProductos);
router.route("/productos/:id")
.get(obtenerProductos)
.put(editarProducto)
.delete(borrarProducto)


// app.get("/prueba",(req,res)=>{
//     res.send("esto es una prueba de una peticioon get")
// })

// app.delete("/prueba",(req,res)=>{
//    res.send("aqui tendria q borrar un dato")
// })

export default router;