var urlTabaquismo = "https://services8.arcgis.com/7rTEsmPVkVyyRlIk/arcgis/rest/services/TABAQUISMO_2018ENSATU_INEGI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

function traeDatos()
{

    axios.get(urlTabaquismo)
        .then(function (response) {
            // handle success

            //console.log("respuesta string "+ JSON.stringify(response));
            //console.log("respupuesta data - features "+ JSON.stringify(response.data.features));
            var f = response.data.features;
            f.forEach(function(d){
                console.log(d.attributes.desc_ent + ", " + d.attributes.porcentaje);
                document.getElementById("salida").innerHTML += "<p>" + d.attributes.desc_ent + ", " + d.attributes.porcentaje + "</p>"
            });

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}