$(document).ready(function(){

    /* 
        PETICION SIMPLE CON AJAX
    */

    /* $.ajax('../social.html', {
        success: function(respuesta){
            $('.lateral').append($(respuesta));
        }
    }); */

    /* 
        UTILIZANDO GET
    */

    $.get('../social.html', function(respuesta){
        $('.lateral').append($(respuesta));
    });

    /* 
        UTILIZANDO JSON
    */

    /* $.getJSON("https://randomuser.me/api/?results=50")
        .then(function (respuesta){
            //Insertar cada avatar del usuario ficticio en el DOM

            respuesta.results.forEach(function(persona) {
                $('<img>')
                .attr('src', persona.picture.thumbnail)
                .appendTo('.contenido');
            });

        }); */
    
    $.ajax('../social.html', {
        success: function(respuesta, status, request){
            $('.lateral').append($(respuesta));
        },
        error: function(request, tipoError, mensaje){
            console.error(arguments);
        },
        complete: function(request, status){
            console.info(arguments);
        }
    });

    /* 
        LIBRO DE VISITAS
    */

    $('form').on('submit', function(evt){
        evt.preventDefault();

        $.ajax('url',{
            type        : 'POST',
            dataType    : 'json',
            data        : {
                'nombre' : $('#nombre').val(),
                'mensaje' : $('#mensaje').val(),
            }
        }).then(function(respuesta){
            console.log(respuesta);

            $('form').children('ol').prepend($(`
                <li>
                    ${respuesta.nombre} - <small>${respuesta.fecha.weekday}</small>
                    ${respuesta.mensaje}
                </li>
                `
            ))
        });

    });
});