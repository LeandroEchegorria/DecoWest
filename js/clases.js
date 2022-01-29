class Articulo { 
    constructor (nombre, precio, id, image) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.vendido = false;
        this.id= id;
        this.image= image;
    };

};

class Carrito {
    constructor (nombre, precio, id, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.id= id;
        this.cantidad= cantidad;
    };
};
//para no tener que escribir tantas veces lo mismo:
function guardarStorage (clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
};

function obtenerStorage (clave) {
   const valor = JSON.parse(localStorage.getItem(clave));
   return valor;
};
let carritoCompra=[]; //array donde se guardara la compra del usuario

if (obtenerStorage('carrito')){
    //si ya hay algo en el carrito, lo trae.
    carritoCompra= obtenerStorage('carrito'); 
};

//declaracion de objetos de la clase Articulo
const articulo1= new Articulo ("cartuchera", 200, 1, "../img/cartuchera1.jpg");
const articulo2= new Articulo ("cuaderno 1", 350, 2, "../img/cuaderno1.jpg");
const articulo3= new Articulo ("set de mate", 700, 3, "../img/setmate1.jpg");
const articulo4= new Articulo ("sahumerio", 250 , 4, "../img/sahumeriosSagrada1.png");
const articulo5= new Articulo ("cuaderno 2", 400 ,5, "../img/cuaderno2.jpg");
const articulo6= new Articulo ("cuello auric.", 550 , 6, "../img/cuello1.png");
const articulo7= new Articulo ("lata", 750 , 7, "../img/lata1.png");
const articulo8= new Articulo ("mate no se lava", 650, 8,"../img/mateava1.png");
const articulo9= new Articulo ("sahumerio palo santo", 250, 9,"../img/sahumeriosSatya1.png");
const articulo10= new Articulo ("set matero", 750, 10,"../img/setmate2.jpg");

//declaracion de Array
const arrayArticulos= [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6 , articulo7, articulo8, articulo9, articulo10];

let botonPago= document.getElementById("botonPago");
    botonPago.addEventListener("click", pagar);

function pagar () {
    let padre = document.getElementsByTagName("aside");
    let pago= document.createElement("p");
    carritoCompra.forEach(articulo => precioTotal += articulo.precio * articulo.cantidad);
    console.log(`Precio total: ${precioTotal}`);
    pago.innerHTML = `<h4>Total:${precioTotal}</h4>`;
    console.log(precioTotal);
    padre[0].appendChild(pago);
    carritoCompra=[];
    localStorage.clear();



};

let idArticuloElegido;
let articuloElegido;
let precioTotal= 0;


function agregarAlCarrito (event) {
    console.log(event.target.id);
   
        idArticuloElegido= event.target.id;
        //verifica que el id elegido este en el array de articulos
        if (arrayArticulos.some(articulo => articulo.id === parseInt(idArticuloElegido))){
        
            if (carritoCompra.some(articulo => articulo.id === parseInt(idArticuloElegido))){ //articulo esta en el carrito
                console.log("esta en el carrito");
                const articuloElegido = carritoCompra.find(articulo => articulo.id === parseInt(idArticuloElegido));
                articuloElegido.cantidad++;  
                guardarStorage('carrito', carritoCompra);
                
            } else { //el articulo no esta en el carrito 
                console.log("no esta en carrito");
                const articuloElegido= arrayArticulos.find(articulo => articulo.id === parseInt(idArticuloElegido));
                const articulo = new Carrito (articuloElegido.nombre, articuloElegido.precio, articuloElegido.id, 1);
                carritoCompra.push(articulo);
                guardarStorage('carrito', carritoCompra);
            } ;    
        } else {
            console.log("Nro no valido");
        };
        
    actualizarCarrito();
}; 

function actualizarCarrito() {  
    //Reinicia el espacio visual del carrito
    let borra = document.getElementById("items");
    borra.innerHTML=`
                        <tr>
                            <th>Item</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                        </tr>
                    `; 
    
    //recorro el carrito para imprimir los items en él
    carritoCompra.forEach(articulo=> {
        let tabla = document.getElementById("items"); 
        let item = document.createElement("tr");
        item.id=`${articulo.id}`;
        item.className="articuloCarrito";
        item.innerHTML = `<td>${articulo.nombre}</td>\n
                    <td>${articulo.cantidad}</td>
                    <td>$ ${articulo.precio}</td>
                    <td>$${articulo.cantidad*articulo.precio}</td>
                    `;
        tabla.appendChild (item);
    
    });
};
