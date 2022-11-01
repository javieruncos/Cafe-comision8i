import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/cafe-c8i"; // base de datos local
const url = "mongodb+srv://JavierSrfc:Riversrfc1010@cluster0.3kg4e1g.mongodb.net/test";
// const url = "mongodb://127.0.0.1:27017/cafe-c8i";
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('bd conectada')
})