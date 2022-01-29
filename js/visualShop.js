//archivo js que genera la tienda
function verMainShop(){
    let contenedorArticulos = document.getElementsByClassName("muestraArticulos"); 
    arrayArticulos.forEach(articulo=>{
        let item = document.createElement("div");
        item.setAttribute("class", "articulo");
        item.setAttribute("id", articulo.id);
        item.innerHTML = `
            <img src=${articulo.image} alt="">
            <h5>${articulo.nombre}</h5>            
            <p>$${articulo.precio}</p>   
        `;

        let boton=document.createElement("button");
        boton.setAttribute('id', articulo.id);
        boton.innerText= 'Comprar';
        boton.addEventListener("click", agregarAlCarrito);

        for (let i=0; i<contenedorArticulos.length; i++){
            contenedorArticulos[i].appendChild (item);
            item.appendChild (boton);
        };

    })
};
verMainShop();

function verAsideShop(){
    let aside = document.getElementsByTagName("aside"); 
    let item = document.createElement("div");
    item.id="carroCompras";
   
    aside[0].appendChild (item);
};
verAsideShop(); 
