$( document ).ready(function() {


    
    $("#nav-button").click(function(){
       $(".header__menu").toggle();
      $(".header__button--wrapper").toggle();


        $(".nav__hidden").toggle();
        $(".nav__hidden").toggleClass("fixed__menu")
        $(".nav__overlay").toggle();
      });

      $("#nav__hidden--button").click(function(){
        $(".header__menu").toggle();
        $(".header__button--wrapper").toggle();
        $(".nav__hidden").toggle();
        $(".nav__hidden").toggleClass("fixed__menu")
        $(".nav__overlay").toggle();
      })
      $(".nav__overlay").click(function(){
        $(".header__menu").toggle();
        $(".header__button--wrapper").toggle();
        $(".nav__hidden").toggle();
        $(".nav__hidden").toggleClass("fixed__menu")
        $(".nav__overlay").toggle();
      })


      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });

  
    const menus =  document.querySelectorAll(".header__menu--item")
    const menuActive =document.getElementById("line-active")
    const line =document.getElementById("menu-line")
    line.style.left =menuActive.offsetLeft + "px";
    line.style.width =  menuActive.offsetWidth + "px";
    
    menus.forEach((menu, index) => {

        menu.onclick = function () {
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    

      };
    });


 });