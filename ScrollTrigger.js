//スクロールをするたびにアニメーションを行う設定  
$('.fadeDounTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeIn');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('animate__animated animate__fadeIn');//クラス名が除去
    }
  });




