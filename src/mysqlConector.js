//Importar mysql
const mysql= require("mysql");
//Crear conexión
const conector= mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
})

const conectar= () => {
    conector.connect(err => {
        if(err) throw err
        console.log("conectado");
    });
}

const agregarContacto= (nombre, numero) => {
    const sql= `INSERT INTO agenda (nombre_contacto, telefono_contacto) VALUES ("${nombre}", ${numero})`
     conector.query(sql, function(err, result, field){
        if(err) throw err
        console.log(result);
    });
}

const mostrarContactos= () => {
    const sql= `SELECT * FROM agenda`
     conector.query(sql, function(err, result, field){
        if(err) throw err
        console.log(result);
        return result;
    });
}

const eliminarContactos= (id) => {
    const sql= `DELETE * FROM agenda where id= ${id}`
     conector.query(sql, function(err, result, field){
        if(err) throw err
        console.log(result);
    });
}

const actualizarContacto= (id, nombre, numero) => {
    const sql= `UPDATE agenda SET (nombre_contacto= ${nombre}, telefono_contacto= ${numero}) WHERE id= ${id}`
     conector.query(sql, function(err, result, field){
        if(err) throw err
        console.log(result);
    });
}

module.exports= {conectar, agregarContacto, mostrarContactos, eliminarContactos, actualizarContacto}