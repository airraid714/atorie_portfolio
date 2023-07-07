jQuery( function($){
    $(".js-side-bar").on("click",function(){		
        $(".l-sidebar").toggleClass("is-open");
        $(".c-button--hamburger").toggleClass("is-open");
        $(".p-navigation--sidebar").toggleClass("is-open");
    });


});