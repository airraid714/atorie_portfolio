import { gsap } from 'gsap';

const images = document.querySelectorAll('.animated-image'); // イラストの要素を取得

// イラストの初期状態を設定（透明にする）
gsap.set(images, { autoAlpha: 0 });

const animationDuration = 3; // フェードイン・フェードアウトの時間（秒）
const fadeInOutDelay = 0; // イラストの表示切り替えの遅延時間（秒）

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

  let currentIndex = -1; // 現在表示中のイラストのインデックス

  async function switchImage() {
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
        delay: fadeInOutDelay,
      });

      currentIndex = nextIndex; // イラストを切り替える前にインデックスを更新
    } else {
      // 初回の場合は直接フェードイン
      await animateWithPromise(images[nextIndex], {
        duration: animationDuration,
        autoAlpha: 1,
        delay: fadeInOutDelay,
      });

      currentIndex = nextIndex;
    }

    isAnimating = false; // アニメーションが完了
    switchImage(); // 次のアニメーションを開始
  }

  switchImage(); // 最初の切り替えをトリガー
}

animateImages();