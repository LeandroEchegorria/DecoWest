//JQUERY
function verContacto() {

    $("#formulario").prepend (`<h3>Formulario de contacto</h3>
        <p><label>Nombre Completo:</label></p>
        <input type="text" name="nombre" id="name"/>
            
        <p><label>Email:</label></p>
        <input type="text" name="email" id="email"/>

        <p><label>Telefono:</label></p>            
        <input type="text" name="telefono" id="phone"/>
            
        <p><label>Comentario:</label></p>
        <p><textarea name="mensaje" id="comment"></textarea></p>
        <input type="submit" value="Enviar"/>`
    );
};
verContacto();


$("#formulario").submit(function(e){
    console.log(e);
    e.preventDefault();
    verificaForm(); 
});

function verificaForm () {
    let name= $("#name")[0].value;
    let email= $("#email")[0].value;
    let phone= $("#phone")[0].value;
    
    if (name.length == 0) {
        $("#formulario").append(`<h6>Campo "Nombre" obligatorio</h6>`);
    } else if (email.length == 0) {
            $("#formulario").append(`<h6>Campo "Email" obligatorio</h6>`);
        } else if (phone.length == 0) {
                $("#formulario").append(`<h6>Campo "Telefono" obligatorio</h6>`);
            } else {$("#formulario").append(`<h4>Formulario enviado</h4>`);
            console.log("formulario enviado");
        };    
};
