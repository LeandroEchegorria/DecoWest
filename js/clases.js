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

console.log("A continuación se muestran los artículos:");
for (const articulo of arrayArticulos){  
    console.log(articulo.nombre);
    console.log(articulo.precio);
};

const aumentos = arrayArticulos.map(articulo => articulo.precio +=50);
console.log("Aumento de $50: ",aumentos);

const buscarArticulo = arrayArticulos.find(articulo=> articulo.nombre===prompt("Ingrese articulo a buscar:").toUpperCase());
console.log("Articulo encontrado:",buscarArticulo);

const filtro = arrayArticulos.filter(articulo=> articulo.precio < 400);
console.log("Articulos con precios menores de 400:",filtro);