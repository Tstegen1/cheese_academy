'use strict';

{
  //.containerを2つずつ表示してい仕様にする
  document.getElementById('btn').addEventListener('click', () => {
    // .hidden が指定されている .container をさがす
    const hiddenItems = document.querySelectorAll('.container.hidden');

    // .hidden.container が1つ以上ある場合、1つ目を表示する
    if (hiddenItems.length > 0) {
      hiddenItems[0].classList.remove('hidden');
    }

    // .hidden.container が2つ以上ある場合、2つ目を表示する
    if (hiddenItems.length > 1) {
      hiddenItems[1].classList.remove('hidden');
    }

    // .hidden.container が3つ以上ある場合 (= 2つを表示してもまだ非表示のものがある場合)
    //中断する
    if (hiddenItems.length > 2)
      return;
    
    //最後まで表示したらMoreボタンを削除する
    document.getElementById('btn').remove();
    //そしてCloseボタンを表示する
    const closeBtn = document.getElementById('btn2').style.display = "block";




    //Closeボタンをクリックすると元に戻るイベントを設定したいが時間切れでできませんでした…
    //この状態ではボタン押しても元に戻りません…
    closeBtn.addEventListener('click', () => {
      hiddenItems.style.display = "none";
    });
  });
  
  
  
}