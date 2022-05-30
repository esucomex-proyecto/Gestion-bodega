$(document).ready(function(){
    //Creamos una validacion simple
    //primero creamos un parrafo para mostrar el mensaje
    //ahora ocultaremos el div para que solo se vea cuando hay un error

    $("#error").hide();
    //ahora validaremos el formulario para enviar los datos
    $("#formulario").submit(function(){
        var mensaje =""; //almacenará el texto de las validaciones
    if ($("#nombre").val().trim().length==0){
    //validamos que el nombre no esté en blanco
    mensaje ="El nombre esta en blanco";
    }
    if ($("#email").val().trim().length==0){
        //validamos que el email no esté en blanco
    mensaje ="El email esta en blanco";
    }

    if ($("#telefono").val().trim().length==0){
        //validamos que el email no esté en blanco
    mensaje ="El telefono esta en blanco";
    }

    if ($("#txtarea").val().trim().length==0){
        
    mensaje ="El mensaje esta en blanco";
    }

    if(mensaje !="")
    {
        $("#error").html(mensaje);//permite mostrar el mesaje de error en el div
        $("#error").show();// permite mostrar el div
        event.preventDefault();//evitamos el envio de los datos

    }
});
});

//