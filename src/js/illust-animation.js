import { gsap } from 'gsap';

// メインエリア左のPC内で鳥の画像がランダムに入れ替わるアニメーション

const images = document.querySelectorAll('.animated-image'); // イラストの要素を取得

// イラストの初期状態を設定（透明にする）
gsap.set(images, { autoAlpha: 0 });

const animationDuration = 3; // フェードイン・フェードアウトの時間（秒）

let isAnimating = false; // アニメーションが進行中かどうかを示すフラグ

// ランダムな順番でイラストを表示するための関数
function getRandomIndex(currentIndex, maxIndex) {
  let randomIndex = Math.floor(Math.random() * maxIndex);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * maxIndex);
  }
  return randomIndex;
}

// Promiseでアニメーションを実行する関数
function animateWithPromise(element, props) {
  return new Promise((resolve) => {
    gsap.to(element, {
      ...props,
      onComplete: resolve, // アニメーション完了時にPromiseを解決
    });
  });
}

// イラストをアニメーションする関数
async function animateImages() {
  const tl = gsap.timeline({ repeat: -1 });

  let currentIndex = -1; // アニメーション開始時はどのイラストも表示されない状態にするための変数

  async function switchImage() { //アニメーションを開始するために最初に呼び出される関数
    if (isAnimating) {
      return; // アニメーションが進行中なら中断
    }

    isAnimating = true; // アニメーションを開始

    const nextIndex = getRandomIndex(currentIndex, images.length);

    if (currentIndex !== -1) {
      // 現在表示中のイラストをフェードアウト
      await animateWithPromise(images[currentIndex], { duration: animationDuration, autoAlpha: 0 });

      // 次のイラストをフェードイン
      await animateWithPromise(images[nextIndex], {
        duration: animationDuration,
        autoAlpha: 1,
      });

      currentIndex = nextIndex; // イラストを切り替える前にインデックスを更新
    } else {
      // 初回の場合は直接フェードイン
      await animateWithPromise(images[nextIndex], {
        duration: animationDuration,
        autoAlpha: 1,
      });

      currentIndex = nextIndex;
    }

    isAnimating = false; // アニメーションが完了
    switchImage(); // 次のアニメーションを開始
  }

  switchImage(); // 最初の切り替えをトリガー
}

animateImages();

//メインエリア右側の鳥の遊具の上に止まっているインコがスマホに飛んでくるギミックアニメーション

document.addEventListener("DOMContentLoaded", function() { 

 document.querySelector(".js-gimmick").addEventListener("click", function() {
  const container = document.querySelector(".l-container");
  container.classList.toggle("is-down");
 });

});