const nombre= document.querySelector("#nombre");
const numero= document.querySelector("#numero");
const btnAgregar= document.querySelector("#btn_agregar");

btnAgregar.addEventListener("click", function(){
    window.location.href= `/agregar/${nombre.value}/${numero.value}`
});