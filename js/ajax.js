function ejecutarAjax(){
    

    const ajaxRequest = new XMLHttpRequest();

// 0 Peticion no ha sido inicializada
// 1 Peticion ha sido establecida
// 2 Peticion ha sido enviada
// 3 Peticion esta siendo procesada
// 4 Peticion ha sido finalizada
//200 La peticion a sido exitosa

    ajaxRequest.onreadystatechange = function(){
        console.log('hi');
        if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
            document.getElementById('info').innerHTML = ajaxRequest.responseText;
        }
    }
    ajaxRequest.open('GET','documento.txt',true);
    ajaxRequest.send();
}

//let persona = document.getElementById("infoJson");

function ajax_get_json(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let datos = JSON.parse(xmlhttp.responseText);

            if(persona.innerHTML == ""){
                //ciclo para recorrer el json
                for(var dato in datos){
                    persona.innerHTML += dato + ": " + datos[dato] + "<br>";
                }
            }
        }
    }

    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function ajax_array_json(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let datos = JSON.parse(xmlhttp.responseText);

            /* if(persona.innerHTML == ""){
                //ciclo para recorrer el json
                for(var dato in datos){
                    persona.innerHTML += datos[dato].nombre + " " + datos[dato].apellido + " tiene " + datos[dato].edad + " años" + "<hr>";
                }
            } */
        }
    }

    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

//let persona = document.getElementById("nestedJson");

/* function ajax_nested_json(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let datos = JSON.parse(xmlhttp.responseText);

            if(persona.innerHTML == ""){
                //ciclo para recorrer el primer JSON
                for(var dato in datos){
                    persona.innerHTML += "<br><h5>" + dato + "</h5><br>";

                    let anidados = datos[dato];

                    //Recorrer el segundo JSON
                    for(let anidado in anidados ){
                        persona.innerHTML += anidado + ": " + anidados[anidado] + "<br>";
                    }
                }
            }
        }
    }

    xmlhttp.open("GET", "nested.json", true);
    xmlhttp.send();
} */

let edadM = document.getElementById("youngerAge");

function ajax_youngerAge_json(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //se guarda en datos una cadena que se convierte en un objeto json
            let datos = JSON.parse(xmlhttp.responseText);

            //funcion que se encarga de encontrar la edad menor
            let edadMenor = findYoungerAge(datos);
            
            if(edadM.innerHTML == ""){
                edadM.innerHTML += "La edad menor es: " + edadMenor;
            }
        }
    }

    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function findYoungerAge(objJson){
    //
    let $array = [];

    //iterar el objeto json
    for(let i in objJson){
        let persona = objJson[i];
        //extraer la edad de cada persona
        $array.push(persona.edad);
    }

    //a traves de ciclo FOR
    let $edadMenor = $array[0];
    
    /* for(let j=0; j<$array.length; j++){
        if($array[j] < $edadMenor){
            $edadMenor = $array[j];
        }
    } */

    //Usando la funcion Math
    $edadMenor = Math.min.apply(null, $array);

    return $edadMenor;
}

