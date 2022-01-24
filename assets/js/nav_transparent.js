$(document).ready(function(){
          
    $(window).scroll(function(){

      var element = document.getElementById("alertNav");
      if($(window).scrollTop()>300){
        $('nav').addClass('navtop');
        element.classList.add("alertColor");
      }else{
        $('nav').removeClass('navtop');
        element.classList.remove("alertColor");
      }

    });

});
