import { gsap, Power1 } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';
gsap.registerPlugin( MotionPathPlugin );


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

  const container = document.querySelector(".l-container");
  const incoBody  = document.querySelector(".c-object--inco");
  const incoTail  = document.querySelector(".c-object--inco-tail");
  const objectInco = [ incoBody,incoTail ];
  const initialImagePath = "./image/svg/セキセイインコ.svg";
  const secondImagepath = "./image/svg/fly_inco_side.svg";
  const thirdImagepath = "./image/svg/fly_inco_up.svg";

 document.querySelector(".js-gimmick").addEventListener("click", function() {
  container.classList.toggle("is-down");

    if (container.classList.contains("is-down")){

      gsap.to( objectInco, { 
        delay: 0.2,
        duration: 1,
        scale: 1.8,
        ease: Power1.easeInOut,
        motionPath: {
          path: [ { x: 0, y: 0 },
                  { x: -300, y: 800 },
                  { x: -320, y: -20 },
                  { x: -300, y: 0 }
                ],  
        },
        onUpdate: function(){

          if (this.progress() > 0.1 ){
            const imageTag = incoBody.querySelector("img");
            if (imageTag){
              imageTag.src = secondImagepath;
              
            }
            imageTag.style.width = "150px";
            imageTag.style.height = "150px";
            incoTail.style.opacity = 0;
          }
          if (this.progress() > 0.9 ){
            const imageTag = incoBody.querySelector("img");
            if (imageTag){
              imageTag.src = initialImagePath;
            }
            imageTag.style.width = "88px";
            imageTag.style.height = "150px";
            incoBody.style.zIndex = 210;
          }
        },
      });
    
    } else{

      gsap.to(objectInco, {
        duration: 2,
        scale: 1,
        ease: "cubic-bezier(1, 0.2, 1)",
        motionPath: {
          path: [ { x: -300, y: 20 },
                  { x: -350, y: 50},
                  { x: 100, y: -1000 },
                  { x: 10, y: -30 },
                  { x: 0, y: -10 },
                ]
        },
        onUpdate: function(){
          if (this.progress() > 0 ){
            const imageTag = incoBody.querySelector("img");
            if (imageTag){
              imageTag.src = thirdImagepath;
            }
            imageTag.style.width = "150px";
            imageTag.style.height = "150px";
            incoTail.style.opacity = 0;
          }

          if (this.progress() > 0.5 ){
            const imageTag = incoBody.querySelector("img");
            if (imageTag){
              imageTag.src = secondImagepath;
            }
            imageTag.style.width = "200px";
            imageTag.style.height = "200px";
            incoTail.style.opacity = 0;
          }

          if (this.progress() > 0.9 ){
            const imageTag = incoBody.querySelector("img");
            if (imageTag){
              imageTag.src = initialImagePath;
            }
            imageTag.style.width = "88px";
            imageTag.style.height = "150px";
            incoTail.style.opacity = 1;
          }
          
        },
        onComplete: function(){
          incoBody.style.zIndex = 20;
        },

      });
    }
 });

});
