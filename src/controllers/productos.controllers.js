import { validationResult } from "express-validator";
import Producto from "../models/producto"




export  const listarProductos = async(req,res)=>{
    try{
    //  buscar en la base de datos la collection de productos
    const productos = await Producto.find();
    // envio la respuesta
    res.status(200).json({productos})
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"error al buscar productos"
        })
    }
}

export  const obtenerProductos = async(req,res)=>{
    try{
    //  extraer el id de la ruta
    console.log(req.params.id)
    // buscar en la bd el producto q coincida con el id
     const productoBuscado = await Producto.findById(req.params.id);
     res.status(200).json(productoBuscado)
    // responder con el producto encontrado
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"error no se encontro el producto buscado"
        })
    }
}

export  const crearProductos = async(req,res)=>{
    try{
        // trabajar con el resultado de la validacion
        const errors = validationResult(req);
        // errors.isEmpty() true si esta bien false: si hay un error
        if(!errors.isEmpty()){
          return  res.status(400).json({
                errores : errors.array()
            })
        }
        console.log(req.body)
        // tomar el body y validarlo 
        // si es correcto guardar en la base de datos
        const productoNuevo = new Producto(req.body)
        await productoNuevo.save();
        res.status(201).json({
            mensaje:"El producto fue creado exitosamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"ocurrio un error al intentar agregar un producto"
        })
    }
}



export const editarProducto = async(req,res)=>{
    try{
        // rxtraer el parametro de la ruta y los datos del objeto
        //validar solicitar a la BD actualizar el producto
        await Producto.findByIdAndUpdate(req.params.id,req.body)
        // respondemos al frontend
        res.status(200).json({
            mensaje:"el producto pudo ser editaddo correctamente"
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            mensaje:"error al intentar editar un producto"
        })
    }
}

export const borrarProducto = async(req,res)=>{
    try{
    //    buscar el id de la ruta y luego pedir a la BD borrar producto
    await Producto.findByIdAndDelete(req.params.id);
    // eviar respuesta al frontend
    res.status(200).json({
        mensaje:"el producto se borro exitosamente"
    })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:"error al intentar borrar un producto"
        })
    }
}