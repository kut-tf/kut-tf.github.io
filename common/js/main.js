$(function(){
/*=======================================
スマホメニュー
=======================================*/
  //ハンバーガーメニューのクリックイベント
  $('#btn-menu').on('click', function() {
    if ($('#btn-menu').hasClass('open')) {
      $('#btn-menu').removeClass('open');
      $('.g-nav').removeClass('open');
    } else {
      $('#btn-menu').addClass('open');
      $('.g-nav').addClass('open');
    }
  });
  $('.g-nav-links-item-link').on('click', function() {
    if ($('#btn-menu').hasClass('open')){
      $('#btn-menu').removeClass('open');
      $('.g-nav').removeClass('open');
    }
  })

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

