/*$(document).ready(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() > 500) {
      if($(window).width() > 567) {
        $('.map-block > script').attr('src', '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aafede4a6c43633b8b307b1f2707f8f26f32e2925c681139b830786073e94169a&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script>');
      }
      else {
        $('.map-block > script').attr('src', '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aafede4a6c43633b8b307b1f2707f8f26f32e2925c681139b830786073e94169a&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script>');
      }
    }
  });
});
*/
$(document).ready(function() {
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;

  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      console.log('Докрутили');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aafede4a6c43633b8b307b1f2707f8f26f32e2925c681139b830786073e94169a&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
});