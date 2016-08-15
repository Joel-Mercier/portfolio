$( document ).ready(function() {

  var typeTitle = function(element, strings) {
    // typeIt jQuery plugin init
    $(element).typeIt({
      strings: strings,
      speed: 100,
      lifeLike: false,
      cursor: true
    });
  };

  typeTitle('.header__title.type-it', ['Joel Mercier', 'Développeur web']);

  $('#barba__wrapper').on('mouseover', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image--current');
    var portfolioImg = $(this).parent().data('img');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    currentImage.css('background-image', 'url('+ portfolioImg +')');
    currentImage.addClass('animated fade-in').one(animationEnd, function() {
      currentImage.removeClass('animated fade-in');
    });
  });

  $('#barba__wrapper').on('mouseleave', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image--current');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    currentImage.addClass('animated fade-out').one(animationEnd, function() {
      currentImage.css('background-image', '');
      currentImage.removeClass('animated fade-out');
    });
  });

  // BarbaJS plugin init
  Barba.Pjax.Dom.wrapperId = 'barba__wrapper';
  Barba.Pjax.Dom.containerClass = 'barba__container';
  Barba.Pjax.ignoreClassLink = 'barba__link--ignored';

  Barba.Prefetch.init();
  Barba.Pjax.start();

  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    typeTitle('.header__title.type-it', ['Joel Mercier', 'Développeur web']);

  });

});
