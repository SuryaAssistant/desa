$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>300){
        $('nav').addClass('navtop');
      }else{
        $('nav').removeClass('navtop');
      }

    });

});
