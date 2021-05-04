async function enviar(){
    var nombre = document.getElementById("nombre").value;
    var ap = document.getElementById("apellidopaterno").value;
    var am = document.getElementById("apellidomaterno").value;
    var password = document.getElementById("password").value;
    let n = {
        "nombre" : nombre,
        "apellido_paterno" : ap,
        "apellido_materno" : am
    }

    let res = await axios.post('https://tartan-juicy-burst.glitch.me/agregarprofesor', n);

    let data = res.data;
    console.log(data);
    document.getElementById("salida").innerHTML = data.message;
}