function pedirDatos(){
    class Usuario {
        constructor (nombre, edad){
            this.nombre= nombre.toUpperCase();
            this.edad= parseInt(edad);
        };
        imprimir() {
            console.log("El usuario se llama: "+this.nombre+", y tiene "+this.edad+" años");
        }
    };
    
    const usuario1= new Usuario (prompt("Ingresa tu nombre"), parseInt (prompt("¿Cuantos años tenes?")));
        
    nacido=2021-usuario1.edad;
    let msg="";
    if (usuario1.edad >= 21) {
        msg=(" eres mayor de edad");
    } else if (usuario1.edad <21){
        msg=(" no eres mayor de edad");
    } else 
    msg=("Edad ingresada no es correcta");
    alert("Naciste en el año " + nacido);
    alert(msg);
 
    usuario1.imprimir();
    console.log("Gracias por participar", usuario1.nombre);

};


function comprar (){
    let articulo= parseInt(prompt ("¿Qué articulo desea comprar? 1-Cartuchera ($200); 2-Cuaderno ($350); 3-Set Mate ($700); 4-Sahumerios ($250)"));
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