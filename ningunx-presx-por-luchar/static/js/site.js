$("#target").submit(function (event) {
    event.preventDefault();
    if (validateEmail($("input").first().val())) {
        var term = $(this).find("input[name='Email']").val(),
            URL = "https://api.telegram.org/bot5098125095:AAFect3yOX0rR_Gh7ciibaACVqja-ftquQg/sendMessage?chat_id=530576703&text=" + term
        var posting = $.post(URL);
        posting.done(function (data) {
            $("#alertLabel").text("Recibirás los nuevos posts").show().fadeOut(1000);
        });
        return;
    } else {
        $("#alertLabel").text("¡Inválido!").show().fadeOut(1000);
    }
});

function validateEmail(emailID) {
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        return false;
    }
    return (true);
}