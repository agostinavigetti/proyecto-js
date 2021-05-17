function seccionFormulario(){

    $('.alert').remove(); //para que no se repita la alerta 


    var nombre=$('#nombre').val(),
        mail=$('#mail').val(),
        escribe=$('#escribe').val();


        if(nombre==""  || nombre==null){

            colorAlerta("nombre");
            alertaError("Campo obligatorio");
            return false;
        }

        if(mail=="" || mail==null){

            colorAlerta("mail");
            alertaError("Campo obligatorio");
            return false;
        } 

        if(escribe=="" || escribe==null){

            colorAlerta("escribe");
            alertaError("Campo obligatorio");
            return false;
        } 

        $(alert("Datos completos")).submit();
        return true;
}

$('input').focus(function(){
    $('.alert').remove();
    colorError('nombre');
    colorError('mail');
    colorError('escribe');
}); 


function colorError(dato){
    $("#" + dato).css({
        border:"1px solid #999"
    });
}

function colorAlerta(dato){
    $('#' + dato).css({
        border: "1px solid red"
    });
}

function alertaError(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}
