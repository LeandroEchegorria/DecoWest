//archivo js que genera la tienda
function verMainShop(){
    let shop = document.getElementsByClassName("shop"); 
    let item = document.createElement("div");
    item.innerHTML = `        
    <div class="contenedor">
            <div class="articulo">
                <img src="/img/cartuchera1.jpg" alt="">
                <button id="art01">Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/cuaderno1.jpg" alt="">
                <button id="art02" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/setmate1.jpg" alt="">
                <button id="art03" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/sahumeriosSatya1.png" alt="">
                <button id="art04" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/cuaderno2.jpg" alt="">
                <button id="art05" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/cuello1.png" alt="">
                <button id="art06" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/lata1.png" alt="">
                <button id="art07" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/mateava1.png" alt="">
                <button id="art08" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="/img/sahumeriosSagrada1.png" alt="">
                <button id="art09" >Comprar</button>
            </div>
            <div class="articulo">
                <img src="../img/setmate2.jpg" alt="">
                <button id="art10" >Comprar</button>
            </div>
    </div>
`;
    shop[0].appendChild (item);
};
verMainShop();



function verAsideShop(){
    let aside = document.getElementsByTagName("aside"); 
    let item = document.createElement("div");
    item.id="carroCompras";
    item.innerHTML = `<div id="carroCompras"></div>`;
    aside[0].appendChild (item);
};
verAsideShop();


