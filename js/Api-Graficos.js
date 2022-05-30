

/*
$(document).ready(function(){
$("#et").mouseover(function(){
  $("#et").css("background-image", "url(https://www.brokering.cl/wp-content/uploads/2021/11/call-center.fw_.png"), width="250",height="250";
function regresarImagen(){
  $("#et").css("background-image","url(./Img/contacto2.png");
}
});
});

  $(document).ready(function(){
    $("#boton").on("click", function()
    {
       $("p").text(" Hola mundo 2");
    })
  });
*/
/*
$(document).ready(function (inicio){
function inicio(){
$("#ft").mouseenter(cambiarImagen);
$("#ft").mouseleave(regresarImagen);
}

function cambiarImagen(){
  $("#ft").css("background-image","url(https://www.brokering.cl/wp-content/uploads/2021/11/call-center.fw_.png");
}

function regresarImagen(){
  $("#ft").css("background-image","url(./Img/contacto2.png");
}
});*/





/*
$(document).ready(function(){
$("#et").mouseover(function(){
  $("#et").css("Text");
});
}); */






$(document).ready(function () {

  var datosDolar = []; //Arreglo
  var option ={
      animationEnable:true, //Tendra una animacion el grafico
      theme:"light2",
      title:{ text:"El valor del Dolar del ultimo mes"},//Titulo del Grafico
      axisX:{ valueFormtString:"DD MM YYY"},//Le doy un formate y le quiero en dia mes y año
      axisY:{title:"Precio Dolar",titleFontSize:24,},
      data:[{
          type:"spline",
          dataPoints:datosDolar //Mostrara el arreglo DatosDolar
      }]
    
  
  }
 
  
      $.ajax({
          type: "GET",
          url: "https://mindicador.cl/api/dolar",
          dataType: "json", //El tipo de datos que quiero traer 
          succes: function (datosD) {
              //console.log(datosD);
              let datosApi = datosD.serie;
             // console.log(datosApi);
              for (var iterador=0;iterador<datosApi.length;iterador++){
                 datosDolar,push({
                     x: new Date(datosApi[iterador].fecha),
                     y: datosApi[iterador].valor,
                 });
                 
                  // console.log(datosApi[iterador].fecha);
                  //console.log(datosApi[iterador].valor);
              }
              $("#contenedor".CanvasJSChart(option));
  
          }
        
      });
  
  }); 