$(document).ready(function () {


    $("#error").hide();

    $("#login").submit(function () {
        var mensaje = "";
        if ($("#email").val().trim().length == 0) {

            mensaje = "Ingrese su email";
        }
        if ($("#password").val().trim().length == 0) {

            mensaje = "Ingrese su contraseña";
        }


        if (mensaje != "") {
            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();

        }
    });
});

