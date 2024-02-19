$(document).ready(function() {
    // Cambiar el color de fondo del encabezado al hacer clic en él
    $('header').click(function() {
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generamos un color aleatorio en formato hexadecimal
      $(this).css('background-color', randomColor); // Cambiamos el color de fondo del encabezado
    });
  });
  