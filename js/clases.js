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
const articulo1= new Articulo ("Cartuchera", 200, 001);
const articulo2= new Articulo ("Cuaderno", 350, 002);
const articulo3= new Articulo ("Set de Mate", 700, 003);
const articulo4= new Articulo ("Sahumerio", 250 , 004);

//declaracion de Array
const arrayArticulos= [articulo1, articulo2, articulo3, articulo4];

console.log("A continuación se muestran los artículos:");
for (const articulo of arrayArticulos){  
    console.log(articulo.nombre);
    console.log(articulo.precio);
};
    

