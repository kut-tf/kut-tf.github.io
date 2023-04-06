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