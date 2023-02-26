function changecolor(elemento){
    //var click = event.target;
    //console.log(click.id);
    var col1 = document.getElementById("cuadro1"); // -> col3
    var col2 = document.getElementById("cuadro2"); // -> col4
    var col3 = document.getElementById("cuadro3"); // -> col1
    var col4 = document.getElementById("cuadro4"); // -> col2
    
    var estilo1 = window.getComputedStyle(col1);
    var estilo2 = window.getComputedStyle(col2);
    var estilo3 = window.getComputedStyle(col3);
    var estilo4 = window.getComputedStyle(col4);

    var fondo1 = estilo1.getPropertyValue("background-color");
    var fondo2 = estilo2.getPropertyValue("background-color");
    var fondo3 = estilo3.getPropertyValue("background-color");
    var fondo4 = estilo4.getPropertyValue("background-color");

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";

    if (elemento.id === "cuadro1") {
        col1.style.backgroundColor = color;
      } 
      else if (elemento.id === "cuadro2") {
        col2.style.backgroundColor = color;
      }
      else if (elemento.id === "cuadro3") {
        col3.style.backgroundColor = color;
      }
      else if (elemento.id === "cuadro4") {
        col4.style.backgroundColor = color;
      }
}