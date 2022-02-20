class Articulo { 
    constructor (nombre, precio, id, image) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
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


//declaracion de Array
let arrayArticulos= [];

$.ajax({
    method: "GET",
    url: "../json/data.json",
    success: function (response, status) {
        if (status === 'success'){
            //genera articulos en tienda recorriendo el array response
            verMainShop(response);
                
            };
        }
        
});

let botonPago= document.getElementById("botonPago");
    botonPago.addEventListener("click", pagar);

function pagar () {
    let padre = document.getElementById("pago");
    padre.innerHTML =``;
    carritoCompra.forEach(articulo => precioTotal += articulo.precio * articulo.cantidad);
    padre.innerHTML = `<h4>Total:${precioTotal}</h4>`;
    carritoCompra=[];
    localStorage.clear();
    precioTotal=0;
    actualizarCarrito();
};

let idArticuloElegido;
let articuloElegido;
let precioTotal= 0;

function agregarAlCarrito (event) {
    $.ajax({
        method: "GET",
        url: "../json/data.json",
        success: function (response, status) {
            if (status === 'success'){
                idArticuloElegido= event.target.id;
                //verifica que el id elegido este en el array de articulos
                if (response.some(articulo => articulo.id === parseInt(idArticuloElegido))){
                
                    if (carritoCompra.some(articulo => articulo.id === parseInt(idArticuloElegido))){ //articulo esta en el carrito
                        const articuloElegido = carritoCompra.find(articulo => articulo.id === parseInt(idArticuloElegido));
                        articuloElegido.cantidad++;  
                        agregado();
                        guardarStorage('carrito', carritoCompra);
                        
                    } else { //el articulo no esta en el carrito 
                        const articuloElegido= response.find(articulo => articulo.id === parseInt(idArticuloElegido));
                        const articulo = new Carrito (articuloElegido.nombre, articuloElegido.precio, articuloElegido.id, 1);
                        carritoCompra.push(articulo);
                        agregado();
                        guardarStorage('carrito', carritoCompra);
                    } ;    
                } else { 
                       console.log("Nro no valido");
                        
                    }
                };
            actualizarCarrito();   
        }
    });  
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
        item.innerHTML = `<td>${articulo.nombre}</td>
                    <td>${articulo.cantidad}</td>
                    <td>$ ${articulo.precio}</td>
                    <td>$${articulo.cantidad*articulo.precio}</td>
                    <td><i id="${articulo.nombre}" class="fa-solid fa-circle-xmark"></i></td>
                    `;
        tabla.appendChild (item);
    });
    //crea el event listener de cada articulo del carrito
    carritoCompra.forEach(articulo=> {
        $(`#${articulo.nombre}`).click(quitarCarrito);
    });
};
function agregado(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1000
      })
};
function quitado(){
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Producto removido',
        showConfirmButton: false,
        timer: 1200
      })
};

function quitarCarrito (event) {
    nombreArticuloElegido= event.target.id;

    //verifica que el id elegido este en el array de articulos
    if (carritoCompra.some(articulo => articulo.nombre === nombreArticuloElegido)){ 
        const articuloElegido = carritoCompra.find(articulo => articulo.nombre === nombreArticuloElegido);
        articuloElegido.cantidad--; 
        if (articuloElegido.cantidad < 1) {
            let index= carritoCompra.findIndex((articulo)=> articulo.nombre === nombreArticuloElegido);
            carritoCompra.splice(index,1);
        };
        quitado();
        guardarStorage('carrito', carritoCompra);
    };           
    actualizarCarrito();
};

                
        
            
