'use strict';

{ 
    $(document).ready(function () {
        $("#topBtn").hide();      //最初はボタン隠す

        $(window).on("scroll", function () {    //300pxスクロールしたらボタンが出てくる
            if ($(this).scrollTop() > 300) {
                $("#topBtn").fadeIn("slow");    //インアウトのスピードをゆっくりにする
            } else {
                $("#topBtn").fadeOut("slow");
            }

            let scrollHeight = $(document).height(); //ドキュメントの高さ
            let scrollPosition = $(window).height() + $(window).scrollTop(); //ページトップから現在地までの高さ
            let footHeight = $("footer").innerHeight(); //フッターの高さ（＝止めたい位置）
            if ( scrollHeight - scrollPosition  <= footHeight ) {
                $("#topBtn").css({
                    "position":"absolute",   //フッターの位置まできたら絶対値で固定する
                    "bottom": footHeight
                });
            } else { 
                $("#topBtn").css({
                    "position":"fixed",     //それ以外の時はcssの設定通り
                    "bottom": "20px" 
                });
            }
        });

        $('#topBtn').click(function () {     //クリックイベントで戻るスピードを0.5秒にする
            $('body,html').animate({
            scrollTop: 0
            }, 400);
            return false;
        });
    });
}