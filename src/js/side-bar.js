jQuery( function($){
    $(".js-side-bar").on("click",function(){		
        $(".l-sidebar").toggleClass("is-open");
        $(".c-button--hamburger").toggleClass("is-open");
    });

    $(".js-close").on("click",function(){

        setTimeout(function(){
            $(".l-sidebar").removeClass("is-open");
            $(".c-button--hamburger").removeClass("is-open");
        },700);

    });

    $(window).resize( function(){
        if(window.matchMedia('(min-width:1024px)').matches){

            $(".l-side-bar").removeClass("is-open");
            $(".c-button--hamburger").removeClass("is-open");
            $(".c-layer--gray").removeClass("is-open");
            $(".js-button").toggleClass("c-animation--push");
        } else{
            

        }
    });



});