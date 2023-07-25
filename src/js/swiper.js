var mySwiper = new Swiper('.swiper',{

    loop: true,        //スライダーのループをオンオフする
    slidesPerView: 1,  //領域内に表示するスライドの数
    spaceBetween: 30,  //スライド同士の間隔
    speed:        800,
    centeredSlides:  true,
    followFinger:    true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});
