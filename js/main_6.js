/* jQuery es un motor de seleccion */
$(document).ready(function(){
    /* ready es el metodo abreviaod para inlializar todo el DOM */
    
    /* Seleccionar la imagen del side */
    $('aside > img').fadeOut(5000);

    /* Buscar span */
    $('span').css('color','green');

    /* Selectores multiples */
    //$('a, span, p').slideToggle();

    /* Seleccionar el primer parrafo */
    $('p:even').css({
        'font-weight' : 'bolt',
        'color' : 'goldenrod',
    });
});