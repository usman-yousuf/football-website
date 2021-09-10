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

$(`.chat_parent`).click(function() {
    $(`.list_member_parent-d`).find('.br_on_active-s').removeClass('br_on_active-s');
    $(this).addClass(`br_on_active-s`);
    $(`.chat_module_parent`).find('.d-block').removeClass('d-block').addClass('d-none');
    $(`#${$(this).attr('data-parent-chat')}`).removeClass('d-none').addClass('d-block');
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

    // $(`#lower,#upper`).on('input', function() {
    //     let rating_Value = $(`#rating_value-d`);
    //     let rating_Value_upper = $(`#rating_value-d2`);
    //     let rating_slider = $(`#lower`);
    //     let rating_slider_upper = $(`#upper`);

    //     $(rating_Value_upper).text($(rating_slider_upper).val());
    //     $(rating_Value).text($(rating_slider).val());

    //     $(rating_Value).position() = ($(rating_slider).val() / 2) + `%`;
    // });
    // rating_slider.oninput = ( ()=> {
    //     let value = rating_slider.value;
    //     console.log(rating_Value.textContent);
    //     rating_Value. textContent = value;

    //     rating_Value.style.left =(value/2) + "%";
    // });

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

    let img = document.getElementsByClassName("change_img-d");
    if (img != null) {
        Array.from(img).forEach(elm => {
            elm.addEventListener("click", toggleCalendar);
        });

        function toggleCalendar() {
            let calendar = document.getElementById("toggle_calendar-d");
            if (this.src == "assets/images/arrow_down_green.svg" || calendar.classList.contains("d-none")) {
                this.setAttribute("width", 18);
                this.src = "assets/images/up_arrow.svg";
                calendar.classList.remove("d-none");
            } else {
                this.setAttribute("width", 17);
                this.src = "assets/images/arrow_down_green.svg";
                calendar.classList.add("d-none");
            }

        }
    }



});

// ------ For game invitation switch modals ----->
$('.modal').on('click', `#switch_to_select_date-d`, function(e) {
    // $(`#accept_invitation_modal-d`).modal().hide();
    // $(`#accept_invitation_modal-d`).modal('hide', 500);
    // $(`#select_date_modal-d`).modal('show');

    switchModal('accept_invitation_modal-d', 'select_date_modal-d');
});
$(`#cancel_modal-d`).click(function() {
    window.location.href = "hire_Players.html";
});
// $(`#cancel_modal-d`).click(function() {
//     alert('text');
//     window.location.href = "game_invitation.html";
// });

/**  --------------- jquery of switch modals for new phone number ----------- */

// ------ For verify code to phone update switch modals ----->
$('.modal').on('click', `#switch_to_phone_verify_code-d`, function(e) {
    switchModal('update_phone_num_modal-d', 'num_verification_modal-d');

});
// $("#switch_to_phone_verify_code-d").click(function() {
// $("#update_phone_num_modal-d").modal('hide');
// $("#num_verification_modal-d").modal('show');
// $(`#cal`).click(function() {
//     window.location.href = "hire_Players.html";
// });

// ------ For enter new phone verify code switch modals ----->
$('.modal').on('click', `#switch_to_new_phone_modal-d`, function(e) {
    switchModal('num_verification_modal-d', 'new_num_modal-d');

});

// $("#switch_to_new_phone_modal-d").click(function() {
//     $("#num_verification_modal-d").modal('hide');
//     $("#new_num_modal-d").modal('show');
// });

// ------ For success new phone switch modals ----->
$('.modal').on('click', `#phone_success_modal-d`, function(e) {
    switchModal('new_num_modal-d', 'success_phone_num_modal-d');

});

// $("#phone_success_modal-d").click(function() {
//     $("#new_num_modal-d").modal('hide');
//     $("#success_phone_num_modal-d").modal('show');
// });

/**  --------------- jquery of switch modals for new phone number ----------- */


/**  --------------- jquery of switch modals for new email ----------- */

// ------For enter verify code to update email switch modals ----->
$('.modal').on('click', `#switch_to_email_verify_code_modal-d`, function(e) {
    switchModal('update_email_modal-d', 'email_verification_modal-d');

});

// $("#switch_to_email_verify_code_modal-d").click(function() {
//     $("#update_email_modal-d").modal('hide');
//     $("#email_verification_modal-d").modal('show');
// });

// ------For enter new email switch modals ----->
$('.modal').on('click', `#switch_to_new_email_modal-d`, function(e) {
    switchModal('email_verification_modal-d', 'new_email_modal-d');

});

// $("#switch_to_new_email_modal-d").click(function() {
//     $("#email_verification_modal-d").modal('hide');
//     $("#new_email_modal-d").modal('show');
// });


// ------ For success new email switch modals ----->
$('.modal').on('click', `#email_success_modal-d`, function(e) {
    switchModal('new_email_modal-d', 'success_email_modal-d');

});

// $("#email_success_modal-d").click(function() {
//     $("#new_email_modal-d").modal('hide');
//     $("#success_email_modal-d").modal('show');
// });

/**  --------------- jquery of switch modals for new email ----------- */


/**  --------------- jquery of switch modals for new password ----------- */

// ------For enter verify code to update password switch modals ----->
$('.modal').on('click', `#switch_to_password_verify_code_modal-d`, function(e) {
    switchModal('update_password_modal-d', 'password_verification_modal-d');

});

// $("#switch_to_password_verify_code_modal-d").click(function() {
//     $("#update_password_modal-d").modal('hide');
//     $("#password_verification_modal-d").modal('show');
// });

// ------For enter new password switch modals ----->
$('.modal').on('click', `#switch_to_new_password_modal-d`, function(e) {
    switchModal('password_verification_modal-d', 'new_password_modal-d');

});

// $("#switch_to_new_password_modal-d").click(function() {
//     $("#password_verification_modal-d").modal('hide');
//     $("#new_password_modal-d").modal('show');
// });

// ------ For success new password switch modals ----->
$('.modal').on('click', `#password_success_modal-d`, function(e) {
    switchModal('new_password_modal-d', 'success_password_modal-d');

});

// $("#password_success_modal-d").click(function() {
//     $("#new_password_modal-d").modal('hide');
//     $("#success_password_modal-d").modal('show');
// });

/**  --------------- jquery of switch modals for new password ----------- */

/**-------------------- switch modal for rating or not -------------------- */

$('.modal').on('click', `#switch_to_no_rating_modal`, function(e) {
    switchModal('player_played_modal-d', 'player_not_played_modal-d');

});

// $("#switch_to_no_rating_modal").click(function() {
//     $("#player_played_modal-d").modal('hide');
//     $("#player_not_played_modal-d").modal('show');
// });


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
    // $(".option_of_filter_modal-d").modal('hide');
    // $("#filter_by_price_modal-d").modal('show');
    switchModal('option_of_filter_modal-d', 'filter_by_price_modal-d');

});


$('.modal').on('click', '.trigger_location-d', function(e) {
    // $(".option_of_filter_modal-d").modal('hide');
    // $("#filter_by_distance_modal-d").modal('show');
    switchModal('option_of_filter_modal-d', 'filter_by_distance_modal-d');
});

$(`.p_tab`).click(function() {
    $(`.nav-tabs`).find(`.performance_text`).removeClass('performance_text');
    $(this).addClass('performance_text');
    $(`.tab-content`).find('.active').removeClass('active').removeClass('show');
    $(`#${$(this).attr('href').replace('#','')}`).addClass('active').addClass('show');
})