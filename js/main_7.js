/* jQuery es un motor de seleccion */
$(document).ready(function(){
    /* Seleccionar el primer p, se puede hacer de varias formas */
    //$('section.contenido p:first-of-type');
    $('.contenido').find('p').eq(2).css('background-color', 'yellow');

    /* 
    #### ENCADENAR METODOS Y RECORRER EL DOM
    */
    //$('.contenido').find('p').css('background-color','orange');
    $('.contenido').find('p').first().next().css('background-color','orange');

    /* 
    #### BUSCAR O RECORRER EL DOM ARRIBA Y ABAJO
    */
    let $parent = $('.lateral').find('span').last().parent();

    /* 
    parent: Selecciona el parent inmediato hacia arriba
    parents: Selecciona todos los parent hacia arriba
    */
    
    //$parent.css('border', '2px solid red');

    /* Hacia ABAJO
    children
    find
    */

    let $children = $('main').children('*');
    //$children.css('border', '2px solid green');
    /* $children.css({
        'transition'    : 'all 2s',
        'transform'     : 'rotate(180deg)'
    }); */

    /* 
    #### BEFORE & AFTER
    */

    let $enlace = $('<a href="#">Conocer mas gaton negros </a>');
    /* Añadir un enlace antes o despues del primer parrafo */
    $('.contenido').find('p').first().after($enlace);

    /* 
    #### Insertar dentro del elemento con PREPEND & APPEND
    */

    /* Añadir un enlace dentro del primer parrafo */
    //$('.contenido').find('p').first().prepend($enlace);
    $('.contenido').find('p').first().append($enlace);

    /* Quitar elemento REMOVE */
    /* Quitar el ultimo parrafo */
    //$('.contenido').find('p').last().remove();

    /* 
    #### INTERACTUANDO CON EL DOM
    ##Añadiendo un eventListener en cualquier elemento
    */

    $('.lateral').find('a').last().on('click', function(){
        //console.log('hola!');
        $('.contenido').children('p').css('color', 'gray');
    });
    
    $('.contenido').children('p').on('click', function(evento){
        evento.preventDefault();
        //console.log(this);

        /* Convertir this en objeto jQuery $(this) */
        $(this).css('color', 'white');
    });


});