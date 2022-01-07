!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button class="mobile-nav-toggle"></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // News pop-up block
  $(function () {
    $('.news_pop_up_block').hide();
    $('.news_pop_up_block').fadeIn(100);
    $('#news_close_icon , #agree').click(function (e) {
      $('.news_pop_up_block').fadeOut(100);
      e.stopPropagation();
    });
  });

  // Pop-up block
  $('.thanks_pop_up').click(function () {
    $('.thanks_pop_up_block').addClass('open');
  });

  $('.thanks_pop_up_block .thanks_pop_up_close').click(function () {
    $('.thanks_pop_up_block').removeClass('open');
  });

  // Copy
  const copyButton = document.querySelector(".copy_button");
  const copyText = document.querySelector(".copy-text");

  copyButton.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copied!";

    setTimeout(function () {
      copyButton.classList.toggle("success");
      copyButton.innerHTML = "Copy";
    }, 2000);
  });

})(jQuery);