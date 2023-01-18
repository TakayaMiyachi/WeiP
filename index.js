// ヘッダーアクション
const nav = document.getElementById('js_headerNav');
const hum = document.getElementById('js_headerHum');
hum.addEventListener('click', () => {
  hum.classList.toggle("clicked");
  nav.classList.toggle("clicked");
});
nav.childNodes.forEach(a => {
  if(a.id !== 'first'){
    a.addEventListener('click', () => {
      hum.classList.toggle("clicked");
      nav.classList.toggle("clicked");
    })
  }
});

const header = document.querySelector('.ly_header');
const headerImg = document.querySelector('.ly_header_img');
const pageTtl = document.querySelector('title');
window.onload = () => {
  const scroll = window.scrollY; //スクロール量を取得
  if(scroll === 0) {
    header.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

window.addEventListener('scroll', () => {
  const scroll = window.scrollY; //スクロール量を取得
  const mainV = document.querySelector('.bl_mainV').clientHeight;
  if(scroll === 0) {
    header.style.backgroundColor = 'rgba(0,0,0,0)';
    if(pageTtl.innerText === '⽔域環境情報基盤株式会社') {
      headerImg.style.opacity = '0';
    }
  } else if(scroll < mainV) {
    header.style.backgroundColor = 'rgba(0,0,0,.5)';
    if(pageTtl.innerText === '⽔域環境情報基盤株式会社') {
      headerImg.style.opacity = '1';
    }
  } else if(scroll >= mainV) {
    header.style.backgroundColor = '#444';
    if(pageTtl.innerText === '⽔域環境情報基盤株式会社') {
      headerImg.style.opacity = '1';
    }
  }
});

//スクロールイベント
let targetsLeft = document.querySelectorAll('.js_scroll_left'); //アニメーションさせたい要素
let targetsFall = document.querySelectorAll('.js_scroll_fall'); //アニメーションさせたい要素
window.addEventListener('scroll', function () {
  const scroll = window.scrollY; //スクロール量を取得
  const windowHeight = window.innerHeight - 100; //画面の高さを取得
  let time = 0;
  const func = (targets) => { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    targets.forEach(target => {
      let targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
      if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
        this.setTimeout(() => {target.classList.add('is_animated');}, time)//is-animatedクラスを加える
        time = time + 300;
      }
    });
    time = 0;
  }
  func(targetsLeft);
  func(targetsFall);
});

// ローディング画面の表示
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  const loaderBox = document.getElementById('loading_box');
  loader.classList.add('fadeout');
  loaderBox.classList.add('fadeout');
  setTimeout(() => {
    loader.style.display = "none"; 
    loaderBox.style.display = "none"; 
  },1000);
});