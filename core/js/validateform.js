$(document).ready(function () {

    function init() {
        document.getElementById("form").reset();
      }
    window.onload = init;

    //Siempre que salgamos de un campo de texto, se chequeará esta función

    $("#form input").keyup(function () {
        var form = $(this).parents("#form");
        var check = checkCampos(form);
        console.log(check);
        if (check) {
            $("#btn-submit").prop("disabled", false);
        } else {
            $("#btn-submit").prop("disabled", true);
        }
    });

    //Función para comprobar los campos de texto
    function checkCampos(form) {
        var camposRellenados = true;
        form.find(".form-control").each(function () {
            var $this = $(this);
            if ($this.val().length <= 0) {
                camposRellenados = false;
                return false;
            }
        });
        if (camposRellenados == false) {
            $('.bg-btn').css('background-image', "url('assets/img/btn-disabled.svg')")
            return false;
        } else {
            $('.bg-btn').css('background-image', "url('assets/img/btn-login.svg')")
            return true;
        }
    }
    $("#btn-submit").on('click', function (event) {
        event.preventDefault()
        window.location.href = 'juego.html';
    })
    
});