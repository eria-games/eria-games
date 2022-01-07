$('.carousel').carousel({
    interval: 0,
  });
  $('.btn-next').click(function(){
    $('.carousel').carousel('next');
  });
  $('.btn-prev').click(function(){
    $('.carousel').carousel('prev');
  });
  