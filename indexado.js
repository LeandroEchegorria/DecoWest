alert ("Bienvenido a DECOWEST, a continuación te mostraremos nuestro catálogo");

let ok=prompt("Estas de acuerdo?(s/n)");

function pedirDatos(){
    let nombre=prompt("Ingresa tu nombre");

    let edad= parseInt (prompt("¿Cuantos años tenes?"));
     nacido=2021-edad;
    let msg="";
    if (edad >= 21) {
        msg=(" eres mayor de edad");
    } else if (edad <21){
        msg=(" no eres mayor de edad");
    } else 
    msg=("Edad ingresada no es correcta");
    alert("Naciste en el año " + nacido);
    alert(nombre + msg);
    console.log("Sus datos ingresados son:");
    console.log("Nombre:",nombre);
    console.log("Edad:",edad);
    console.log("Gracias por participar", nombre);


};

let pago=0;
function comprar (){
    let articulo= parseInt(prompt ("¿Qué articulo desea comprar? 1-Cartuchera ($200); 2-Cuaderno ($350); 3-Set Mate ($700); 4-Sahumerios ($250"));
    console.log("Articulo = ", articulo);   
    switch (articulo){
        case 1: 
            pago = 200;
            break;

        case 2: 
            pago = 350;
            break;

        case 3:
            pago = 700;
            break;

        case 4: 
            pago= 250;
            break;

        default:
            alert("Ingrese una opción válida!");
            break;
    };

};

function pagar(pago){
    let modo= parseInt(prompt("¿Cómo desea pagar? (1-Efectivo, 2-Crédito o 3-Débito)"));
    console.log(modo);
    switch (modo){
        case 1: 
           return pago=pago*0.85;
            break;
        
        case 2: 
            return pago=pago*1.1;
            break;
        
        case 3: 
            return pago ;
            break;
        default:
            console.log("Ingrese una opción correcta");
            break;
    }; console.log(pago);
};


while (ok =="s" || ok =="S" || ok=="si" || ok=="SI" || ok=="Si") {
     pedirDatos();
     comprar();
     let presupuesto=parseFloat(prompt("Ingrese su presupuesto:"));
     if (pago<=presupuesto){
        alert("Operación permitida - Tiene dinero suficiente");
        console.log("Operación permitida - Tiene dinero suficiente");
        pagar(pago);
        let resto= presupuesto-pago;
        alert("Monto a pagar: " + pago + " . Le sobran: " + resto);
        console.log("Monto a pagar: " + pago);

    } else alert("Operación denegada - No tiene dinero suficiente");

     ok=prompt("Continuar?(s/n)");
}; 

console.log("Gracias por visitar nuestra web");
alert ("Gracias por visitar nuestra web");