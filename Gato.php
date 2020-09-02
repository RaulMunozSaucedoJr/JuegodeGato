<!-- 

I M P O R T A N T E 
I M P O R T A N T E
I M P O R T A N T E
I M P O R T A N T E

Elementos utilizados en las distintas etiquetas:

1. onload == Para cargar la función principal de nuestro script.

2. onClick == Sirve para que al realizar click en un determinado campo de la tabla,
se ejecute la función en cuestión.

3.javascript: iniciarJuego() == Sirve para mandar a llamar la función iniciarJuego y sus
caracteristicas propias de la función.

4. Se utilizo un div tabla para conjuntar todos los componentes de la tabla y poder
aplicar estilos tanto al "contenedor" que es el <div class="tabla"></div>.

5. Se utilizo la clase "campo" para poder hacer uso de las distintas funciones que se encuentran
dentro de el script.

6. Se utilizo la caracteristicas id="campo#" para poder hacer uso de las distintas funciones que se 
encuentran dentro de el script.

-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="#" />

    <!-- Recursos utilizados para el juego -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../Gato.css">
    <script src="../Gato.js"></script>
    <!--------------------------------------->

    <!-- Titulo de Pestaña -->
    <title>Juego GATO</title>
    <!----------------------->

</head>

<body onload="iniciarJuego();" id="cuerpo_tablero">

    <!-- DIV "contenedor" de la tabla en la cual se crea el tablero del juego -->
    <div class="tabla">

        <!--
        Aqui se muestran los siguientes mensajes:
        1. Empieza el jugador con el turno de X´s.
        2. Al realizar click en un campo utilizado se muestra el mensaje:
            2.1 "Escoge otra casilla".
        3. Al momento de que alguno de los jugadores ganan la partida se muestra el siguiente mensaje:
            3.1 "Jugador X || O has ganado, por favor reinicia la partida".
        4. Al alternar los turnos, se muestra de quien es turno para llenar un campo con su debida X||O.
        -->
        <div title="mensaje" id="mensaje" class="mensaje"></div>
        <small><b>Refrescar pagina para quitar colores Rojo y Verde.</b></small>

        <table id="tablero">
            <tr>
                <td class="campo" id="campo1" onClick="siguienteMovimiento(this)"></td>
                <td class="campo" id="campo2" onClick="siguienteMovimiento(this)"></td>
                <td class="campo" id="campo3" onClick="siguienteMovimiento(this)"></td>
            </tr>
            <tr>
                <td class="campo" id="campo4" onClick="siguienteMovimiento(this)" onClick="cambiarColor(this)"></td>
                <td class="campo" id="campo5" onClick="siguienteMovimiento(this)"></td>
                <td class="campo" id="campo6" onClick="siguienteMovimiento(this)"></td>
            </tr>
            <tr>
                <td class="campo" id="campo7" onClick="siguienteMovimiento(this)"></td>
                <td class="campo" id="campo8" onClick="siguienteMovimiento(this)"></td>
                <td class="campo" id="campo9" onClick="siguienteMovimiento(this)"></td>
            </tr>
        </table>

        <!-- Boton para reiniciar la partida/juego -->
        <h1><a href="javascript: iniciarJuego();" class="btn btn3" id="reiniciar">Reinciar Juego</a></h1>
        <!------------------------------------------->

    </div>

</body>

</html>