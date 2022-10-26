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

export  const crearProductos = async(req,res)=>{
    try{
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