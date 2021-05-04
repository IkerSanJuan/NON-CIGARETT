/*
<div class="info">
        <div class="titulo">Contacto con los Administradores</div>
        <form id="contact-form">
            <input type="hidden" name="contact_number">
            <label>Nombre</label>
            <input type="text" name="user_name">
            <label>Email</label>
            <input type="email" name="user_email">
            <label>Mensaje</label>
            <textarea name="message"></textarea>
            <button type="submit" value="Send" onclick="alerta()">Enviar</button>
        </form>
        <p id="salida"></p>
    </div>
*/
/* var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba); */


    
    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" 
    + "qwertyuioasdfghjklzxcvbnm";

    var checkStr = document.getElementByName("user_name").value;

    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for( var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;
        
        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo Nombre");
        document.getElementByName("user_name").focus();
        return false;
    }
  
        var txt = document.getElementByName("user_email").value;

    //expresion regular
    //algo@algo.com
    //algo@algo.algo.com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?"":" no ") + " valido");
    return b.test(txt);
    



        function validarFormularioText(evObject) {

   


            evObject.preventDefault();
            
            var todoCorrecto = true;
            
            var formulario = document.getElementByName("message").value;
            
            for (var i=0; i<formulario.length; i++) {
            
                            if(formulario[i].type =='text') {
            
                                           if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
            
                                           alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
            
                                           todoCorrecto=false;
            
                                           }
            
                            }
            
                            }
            
            
                            
                        
            }