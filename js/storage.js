<script src="../js/storage.js"></script> //esto pegarlo en el html


class Jugadores {
    constructor (nombre,altura,posicion) {
        this.nombre = nombre.toUpperCase();
        this.altura = parseInt(altura);
        this.posicion = posicion;
        };
    
    mostrar() {
        console.log("Nombre "+this.nombre + ". Altura: "+ this.altura + ". Posición: "+ this.posicion);
    };
};
const jugador1= new Jugadores ("Leandro Echegorria",180,"Base/Escolta");
const jugador2= new Jugadores ("Juan Perez",193,"Pivot");
const jugador3= new Jugadores ("Sebastian",178,"Base/Escolta");
const jugador4= new Jugadores ("Facundo Flores",191,"Ala-Pivot");
const jugador5= new Jugadores ("Santi Scalabrini",182,"Alero");

const players = [jugador1,jugador2,jugador3,jugador4,jugador5];

function enviarJSON(jugador){
    let i= prompt("Desea cargar el session Storage?").toLowerCase()
    if (i== "si" || i=="s") {
        const enJSON =JSON.stringify(jugador);
        sessionStorage.setItem(jugador.nombre, enJSON); //se guarda temporalmente, al cerrar navegador se borra

        let padre = document.getElementById("container");
        let player = document.createElement("ul");
        player.innerHTML = `<li>${jugador.nombre}</li>
                            <p>${jugador.altura}cm</p>
                            <p>${jugador.posicion}</p>`;
        padre.appendChild (player);
        console.log("Se cargó",jugador.nombre);

    } else console.log("No se cargó",jugador.nombre);

};


enviarJSON(jugador1);
enviarJSON(jugador2);
enviarJSON(jugador3);
enviarJSON(jugador4);
enviarJSON(jugador5);




