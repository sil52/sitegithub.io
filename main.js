/*===========
ハンバーガーメニュー
===============*/
//ハンバーガーメニューをクリックした時
$('.hamburger').on('click', function() {
    // ハンバーガーメニューの共通部分を呼び出す
    hamburger();
});
// メニューのクリックをした時
$('#navi a').on('click', function() {
    //ハンバーガーメニューの共通処理を呼び出す
    hamburger();
});

/*-------------スムーススクロール-------------*/
// ページ内リンクのイベント
$('a[href^="#"]').click(function(){
    //リンクを取得
    let href= $(this).attr("href");
    //ジャンプ先のid名セット
    let target= $(href == "#" || href == "" ? 'html' : href);
    //トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600,"swing");
    return false
});
