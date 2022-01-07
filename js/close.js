// Pop-up block
$(function () {
    $('.pop-up').hide();
    $('.pop-up').fadeIn(100);
    $('#close , #agree').click(function (e) {
      $('.pop-up').fadeOut(100);
      e.stopPropagation();
    });
  });