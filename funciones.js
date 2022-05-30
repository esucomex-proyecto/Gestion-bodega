$(document).ready(function(){
    

    $("#error").hide();
  
    $("#formulario").submit(function(){
        var mensaje =""; 
    if ($("#nombre").val().trim().length==0){
    
    mensaje ="Ingrese su nombre";
    }
    if ($("#email").val().trim().length==0){
        
    mensaje ="Ingrese su email";
    }

    if ($("#telefono").val().trim().length==0){
        
    mensaje =" ingrese su numero de telefono";
    }

    if ($("#txtarea").val().trim().length==0){

    mensaje ="Escriba un mensaje";
    }

    if(mensaje !="")
    {
        $("#error").html(mensaje);
        $("#error").show();
        event.preventDefault();

    }
});
});
