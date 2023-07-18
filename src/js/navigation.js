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

    // ドロップダウンメニューをクリックするとサブメニューが出現
    $(".js-dropdown").on("click",function(){
        $(".c-button--dropdown").toggleClass("is-open");
        $(".p-navigation--dropdown__content").toggleClass("is-open");
        $(".p-navigation--dropdown__content li").toggleClass("is-open");
        $(".p-navigation--dropdown__content li a").toggleClass("is-open");

        
    })


    


});