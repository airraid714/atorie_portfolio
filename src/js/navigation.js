document.addEventListener("DOMContentLoaded", function() {
    // ハンバーガーボタンをクリックするとサイドバーが出現する
    document.querySelector(".js-side-bar").addEventListener("click", function() {
        document.querySelector(".l-sidebar").classList.toggle("is-open");
        document.querySelector(".c-button--hamburger").classList.toggle("is-open");
        document.querySelector(".p-navigation--sidebar").classList.toggle("is-open");
    });

    // メニューのリストをクリックするとサイドバーが閉じる
    const closeElements = document.querySelectorAll(".js-close");
    closeElements.forEach(function(element) {
        element.addEventListener("click", function() {
            setTimeout(function() {
                document.querySelector(".l-sidebar").classList.remove("is-open");
                document.querySelector(".c-button--hamburger").classList.remove("is-open");
                document.querySelector(".p-navigation--sidebar").classList.remove("is-open");
            }, 500);
        });
    });1

    // ドロップダウンメニューをクリックするとサブメニューが出現
    const dropdownElement = document.querySelector(".js-dropdown");

    if (dropdownElement) {
        dropdownElement.addEventListener("click", function() {
            document.querySelector(".c-button--dropdown").classList.toggle("is-open");
            document.querySelector(".p-navigation--dropdown__content").classList.toggle("is-open");

            const listItemElements = document.querySelectorAll(".p-navigation--dropdown__content li");
            listItemElements.forEach(function(li) {
                li.classList.toggle("is-open");
                const anchorElement = li.querySelector("a");
                if (anchorElement) {
                    anchorElement.classList.toggle("is-open");
                }
            });
        });
    }
});


// jQuery( function($){

//     // ハンバーガーボタンをクリックするとサイドバーが出現する
//     $(".js-side-bar").on("click",function(){		
//         $(".l-sidebar").toggleClass("is-open");
//         $(".c-button--hamburger").toggleClass("is-open");
//         $(".p-navigation--sidebar").toggleClass("is-open");
//     });

//     // メニューのリストをクリックするとサイドバーが閉じる
//     $(".js-close").on("click",function(){

//         setTimeout(function(){
//             $(".l-sidebar").removeClass("is-open");
//             $(".c-button--hamburger").removeClass("is-open");
//             $(".p-navigation--sidebar").removeClass("is-open");
//         },500);

//     });

//     // ドロップダウンメニューをクリックするとサブメニューが出現
//     $(".js-dropdown").on("click",function(){
//         $(".c-button--dropdown").toggleClass("is-open");
//         $(".p-navigation--dropdown__content").toggleClass("is-open");
//         $(".p-navigation--dropdown__content li").toggleClass("is-open");
//         $(".p-navigation--dropdown__content li a").toggleClass("is-open");

        
//     })


    


// });