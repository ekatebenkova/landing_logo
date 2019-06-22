$(function() {
  $(function() {
    $('.burger__menu-icon').on('click', function() {
      $(this).closest('.burger__menu').toggleClass('menu-open');
    });
  });
});