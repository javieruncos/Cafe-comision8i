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
      check("imagen")
      .notEmpty()
      .withMessage("la url de la imagen es obligatoria")
      .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
      .withMessage("debe ingresar un url valida")
      ,
      check("categoria")
      .notEmpty()
      .withMessage("la categoria es obligatoria")
      .isIn(["Bebida fria","Bebida caliente","Dulce","Salado"])
      .withMessage("debe ingresar una categoria valida")
    ],
    crearProductos
  );
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(  [
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
    check("imagen")
    .notEmpty()
    .withMessage("la imagen es obligatoria")
    .isLength({min:30})
    .withMessage("la cantidad minima de caracteres es de 30 ")
    ,
    check("categoria")
    .notEmpty()
    .withMessage("la categoria es obligatoria")
  ],editarProducto)
  .delete(borrarProducto);

// app.get("/prueba",(req,res)=>{
//     res.send("esto es una prueba de una peticioon get")
// })

// app.delete("/prueba",(req,res)=>{
//    res.send("aqui tendria q borrar un dato")
// })

export default router;
