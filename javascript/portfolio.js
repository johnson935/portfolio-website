AOS.init();
$( document ).ready(function() {
    $('.about-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#About').offset().top
        }, 500);
    });
    $('#work-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#Work').offset().top
        }, 500);
    });
    $('#education-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#Education').offset().top
        }, 500);
    });
    $('.contact-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#Contact').offset().top
        }, 500);
    });
    $('#logo').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#front-page').offset().top
        }, 500);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('header').addClass("sticky");
            $("nav").css("background-color", "rgba(132, 21, 206, 0.843)");
        }
        else{
            $('header').removeClass("sticky");
            $("nav").css("background-color", "");
        }
    });

    $('.navbar-toggler').on('click', function(){
        $('.nav-item').css('height', '100%');
    });
    var toggle = false;
    $('.burger').on('click', function(){
         $('.burger').toggleClass('toggle');
        $('.links').toggleClass('navActive')
        if (toggle === true){
            toggle = false;
            $('.links li').each(function(index){

                $(this).css('animation', '');
            });
        }else{
            $('.links li').each(function(index){

                $(this).css('animation', 'navLinkFade 0.5s ease forwards ' + ((index+1)/7) +2 +'s');
            });            
            toggle = true;
            $('.links li').on('click', function(){
                $('.burger').removeClass('toggle');
                $('.links').removeClass('navActive')
                toggle = false;
                $('.links li').each(function(index){

                    $(this).css('animation', '');
                });
            });

        }  
        
    });
    
    let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
});