
$(document).ready( function() {
 
  var datosCovid = [];
  var options = {
      animationEnabled: true,
      theme: "light2",
      title: {
          text: "Casos Positivos COVID durante toda la pandemia"
      },
      axisX: {
          title: "Fecha",
          valueFormatString: "YYYY MM DD"
      },
      axisY: {
          title: "Casos Positivos",
          titleFontSize: 24,
      },
      data: [{
          type: "spline", //change it to line, area, bar, pie, etc
          legendText: "Try Resizing with the handle to the bottom right",
          showInLegend: true,
          dataPoints: datosCovid
      }]
  };
  $.ajax({
      type: "GET",
      url: "https://api.covidtracking.com/v1/us/daily.json",
      dataType: "json",
      success: function(datos) {
          console.log(datos);
          let datosAPI = datos;
          console.log(datosAPI);
          for (var iterador=0;iterador<datosAPI.length;iterador++){

              datosCovid.push({
                  x: new Date(datosAPI[iterador].dateChecked),
                  y: datosAPI[iterador].onVentilatorCurrently,
              });
           
          }
          console.log(datosCovid);
          $("#contenedor").CanvasJSChart(options);
      }
  });

});






/*

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

*/

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


