function verHeader(){
    let cabecera = document.getElementsByTagName("header"); 
    let item = document.createElement("div");
    item.innerHTML = `    <div id="logo_central">
                    <img src="/img/logo.jpg" alt="">
                    </div>
                    <div class="carrito">
                        <a href="/pages/tienda.html">Comprar
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </div>`;
    cabecera[0].appendChild (item);
};
verHeader();

function verNav(){
    let barra = document.getElementsByTagName("nav"); 
    let item = document.createElement("div");
    item.innerHTML = `        
    <ul>
        <li id="home"><a class="activo" href="/index.html">HOME</a></li>
        <li id="shop"><a href="/pages/tienda.html">TIENDA</a></li>
        <li id="contact"><a href="/pages/contacto.html">CONTACTO</a></li>
        <li id="news"><a href="/pages/novedades.html">NOVEDADES</a></li>
    </ul>  `;
    barra[0].appendChild (item);

    
};
verNav();

function verFooter(){
    let foot = document.getElementsByTagName("footer"); 
    let item = document.createElement("div");
    item.innerHTML = `        
    <div class="FB">
        <a href="https://www.facebook.com/Deco-West-105390824933699" target="_blank"><i class="fab fa-facebook" 
        style="color: white; font-size: 40px"></i></a>
    </div>
    <div class="IG">
        <a href="https://www.instagram.com/decowest.ok/?hl=es" target="_blank"><i class="fab fa-instagram"
        style="color: white; font-size: 40px; "></i></a> 
    </div>                
    <p>Av.Piovanno 5500, Moreno, Buenos Aires, Argentina</p>
    <p>Web Design by Leandro Echegorría</p>
    `;
    foot[0].appendChild (item);
};
verFooter();


