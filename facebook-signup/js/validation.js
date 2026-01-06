$(document).ready(function () {
    $("#signup").validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname:{
                required: true,
                minlength: 5,
            },

        },
        messages:{
            fname: {
                required: " please enter the first name" 
            }
        }

    } )
});