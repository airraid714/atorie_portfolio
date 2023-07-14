jQuery( function($){

    // ハンバーガーボタンをクリックするとサイドバーが出現する
    $(".js-side-bar").on("click",function(){		
        $(".l-sidebar").toggleClass("is-open");
        $(".c-button--hamburger").toggleClass("is-open");
        $(".p-navigation--sidebar").toggleClass("is-open");
    });

    // メニューのリストをクリックするとサイドバーが閉じる
    $(".js-close").on("click",function(){

        setTimeout(function(){
            $(".l-sidebar").removeClass("is-open");
            $(".c-button--hamburger").removeClass("is-open");
            $(".p-navigation--sidebar").removeClass("is-open");
        },500);

    });


});