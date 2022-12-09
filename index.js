const express= require("express");
const {conectar, agregarContacto}= require("./src/mysqlConector.js");

const app= express();

const PUERTO= 8000;
app.listen(PUERTO, function(){
    console.log(`Aplicación iniciada en el puerto ${PUERTO}`);
    conectar();
});

//Configuraciónd el pug
app.set("views", "./vistas");
// app.set("view engine", "pug");

//Configuración de archivos estáticos
app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));

app.get("/", function(req, res){
    es.send("Aplicación iniciada");
    // res.render("index", {titulo: "Aplicación contactos", dato:"cualquier dato"});
});

app.get("/agregar/:nombre/:numero", function(req, res){
    let nombre= req.params.nombre;
    let numero= req.params.numero;
     
    agregarContacto(nombre, numero);
    res.redirect("/");
    console.log(nombre, numero);
});