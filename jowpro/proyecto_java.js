setInterval(real,1000);
                    
                    function real(){
                      var hora = new Date(); 
                        var tiempo=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
                                            

document.getElementById("hora").innerHTML=tiempo;
                        
                    }




$(document).ready(inicio);

function inicio(){
    
    $("#texto").on("click",function(){
        
        
        $("#parrafo").hide();
       
    })
    $("#entrar").on("click",function(){
       $("#parrafo").show();
        
        
    })
    
    $("#enviar").on("click",function(){
        var texto = $("#nombre").val();
        
        
        $("#usuario").append(texto);
    })

}






document.getElementById("entrar").addEventListener("click",hacer);

function hacer(){
    
    
    
    var nombre = document.getElementById("texto");
    
    if(nombre.value==""){
        error(nombre,"El campo esta vacio");
        return false;
        
    }
       
    else if(!isNaN(nombre.value)){
        error(nombre,"El buscador no reconoce numero");
        return false;
        
    }
    else if(nombre.value=="css")
    {

        location.href="css.html";
        $("input").val("")
        
    }
    
       else if(nombre.value==" que es css")
    {
        location.href="css.html";
        
    }
       else if(nombre.value==" caracteristicas de css")
    {
        location.href="css.html";
        
    }
       else if(nombre.value==" ventajas de css")
    {
        location.href="css.html";
        
    }
       else if(nombre.value==" desventajas css")
    {
        location.href="css.html";
        
    }
      else if(nombre.value=="html")
    {
        location.href="index.html";
    }
     else if(nombre.value==" que es html")
    {
        location.href="index.html";
    }
     else if(nombre.value=="caracteristicas de html")
    {
        location.href="index.html";
    }
     else if(nombre.value==" vantajas de html")
    {
        location.href="index.html";
    }
     else if(nombre.value==" desventajas de html")
    {
        location.href="index.html";
    }
     else if(nombre.value==" componente de html")
    {
        location.href="index.html";
    }
    
      else if(nombre.value=="javascript")
    {
        location.href="javascript.html";
    }
        else if(nombre.value==" que es javascript")
    {
        location.href="javascript.html";
    }
        else if(nombre.value=="caracteristica de javascript")
    {
        location.href="javascript.html";
    }
        else if(nombre.value==" ventajas de javascript")
    {
        location.href="javascript.html";
    }
        else if(nombre.value=="desvantajas de javascript")
    {
        location.href="javascript.html";
    }
        else if(nombre.value==" componente de javascript")
    {
        location.href="javascript.html";
    }
      else if(nombre.value=="php")
    {
        location.href="php.html";
    }
    else if(nombre.value=="que es php")
    {
        location.href="php.html";
    }
    else if(nombre.value=="caracteristica de php")
    {
        location.href="php.html";
    }
    else if(nombre.value==" ventajas de php")
    {
        location.href="php.html";
    }
    else if(nombre.value=="desventajas de php")
    {
        location.href="php.html";
    }
    else if(nombre.value=="componente de php")
    {
        location.href="php.html";
    }
      else if(nombre.value=="lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    
      else if(nombre.value=="que son lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    
      else if(nombre.value=="para que sirven las lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    
      else if(nombre.value=="caracteristicas de las lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    
      else if(nombre.value=="ventajas de las lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    
      else if(nombre.value=="desventajas de las lineas de codigos")
    {
        location.href="linea_de_codigo.html";
    }
    else{
       
      
        error(nombre,"No hay resultado de su busqueda ");
         return false;
    }
       
    
        function error(elemento,mensaje){
            
            $("#parrafo").html(mensaje);
        
            
        }
      
}














