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

  wow = new WOW ({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });

  wow.init();

  $('#barba__wrapper').on('mouseover', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image--current');
    var portfolioImg = $(this).parent().data('img');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    currentImage.css('background-image', 'url('+ portfolioImg +')');
    currentImage.stop().fadeIn(500);
  });

  $('#barba__wrapper').on('mouseleave', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image--current');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    currentImage.stop().fadeOut(500);
    currentImage.one(animationEnd, function() {
      currentImage.css('background-image', '');

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
