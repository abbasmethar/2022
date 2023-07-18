
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

  
  /*$("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbwXXcesDs8FZRAxgCGs1Vd7LXii9VSoCrQTr5N6mMzhcClIMZVVlqtKs1WnBD7dNIxf/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")

          }
      })
  })
*/