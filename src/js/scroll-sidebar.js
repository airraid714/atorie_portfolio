const sidebar = document.querySelector


window.addEventListener('scroll', function() {
    // スクロール位置を取得
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // コンテンツの上端からの距離を計算
    const contentTop = document.querySelector('.content').offsetTop;
    
    // もしスクロール位置がコンテンツの上端を超える場合、サイドバーを追従させる
    if (scrollTop > contentTop) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '0';
    }
    // それ以外の場合、元のスタイルを適用
    else {
      sidebar.style.position = 'absolute';
      sidebar.style.top = '';
    }
});