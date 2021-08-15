$( document ).ready(function() {


    
    $("#nav-button").click(function(){
        $(".nav__menu").toggle();
        $(".nav__overlay").toggle();
        $(".header__button--container").toggleClass("fixed__menu")
      });

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