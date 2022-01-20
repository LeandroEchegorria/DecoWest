//archivo que genera la vista main del index.html
function verMainIndex(){
    let ppal = document.getElementsByClassName("index"); 
    let item = document.createElement("div");
    item.innerHTML = `        
    <div class="presentacion">
        <h1>Bienvenido a Deco West</h1> 
        <h3>🖐🏼Somos Lore y Juan</h3>
        <p>🎁 Deco y bazar
            📌 Moreno, Buenos Aires
            🚗 Realizamos entregas
            💲 Mercado pago, transferencia y efectivo
        </p>
        <img src="/img/logo1.jpg" style="width: 50%; height: 50%;" alt="">
    </div>`;
    ppal[0].appendChild (item);
};
verMainIndex();