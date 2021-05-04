var urlConsumo = "http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do";

function traeDatos(){
    axios.get(urlConsumo)
        .then(function (response) {
            // handle success

            console.log("respuesta string "+ JSON.stringify(response));
            //console.log("respupuesta data - features "+ JSON.stringify(response.data.features));
            //var f = response.data.features;
            /*f.forEach(function(d){
                //console.log(d.attributes.desc_ent + ", " + d.attributes.porcentaje);
                document.getElementById("salida").innerHTML += "<p>" + d.attributes.desc_ent + ", " + d.attributes.porcentaje + "</p>"
            });*/

        })
    /*
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });*/
}