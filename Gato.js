/**
I M P O R T A N T E
I M P O R T A N T E
I M P O R T A N T E
I M P O R T A N T E

Función para inicializar el juego de tres en raya o gato.

Explicación de función iniciarJuego() y las demás funciones:

1. loop for, es utilizado para ver cuantos cuadrantes/campos del tablero se encuentran ocupados y poder reiniciar/limpiar
el tablero en caso de querer hacerlo.

2. Dentro del for se encuentra la funcion limpiarTablero(cuadrante) la cual se le pasa el parametro (cuadrante) para que en base
a el loop for se limpie el tablero y/o cuadrantes utilizados.

3. document => Es una variable global declarada la cual puede ser utilizado en las distintas funciones que se encuentran dentro 
de el script.

4. .turno => Se le puede considerar tipo arreglo al cual se le pasa información de la variable document. Dicha información puede variar,
pues depende de que función se encuentre utilizando la variable (document.turno = "X").

5. ganador => Se le puede considerar tipo arreglo el cual se inicializa "NULL" y se le pasa información de la variable document. Dicha información puede variar,
pues depende de que función se encuentre utilizando la variable en cuestión.

6.mostrarMensaje => Es una función en la cual se muestran los distintos mensajes que proveé el script "Gato.js" en cada una de sus
funciones que lo conforman.

7.mostrarMensaje(document.turno + "Empieza") => Muestra la información que se encuentra por default en la variable (document.turno = "X")
por lo que la función mostrarMesaje "concatena" dicha información con el texto "Empieza". Por lo que el mensaje inicial queda de la siguiente
forma:

"X Empieza" justo arriba del tablero.

8. function mostrarMensaje(mensaje) => Dicha función muestra los distintos mensajes de las distintas funciones de el script,
pasandole el parametro(mensaje).

9. innerText => Es para mostrar el mensaje en texto dentro de nuestro HTML. Más especificamente dentro del <div class="mensaje"></div>.

10. function siguienteMovimiento(campo) => Dicha función junto con el parametro(campo) es utilizada para verificar que el jugador que 
haya completado/ganado la partida se le muestre el mensaje:

"X´s || O´s ya ganaste. Favor de reiniciar la partida".

Así mismo se muestra otro mensaje al realizar click sobre una casilla/campo ya utilizado al jugador "X´s||O´s".

11. Dentro de la función siguienteMovimiento se encuentra un ciclo condicional if en el cual se utilizan lasc variables globales:

document.ganador && document.turno, así mismo se utilizan las funciones mostrarMensaje, cambiarTurnos.

11.1 Si el documento.ganador es diferente de valor nulo, se le muestra el mensaje al jugador ganador en cuestión.

11.2 Si el parametro campo es igual a "" se compara conla variable document,turno y se llama a la función cambiarTurnos().

11.3 En caso de elegir una casilla ocupada se manda a llamar a la función mostrarMensaje y se muestra el mensaje "Elija otra casilla".

12. Dentro de la función cambiarTurnos se encuentra un ciclo condicional que dentro de esta se manda a llamar la funcion verificarGanador
y a la variable document.turno.

12.1 Al mandar a llamar a la función mostrarMensaje se muestra el mensaje:

  Felicidades y se concatena la información que tenga en ese momento la variable document.turno + ganaste la partida.

12.2 Si la primer condicional no se cumple, se va a el else if donde se utiliza la variable document.turno y la información que esta
tenga.

12.3 En caso de cumplirse alguna de las dos primera condiciones, se va directo al else y muestra el mensaje:

  Es + se concatena la informacion de la variable document.turno + ´s turno.

13. La función verificarGanador(movimiento) junto con el parametro movimiento y la variable resultado inicializada en false, son las 
encargadas de verificar las diferentes combinaciones de las distintas celdas/campos del tablero. Así mismo, junto con la funcion
verificarColumna son los que ven las diferentes posibilidades de ganar la partida.

14. La funcion verificarColumna y los parametros (a,b,c,movimiento) junto con la variable resultado son las encargadas de verificar dentro
de todas las posibles combinaciones de celdas/campos junto con la funcion verificarGanador se encargan de ver quien gana la partida. 
Dentro de esta funcion se hace uso de otra funcion llamada obtenerCampo a la cual se le "concatena" un parametro de la funcion verificarColumna.

15. La función obtenerCampo y su parametro (numero) realizan la función de mandar a llamar a los elementos/etiquetas de nuestro Gato.php mediante
su ID "campo" al cual se le concatena el parametro (numero) => campo1.

16. La función limpiarTablero realiza la función de limpiar los campos de nuestro tablero.

**/

function iniciarJuego() {

  for (var cuadrante = 1; cuadrante <= 9; cuadrante++) {
    limpiarTablero(cuadrante);
  }
  document.turno = "X";
  if (Math.random() < 0.5) {
    document.turno = "O";
  }
  document.ganador = null;
  mostrarMensaje(document.turno + " Empieza")
}

function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").innerText = mensaje;
}

function siguienteMovimiento(campo) {
  if (document.ganador != null) {
    mostrarMensaje(document.turno + ", ya ganaste!. Favor de reiniciar la partida")
  } else if (campo.innerText == "") {
    campo.innerText = document.turno;
    cambiarTurnos();
  } else {
    mostrarMensaje("Elija otra casilla")
  }
}

function cambiarTurnos() {
  if (verificarGanador(document.turno)) {
    mostrarMensaje("Felicidades " + document.turno + " Ganaste!");
    document.ganador = document.turno;
  } else
  if (verificarCampo()) {
    mostrarMensaje("¡Empate!. ¡Reinicia el Juego!.");
  } else if (document.turno == "X") {
    $('table').on('click', 'td', function () {
      $(this).css('backgroundColor', 'green');
    });
    document.turno = "O";
    mostrarMensaje("Es el turno de " + document.turno + "'s turno!");
  } else {
    document.turno = "X";
    $('table').on('click', 'td', function () {
      $(this).css('backgroundColor', 'red');
    });
    mostrarMensaje("Es el turno de " + document.turno + "'s turno!");
  }
}

function verificarGanador(movimiento) {
  var resultado = false;
  if (verificarColumna(1, 2, 3, movimiento) || verificarColumna(4, 5, 6, movimiento) || verificarColumna(7, 8, 9, movimiento) ||
    verificarColumna(1, 4, 7, movimiento) || verificarColumna(2, 5, 8, movimiento) || verificarColumna(3, 6, 9, movimiento) ||
    verificarColumna(1, 5, 9, movimiento) || verificarColumna(3, 5, 7, movimiento)) {
    resultado = true;
  }
  return resultado
}

function verificarColumna(a, b, c, movimiento) {
  var resultado = false;
  if (obtenerCampo(a) == movimiento && obtenerCampo(b) == movimiento && obtenerCampo(c) == movimiento) {
    resultado = true;
  }
  return resultado;
}

function verificarCampo() {
  for (var cuadro = 1; cuadro < 10; cuadro++) {
    if (obtenerCampo(cuadro) == "")
      return false;
  }
  return true;
}

function obtenerCampo(numero) {
  return document.getElementById("campo" + numero).innerText;
}

function limpiarTablero(numero) {
  document.getElementById("campo" + numero).innerText = "";
}