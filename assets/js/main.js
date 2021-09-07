// Get the container element
// var Container = document.getElementById("nav_bar-d");

// Get all nav items with class="nav_link_active-d" inside the container

// var items = Container.getElementsByClassName("nav_link_active-d");

//loop for all nav link items to active them on click
$(document).ready(function() {
    // console.log('test');
    // console.log('window.location.hostname: ', (window.location.href.substring(window.location.href.lastIndexOf('/'))).replace('/', ''));

    // let url = (Window.location.href.substring(window.location.href.lastIndexOf('/'))).replace('/', '');
    // console.log('url: ', url);
    $(`a[href$="#"]`).addClass('active').addClass('change_color_of_nav_icon-s');


});

$(`.player_position_button-s`).click(function() {
    $(`.active_position-s`).removeClass(`active_position-s`).find('.child').addClass(`opacity_4-s`);
    $(this).addClass('active_position-s');
    $(this).find(`.opacity_4-s`).removeClass(`opacity_4-s`);
});


// $('.player_position_button-s').click(function() {
//     $('.active_position-s').removeClass(".active_position-s");
//     $(this).find(`.opacity_4-s`).removeClass(`opacity_4-s`);
//     $(this).addClass("active_position-s");
// });

// $(document).on('click', '.btn-grp button', function(e) {
//     $(".active_position-s").not($(this).addClass('active_position-s')).removeClass();
// });



document.addEventListener('DOMContentLoaded', function() {


    $(`.button_click-s`).click(function() {
        let img = $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src');

        img = img == 'assets/images/arrow_down.svg' ? 'assets/images/arrow_up.svg' : (img == 'assets/images/arrow_up.svg' ? 'assets/images/arrow_down.svg' : 'assets/images/arrow_up.svg');

        $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src', img);
        console.log(img);
    });

    let chat_icon = document.getElementById("chat_icon-d");
    if (chat_icon != null) {
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
    }

    $(`.slider-d`).on('input', function() {
        $(`.${$(this).attr('data-parent')}`).text($(this).val());
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

/**-------------------- switch modal for rating or not -------------------- */

$("#switch_to_no_rating_modal").click(function() {
    $("#player_played_modal-d").modal('hide');
    $("#player_not_played_modal-d").modal('show');
});


/** -------------- for add stadium modal --------------- */

$("#switch_to_add_stadium_modal-d").click(function() {
    $("#send_invitation_modal-d").modal('hide');
    $("#add_stadium_modal-d").modal('show');
});

// filter modals switch


$('.modal').on('click', '.trigger_rating-d', function(e) {
    // console.log('fefefefe');
    $("#option_of_filter_modal-d").modal('hide');
    $("#filter_by_rating_modal-d").modal('show');
});

$('.modal').on('click', '.trigger_price-d', function(e) {
    $(".option_of_filter_modal-d").modal('hide');
    $("#filter_by_price_modal-d").modal('show');
});


$('.modal').on('click', '.trigger_location-d', function(e) {
    $(".option_of_filter_modal-d").modal('hide');
    $("#filter_by_distance_modal-d").modal('show');
});

$(`.p_tab`).click(function() {
    $(`.nav-tabs`).find(`.performance_text`).removeClass('performance_text');
    $(this).addClass('performance_text');
    $(`.tab-content`).find('.active').removeClass('active').removeClass('show');
    $(`#${$(this).attr('href').replace('#','')}`).addClass('active').addClass('show');



})