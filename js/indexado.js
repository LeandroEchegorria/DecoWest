alert ("Bienvenido a DECOWEST, a continuación te mostraremos nuestro catálogo");

let ok=prompt("Estas de acuerdo?(s/n)").toLowerCase();

let pago=0;

while (ok =="s" || ok=="si") {
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

     ok=prompt("Continuar?(s/n)").toLowerCase();
}; 

console.log("Gracias por visitar nuestra web");
alert ("Gracias por visitar nuestra web");

