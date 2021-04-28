/* Utilizando Javascript */
let elemento = document.querySelector('h3');

/* let timeout = setTimeout(function(){
    elemento.innerHTML = 'Hola Carlitox';
}, 1000); */

/* Utlizando jQuery */
//console.log($);

let elemento2 = $('h3');

let timeout = setTimeout(function(){
    elemento2.text('Hola Xoxa');
}, 1000);

/* Escuchar Eventos desde javascript */
document.addEventListener('DOMContentLoaded', function(){
    //Escuchar todos los elementos del DOM
});

/* Capturar evento sobre enlace HTML */
let enlace = document.querySelector('a');
enlace.addEventListener('click', function(event){
    //prevenir el evento por defecto
    //event.preventDefault();
});

/* Buscar elementos en base a un selector */
let eleli = document.querySelectorAll('li');

eleli[0].addEventListener('click', function(){
    //console.log('Click');
});

/* Buscar en base a una clase */
let clase = document.getElementsByClassName('heading');
//console.log(clase);

/* buscar elemento pot tagname */
let tagName = document.getElementsByTagName('li');
//console.log(tagName[4]);

/* Buscar elementos por ID */
let eleId = document.getElementById('main');
//console.log(eleId);

/* 
#### MODIFICANDO LAS CLASES DESDE JAVASCRIPT
*/
let color = document.getElementById('texto');
//console.log(color.classList);
let boton = document.getElementById('cambiar');

boton.addEventListener('click', function(){
    //console.log('Click');
    //Comprobar si el elemento tiene una clase determinada
    if(!color.classList.contains('text-danger')){
        color.classList.add('text-danger');
        color.classList.remove('text-success');
    }else{
        color.classList.add('text-success');
        color.classList.remove('text-danger');
    }
});

//Funcion de JS para quitar y añadir clase
function toggleClass(elemento3, clase2){
    if(elemento3.classList.contains(clase2)){
        elemento3.classList.remove(clase2);
    }else{
        elemento3.classList.add(clase2)
    }
}

let cColor = document.querySelector('strong');

cColor.addEventListener('click', function(){
   toggleClass(this, 'text-secondary'); 
});

/* 
#### MANIPULAR ESTILOS CON JAVASCRIPT
*/

let eCaja = document.querySelector('#caja'),
//viendo los estilos de un elemento
estilos = getComputedStyle(eCaja, null);
//console.log(estilos)
/* dos formas de llamarlo */
//console.log(estilos.backgroundColor);
console.log(estilos['background-color']);
//console.log()

eCaja.style.backgroundColor = 'blue';
eCaja.style['border-radius'] = '135px';

//Añadiendo una transición
eCaja.classList.add('transicion');

//Varios estilos a la vez
eCaja.style.cssText += 'background-color: green; border-radius: 135px;';

