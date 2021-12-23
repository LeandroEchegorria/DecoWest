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

function comprar (){
    let articulo= parseInt(prompt ("¿Qué articulo desea comprar? 1-Cartuchera; 2-Cuaderno; 3-Set Mate; 4-Sahumerios"));
    console.log("Articulo = ", articulo);
    let presupuesto=parseFloat(prompt("Ingrese su presupuesto:"));
    let pago='';
    switch (articulo){
        case 1: {
            pago = 200;
            if (pago<=presupuesto){
                alert("Operación permitida - Tiene dinero suficiente");
                console.log("Operación permitida - Tiene dinero suficiente");
            } else alert("Operación denegada - No tiene dinero suficiente");
            break;
        }
        case 2: {
            pago = 350;
            if (pago<=presupuesto){
                alert("Operación permitida - Tiene dinero suficiente");
                console.log("Operación permitida - Tiene dinero suficiente");
            } else alert("Operación denegada");
            break;
        }
        case 3: {
            pago = 700;
            if (pago<=presupuesto){
                alert("Operación permitida - Tiene dinero suficiente");
                console.log("Operación permitida - Tiene dinero suficiente");
            } else alert("Operación denegada - No tiene dinero suficiente");
            break;
        }
        case 4: {
            pago= 250;
            if (pago<=presupuesto){
                alert("Operación permitida - Tiene dinero suficiente");
                console.log("Operación permitida - Tiene dinero suficiente");
            } else alert("Operación denegada - No tiene dinero suficiente");
            break
        }
        default:
            alert("Ingrese una opción válida!");
            break;
    }
    return (
        console.log("El articulo cuesta :",pago)
    )
};

function pagar(pago){
    let modo= parseInt(prompt("¿Cómo desea pagar? (1-Efectivo, 2-Crédito o 3-Débito)"));
    console.log(modo);
    switch (modo){
        case 1: 
            pago=pago*0.85;
            alert("Monto a pagar: ",pago);
            console.log("Monto a pagar: ",pago);
            break;
        
        case 2: 
            pago=pago*1.1;
            alert("Monto a pagar: ",pago);
            console.log("Monto a pagar: ",pago);
            break;
        
        case 3: 
            pago=pago*1;
            alert("Monto a pagar: ",pago);
            console.log("Monto a pagar: ",pago);
            break;
        default:
            console.log("Ingrese una opción correcta");
            break;
    };
};


while (ok =="s" || ok =="S" || ok=="si" || ok=="SI" || ok=="Si") {
     pedirDatos();
     comprar();
     pagar(pago);
}; 

console.log("Gracias por visitar nuestra web");