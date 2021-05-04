import emailjs from 'emailjs-com';
function alerta(){
	
	if(document.getElementsByName("user-name") ==""||document.getElementsByName("user-email") ==""||document.getElementsByName("message") ==""){
        alert("Por favor llene todos los campos");
        formulario.actual.focus();
    return false;
    }
    alert("Se ha enviado correctamente. Pronto lo atenderemos");
}



const templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

emailjs.send('<service_qom1tbe>','<SmartCipherTemplate>', templateParams, '<user_rApsFSg5zhiAwg2dpRuXU>')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});

var templateParametros = {
    nombre: 'Gerardo',
    comentario: 'Buen programa'
};

emailjs.send('<service_qom1tbe>','<SmartCipherTemplate>', templateParametros)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});

    emailjs.sendForm('<service_qom1tbe>','<SmartCipherTemplate>', '#myForm')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});



	function validarn(e){
		var teclado = (document.all)?e.keyCode:e.which;
		if(teclado == 8)return true;
	
		var patron = /[a-z\d ]/;
	
		var prueba = String.fromCharCode(teclado);
		return patron.test(prueba);
	}



	function validar(user_email){
		
	
		var txt = document.getElementsByName(user_email);
	
		//expresion regular
		//algo@algo.com
		//algo@algo.algo.com
		var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
	
		alert("Email" + (b.test(txt)?"":" no ") + " valido");
		return b.test(txt);
	
	
	}

	