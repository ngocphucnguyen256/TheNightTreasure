$( document ).ready(function() {


    
    $("#nav-button").click(function(){
        $(".nav__menu").toggle();
        $(".nav__overlay").toggle();
        $(".header__button--container").toggleClass("fixed__menu")
      });
   
 });