
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
          $(".header").css("background" , "black");
        }
  
        else{
            $(".header").css("background" , "#00000000");  	
        }
    })
  })
