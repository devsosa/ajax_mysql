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

