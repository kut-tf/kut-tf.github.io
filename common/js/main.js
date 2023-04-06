$(function(){
/*=======================================
スマホメニュー
=======================================*/
  //ハンバーガーメニューのクリックイベント
  /* $('#btn-menu').on('click', function() {
    if ($('#btn-menu').hasClass('open')) {
      $('.g-nav').removeClass('open');
    } else {
      $('.g-nav').addClass('open');
    }
  }); */
  /* 4/6追加 */
  $('#btn-menu').on('click', function() {
    if ($('#hd').hasClass('open')) {
      $('#hd').removeClass('open');
    } else {
      $('#hd').addClass('open');
    }
  });
  //#maskエリアをクリック時、メニューを閉じる
  $('#mask').on('click', function() {
    $('#hd').removeClass('open');
  });
  //通常リンクをクリック時、メニューを閉じる
  $('.g-nav-links-item-link').on('click', function() {
    if ($('#hd').hasClass('open')){
      $('#hd').removeClass('open');
    }
  });
  //SNSリンクをクリック時、メニューを閉じる
  $('.g-nav-links-item-link-sns').on('click', function() {
    if ($('#hd').hasClass('open')){
      $('#hd').removeClass('open');
    }
  });
  //メニューを開いていてレスポンシブサイズより画面が大きくなった時、openクラスを削除する。
  $(window).on("resize", function(){
    const smWindowSize = 1023;
    if ($('#hd').hasClass('open')){
      if (window.innerWidth <=  smWindowSize) {
       $("#hd").removeClass("open").addClass();
      }
    }
  });

  //ヘッダー
  var startPos = 0;
  $(window).on("scroll", function(){
    var distanceY = $(this).scrollTop();
    //スクロールで表示されるヘッダー
    if(distanceY > 140){
      $(".hd-inner").addClass("scrolled");
    } else {
      $(".hd-inner").removeClass("scrolled");
    }
  });
});

$(document).ready(function () {
  const topBtn = $('#js-scroll-to-top');
  $(window).on("scroll", function () {
    let scrollPosition = $(this).scrollTop() + $(window).height();
    if (scrollPosition > $(window).height() + 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
    let footerHeight =  $("footer").innerHeight();
    if ($(document).height() - scrollPosition <= footerHeight - topBtn.height()) {
      topBtn.addClass('is-stop');
    } else {
      topBtn.removeClass('is-stop');
    }
  });
  
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
