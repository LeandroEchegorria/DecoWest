//archivo que genera la vista main del index.html
function verMainIndex(){
    let ppal = document.getElementsByClassName("index"); 
    let item = document.createElement("div");
    item.innerHTML = `        
    <div class="presentacion">
        <h1>Bienvenido a Deco West</h1> 
        <h3>ðð¼Somos Lore y Juan</h3>
        <p>ð Deco y bazar
            ð Moreno, Buenos Aires
            ð Realizamos entregas
            ð² Mercado pago, transferencia y efectivo
        </p>
        <img src="/img/logo1.jpg" style="width: 50%; height: 50%;" alt="">
    </div>`;
    ppal[0].appendChild (item);
};
verMainIndex();