import { Router } from "express";
import {
  borrarProducto,
  crearProductos,
  editarProducto,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({min:2,max:100})
        .withMessage("El nombre del producto debe tener 2 y 100 caracteres"),
      check("precio")
      .notEmpty()
      .withMessage("el precio es obligatorio")
      .isNumeric()
      .withMessage("el precio debe ser un numero")
      .custom((value)=>{
         if(value >= 1 && value <= 10000){
            return true
         }else{
            throw new Error("el precio debe estar entre 1 y 10000")
         }
      })
      ,
    ],
    crearProductos
  );
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProducto)
  .delete(borrarProducto);

// app.get("/prueba",(req,res)=>{
//     res.send("esto es una prueba de una peticioon get")
// })

// app.delete("/prueba",(req,res)=>{
//    res.send("aqui tendria q borrar un dato")
// })

export default router;
