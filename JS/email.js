function enviar(){
    var templateParams = {
        name: document.getElementById("nombre").value,
        AP: document.getElementById("AP").value,
        AM: document.getElementById("AM").value
    };

    emailjs.send('service_qom1tbe', 'SmartCipherTemplate', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("salida").innerHTML = "Enviado"
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("salida").innerHTML = "error al enviar"
        });
}