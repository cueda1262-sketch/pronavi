
//
$(function () {
  /*=================================================
  アコーディング開閉
  ===================================================*/
  // アコーディオンメニューのラベルがクリックされた場合
  $(".accordion_item .accordion_Q").on("click", function() {
    // accordion_Qクラスの次の要素（accordion_Aクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // accordion_Qクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
  });
  
  /*=================================================
  ジャンプリンク
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  // BBBが選ばれる理由（スライド左）
  $(window).scroll(function () {
    $(".about-detail-card_left").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-left");
      }
    });
  });

  $(window).scroll(function () {

    $(".about-detail-card_right").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-right");
      }
    });
  });
});


