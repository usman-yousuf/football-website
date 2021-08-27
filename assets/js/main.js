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
            
            if(show_chat.getAttribute("class") == "d-none"){
                console.log(show_chat.classList);
                show_chat.classList.remove("d-none");
                show_chat.classList.add("d-block");
            }
            else{
                show_chat.classList.remove("d-block");
                show_chat.classList.add("d-none");
            }
        }

        // let dropdown_img = document.getElementsByClassName("button_click-s");
        // Array.from(dropdown_img).forEach(elm => {
        //     elm.addEventListener( "click" ,changeImg );
        // });
    
        // function changeImg () {
        //     var child_nodes = this.children[0];
        //     console.log(child_nodes.getAttribute("class").innerHTML);
        //     for(var i=0; i < child_nodes.length; i++) {
        //         if(child_nodes[i].getAttribute("class") == "text-right"){
        //             var img_div = child_nodes[i];
        //         }
        //     }

        //     console.log(img_div);
        // }
    });


