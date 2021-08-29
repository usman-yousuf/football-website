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

        $(`.button_click-s`).click(function(){
           let img = $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src');

           img = img == 'assets/images/arrow_down.svg' ? 'assets/images/arrow_up.svg' : (img == 'assets/images/arrow_up.svg' ? 'assets/images/arrow_down.svg' : 'assets/images/arrow_up.svg') ;

           $(this).find(`.img_div-s`).find(`.dropdown_img-s`).attr('src',img);
           console.log(img);
        });

        let chat_icon = document.getElementById("chat_icon-d");
        chat_icon.addEventListener( "click" , changeImg );

        function changeImg () {
            var img = this.src;
            
            if( img.indexOf("bot_chat.svg") !=-1){
                this.src = "assets/images/close_chat.svg";
            }
            else{
                this.src = "assets/images/bot_chat.svg";
            }

            var show_chat = document.getElementById("wrapper-d");
            if(show_chat.classList.contains("d-none")){
                show_chat.classList.remove("d-none");
                show_chat.classList.add("d-block");
            }
            else{
                show_chat.classList.remove("d-block");
                show_chat.classList.add("d-none");
            }
        }

        let rating_slider =document.getElementsByClassName("ratig_slider-s");
        Array.from(rating_slider).forEach( elm => {
            console.log("sdkj");
            let rating_value = document.getElementById("ability-d");
            rating_value.innerHTML = elm.value;
            elm.oninput = function() {
                rating_value.innerHTML = this.value;
              }
        });
        
    });


