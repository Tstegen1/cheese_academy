'use strict';

{
    function initMap() {
            let target = document.getElementById('target');  //#targetの取得
            let map; 
            let ca = {lat: 33.586667, lng: 130.394469};  //ジーズFUKUOKAの緯度.経度を代入
            let marker;

        
            map = new google.maps.Map(target, {
                center: ca,
                zoom: 16,
                disableDefaultUI: true, //シンプルにするために周りの表示を消す
                clickableIcons: false,  //クリックして施設が表示されないようにする
                zoomControl: true,  //ズームだけ有効にする
                styles: [{
                    featureType: 'poi.business',  //飲食店のマーカーを消す
                    stylers: [
                        { visibility: 'off' },
                    ],
                }, {
                    featureType: 'poi.school',   //スクール系建物のマーカー消す
                    stylers: [
                        { visibility: 'off' },
                        ],
                    }
                ],
            });

            marker = new google.maps.Marker({
                position: ca,
                map: map,
                title: 'チーズアカデミーFUKUOKA',  //マウスをマーカーに当てると表示される
                icon: {
                    url: 'img/sozai_cman_jp_logo.png',
                    scaledSize: new google.maps.Size(20, 40),   //マーカーのサイズ変更
                    labelOrigin: new google.maps.Point(20, 50)  //ラベルの位置をマーカーの下に来るように設定する
                },
                label: {
                    text: 'チーズアカデミーFUKUOKA',
                    color: '#ff0000',
                    fontFamily: 'sans-serif', 
                    fontWeight: 'bold', 
                    fontSize: '12px'
                }
            });
    } 

    window.onload = function () {    //windowsの読み込みが完了してから実行する
        initMap();
    }

}