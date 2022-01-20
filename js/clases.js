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
const articulo1= new Articulo ("cartuchera", 200, 1, "../img/cartuchera1.jpg");
const articulo2= new Articulo ("cuaderno", 350, 2);
const articulo3= new Articulo ("set de mate", 700, 3);
const articulo4= new Articulo ("sahumerio", 250 , 4);
const articulo5= new Articulo ("cuaderno", 400 ,5);
const articulo6= new Articulo ("cuello auriculares", 550 , 6);
const articulo7= new Articulo ("lata", 750 , 7);
const articulo8= new Articulo ("mate no se lava", 650, 8);
const articulo9= new Articulo ("sahumerio palo santo", 250, 9);
const articulo10= new Articulo ("set matero", 750, 10);

//declaracion de Array
const arrayArticulos= [articulo1, articulo2, articulo3, articulo4];

let carritoCompra=[]; //array donde se guardara la compra del usuario
let suma = 0; 
function agregar(articulo){
    const enJSON = JSON.stringify(articulo); 
    localStorage.setItem(articulo.nombre,enJSON);  
    let padre = document.getElementById("carroCompras"); 
    let item = document.createElement("ul");
    item.className = "article";
    item.innerHTML = `<li>${articulo.nombre}</li>
                        <p>$ ${articulo.precio}</p>`;
    padre.appendChild (item);
           
    carritoCompra.push(articulo);
    console.log("Contenido del Carrito de Compras:", carritoCompra);
    
    for (const carrito of carritoCompra) {
        console.log("Precio del item:" + carrito.precio)
        console.log("");
    };
    
};

function pagar () {
    for (const carrito of carritoCompra) {
        suma += carrito.precio;
    };
    let padre = document.getElementsByTagName("main");
    let pago= document.createElement("p");
    pago.innerHTML = `<h4>Total:${suma}</h4>`;
    console.log(suma);
    padre[0].appendChild(pago);

    carritoCompra=[];

    verAsideShop();
    let reset= document.getElementById("carroCompras");
    reset.parentNode.removeChild(reset);
    let total=document.createElement("p");
    total.innerHTML = `<h4>Total:${suma}</h4>`;
    

};

const aumentos = arrayArticulos.map(articulo => articulo.precio +=50);
console.log("Aumento de $50: ",aumentos);

const filtro = arrayArticulos.filter(articulo=> articulo.precio < 400);
console.log("Articulos con precios menores de 400:",filtro);

//se agregan los eventos de la tienda en la forma correcta
let product1= document.getElementById ("art01");
product1.addEventListener("click",function(){agregar(articulo1)});

let product2= document.getElementById ("art02");
product2.addEventListener("click",function(){agregar(articulo2)});

let product3= document.getElementById ("art03");
product3.addEventListener("click",function(){agregar(articulo3)});

let product4= document.getElementById ("art04");
product4.addEventListener("click",function(){agregar(articulo4)});

let product5= document.getElementById ("art05");
product5.addEventListener("click",function(){agregar(articulo5)});

let product6= document.getElementById ("art06");
product6.addEventListener("click",function(){agregar(articulo6)});

let product7= document.getElementById ("art07");
product7.addEventListener("click",function(){agregar(articulo7)});

let product8= document.getElementById ("art08");
product8.addEventListener("click",function(){agregar(articulo8)});

let product9= document.getElementById ("art09");
product9.addEventListener("click",function(){agregar(articulo9)});

let product10= document.getElementById ("art10");
product10.addEventListener("click",function(){agregar(articulo10)});