class Articulo { 
    constructor (nombre, precio, id) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.vendido = false;
        this.id= id;
    };
    mostrar() {
        console.log("ID "+this.id + ". Artículo: "+ this.nombre + ". Precio: "+ this.precio);
    };
    vender() {
        this.vendido = true;
        console.log("Articulo: "+ this.nombre + ". Vendido:"+this.vendido);
    }
};

//declaracion de objetos de la clase Articulo
const articulo1= new Articulo ("cartuchera", 200, 001);
const articulo2= new Articulo ("cuaderno", 350, 002);
const articulo3= new Articulo ("set de mate", 700, 003);
const articulo4= new Articulo ("sahumerio", 250 , 004);

//declaracion de Array
const arrayArticulos= [articulo1, articulo2, articulo3, articulo4];

const carritoCompra=[];
let suma = 0; 
function agregar(articulo){
    const enJSON = JSON.stringify(articulo); 
    localStorage.setItem(articulo.nombre,enJSON);  
    let padre = document.getElementById("carroCompras"); 
    let item = document.createElement("ul");
    item.innerHTML = `<li>${articulo.nombre}</li>
                        <p>$ ${articulo.precio}</p>`;
    padre.appendChild (item);
           
    carritoCompra.push(articulo);
    console.log(carritoCompra);
    
    for (const carrito of carritoCompra) {
/*         console.log(carrito.nombre);
        console.log(carrito.precio); */
        suma = suma + carrito.precio;
        console.log("Precio del item:" + carrito.precio)
        console.log("A pagar:"+suma);
        console.log("");
    };
    return suma;
};


console.log("suma",suma);
function pagar () {
    let padre = document.getElementById("pago");
    let pago= document.createElement("p");
    pago.innerHTML = `<h4>Total:${suma}</h4>`;
    padre.appendChild(pago);
    
    let btnPadre= document.getElementById("boton"); //borra el boton de pago
    btnPadre.parentNode.removeChild(btnPadre);
};

const aumentos = arrayArticulos.map(articulo => articulo.precio +=50);
console.log("Aumento de $50: ",aumentos);

const filtro = arrayArticulos.filter(articulo=> articulo.precio < 400);
console.log("Articulos con precios menores de 400:",filtro);