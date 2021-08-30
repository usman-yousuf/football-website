// $(document).ready(function() {
//     $(".navbar-light .dmenu").hover(
//         function() {
//             $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
//         },
//         function() {
//             $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
//         }
//     );
// });



document.addEventListener('DOMContentLoaded', function() {

    $(`.button_click-s`).click(function() {
        let img = $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src');

        img = img == 'assets/images/arrow_down.svg' ? 'assets/images/arrow_up.svg' : (img == 'assets/images/arrow_up.svg' ? 'assets/images/arrow_down.svg' : 'assets/images/arrow_up.svg');

        $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src', img);
        console.log(img);
    });

    let chat_icon = document.getElementById("chat_icon-d");
    chat_icon.addEventListener("click", changeImg);

    function changeImg() {
        var img = this.src;

        if (img.indexOf("bot_chat.svg") != -1) {
            this.src = "assets/images/close_chat.svg";
        } else {
            this.src = "assets/images/bot_chat.svg";
        }

        var show_chat = document.getElementById("wrapper-d");
        if (show_chat.classList.contains("d-none")) {
            show_chat.classList.remove("d-none");
            show_chat.classList.add("d-block");
        } else {
            show_chat.classList.remove("d-block");
            show_chat.classList.add("d-none");
        }
    }

    let rating_slider = document.getElementsByClassName("ratig_slider-s");
    Array.from(rating_slider).forEach(elm => {
        console.log("sdkj");
        let rating_value = document.getElementById("ability-d");
        rating_value.innerHTML = elm.value;
        elm.oninput = function() {
            rating_value.innerHTML = this.value;
        }
    });

});

// ------ For game invitation switch modals ----->
$("#switch_to_select_date-d").click(function() {
    $("#accept_invitation_modal-d").modal('hide');
    $("#select_date_modal-d").modal('show');
});
$(`#cal`).click(function() {
    window.location.href = "hire_Players.html";
});

/**  --------------- jquery of switch modals for new phone number ----------- */

// ------ For verify code to phone update switch modals ----->
$("#switch_to_phone_verify_code-d").click(function() {
    $("#update_phone_num_modal-d").modal('hide');
    $("#num_verification_modal-d").modal('show');
});
// $(`#cal`).click(function() {
//     window.location.href = "hire_Players.html";
// });

// ------ For enter new phone verify code switch modals ----->
$("#switch_to_new_phone_modal-d").click(function() {
    $("#num_verification_modal-d").modal('hide');
    $("#new_num_modal-d").modal('show');
});

// ------ For success new phone switch modals ----->
$("#phone_success_modal-d").click(function() {
    $("#new_num_modal-d").modal('hide');
    $("#success_phone_num_modal-d").modal('show');
});

/**  --------------- jquery of switch modals for new phone number ----------- */


/**  --------------- jquery of switch modals for new email ----------- */

// ------For enter verify code to update email switch modals ----->
$("#switch_to_email_verify_code_modal-d").click(function() {
    $("#update_email_modal-d").modal('hide');
    $("#email_verification_modal-d").modal('show');
});

// ------For enter new email switch modals ----->
$("#switch_to_new_email_modal-d").click(function() {
    $("#email_verification_modal-d").modal('hide');
    $("#new_email_modal-d").modal('show');
});


// ------ For success new email switch modals ----->
$("#email_success_modal-d").click(function() {
    $("#new_email_modal-d").modal('hide');
    $("#success_email_modal-d").modal('show');
});

/**  --------------- jquery of switch modals for new email ----------- */


/**  --------------- jquery of switch modals for new password ----------- */

// ------For enter verify code to update password switch modals ----->
$("#switch_to_password_verify_code_modal-d").click(function() {
    $("#update_password_modal-d").modal('hide');
    $("#password_verification_modal-d").modal('show');
});

// ------For enter new password switch modals ----->
$("#switch_to_new_password_modal-d").click(function() {
    $("#password_verification_modal-d").modal('hide');
    $("#new_password_modal-d").modal('show');
});

// ------ For success new password switch modals ----->
$("#password_success_modal-d").click(function() {
    $("#new_password_modal-d").modal('hide');
    $("#success_password_modal-d").modal('show');
});

/**  --------------- jquery of switch modals for new password ----------- */