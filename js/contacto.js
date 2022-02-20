//JQUERY
function verContacto() {

    $("#formulario").prepend (`<h3>Formulario de contacto</h3>
        <p><label class="name">Nombre Completo:</label></p>
        <input type="text" name="nombre" id="name" placeholder="Nombre Apellido"/>
            
        <p><label class="email">Email:</label></p>
        <input type="text" name="email" id="email" placeholder="juan@gmail.com"/>

        <p><label  class="phone">Telefono:</label></p>            
        <input type="text" name="telefono" id="phone" placeholder="11-2222-3333"/>
            
        <p><label class="comment">Comentario:</label></p>
        <p><textarea name="mensaje" id="comment" placeholder="Ingrese su comentario"></textarea></p>
        <input type="submit" value="Enviar"/>`
    );
};
verContacto();


$("#formulario").submit(function(e){
    e.preventDefault();
    verificaForm(); 
});

function verificaForm () {
    let name= $("#name")[0].value;
    let email= $("#email")[0].value;
    let phone= $("#phone")[0].value;

    if (name.length < 3) {
        $("#formulario").append(`<h6 class="error">Campo "Nombre" obligatorio</h6>`);
    } else if (email.length == 0) {
            $("#formulario").append(`<h6 class="error">Campo "Email" obligatorio</h6>`);
        } else if (phone.length == 0) {
                $("#formulario").append(`<h6 class="error">Campo "Telefono" obligatorio</h6>`);
            } else {$("#formulario").append(`<h4 class="error">Formulario enviado</h4>`);
            console.log("formulario enviado");
            
            };    

};
//Animaciones
$('#contenedor').hide().slideUp(1500).slideDown(1500);
$('#mapa').hide().delay(2000).slideDown(1500);
$('#name').hide().delay(600).slideDown(1500);
$('.name').hide().delay(600).slideDown(1500);
$('#email').hide().delay(1200).slideDown(1500);
$('.email').hide().delay(1200).slideDown(1500);
$('#phone').hide().delay(1800).slideDown(1500);
$('.phone').hide().delay(1800).slideDown(1500);
$('#comment').hide().delay(2400).slideDown(1500);
$('.comment').hide().delay(2400).slideDown(1500);
$('input').hide().delay(2400).slideDown(1500);
$('textarea').hide().delay(2400).slideDown(1500);
$("#app").css({
                "color": "#ff0000",
                "font-size":"10px"
            });





