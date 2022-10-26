import Producto from "../models/producto"




export  const listarProductos = (req,res)=>{
    res.send("esto es una prueba de la peticion get")
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