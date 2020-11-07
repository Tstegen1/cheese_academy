'use strict';

{
  $(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    let speed = 500;
    //リンク元を取得
    let href= $(this).attr("href");
    //リンク先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    let position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
}