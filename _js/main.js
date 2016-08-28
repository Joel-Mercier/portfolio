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

  $('#barba__wrapper').on('click', 'a[href*="#"]:not([href="#"])', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  wow = new WOW ({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // not default
    live:         true        // default
  });

  wow.init();

  $('#barba__wrapper').on('mouseover', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image');
    var portfolioImg = $(this).parent().data('img');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    currentImage.css('background-image', 'url('+ portfolioImg +')');
    currentImage.stop().fadeIn(500);
  });

  $('#barba__wrapper').on('mouseleave', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image');
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
    console.log(currentStatus);
    typeTitle('.header__title.type-it', ['Joel Mercier', 'Développeur web']);
    var currentUrlArray = currentStatus.url.split('/');
  });

  // Barba.Dispatcher.on('initStateChange', function() {
  //
  // });

  var form = $('#contactForm');
  var total = $('.footer__contact-form-item').length;
  var step = 1;
  var nextButton = $('.footer__contact-form-next');
  var error = $('.footer__contact-form-error');

  $('.footer__contact-form-steps').text(step + ' / ' + total);

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  var validateInput = function(event) {
    activeInput = $('.footer__contact-form-item--current input, .footer__contact-form-item--current textarea');
    console.log(activeInput);

    if (activeInput.prop('type') === 'text' && activeInput.val()) {
      console.log('text input validated');
      return true;
    } else if (activeInput.prop('type') === 'email' && isEmail(activeInput.val())) {
      console.log('email input validated');
      return true;
    } else if (activeInput.is('textarea') && activeInput.val()) {
      console.log('textarea validated');
      return true;
    } else {
      if (step === 1) {
        message = 'Veuillez indiquer un nom afin que je puisse vous identifier';
      } else if (step === 2) {
        message = 'Votre adresse email n\'est pas valide, je ne pourrais pas vous recontacter';
      } else if (step === 3) {
        message = 'Veuillez indiquer un message, sinon quel est le but de ce formulaire ?';
      }
      error.text(message);
      return false;
    }
  };

  var nextInput = function(event) {
    console.log('next input');
    console.log('step avant fct: '+step);
    itemList = $('.footer__contact-form-item');
    error.text('');
    itemList.each(function() {
      if($(this).hasClass('footer__contact-form-item--current')) {
        $(this).removeClass('footer__contact-form-item--current');
        $(this).next().addClass('footer__contact-form-item--current').focus();
        $('.footer__contact-form-progress').css({
            width: function(index, value) {
              return step * (100/ total) +'%';
          }
        });
        if(step <= total) {
          step = step + 1;
          console.log('step après fct: '+step);
          $('.footer__contact-form-steps').text(step + ' / ' + total);
        }

        return false;
      };
    });
  };

  var submitInput = function(event) {
    console.log('step : '+step);
    nextButton.removeClass('footer__contact-form-next--is-visible');

    $.ajax({
      url: form.prop('action'),
      type: form.prop('method'),
      data: form.serialize(),
      success: function(response) {
        console.log(response);
        $('#contactName').val('');
        $('#contactEmail').val('');
        $('#contactMessage').val('');
      },
      error: function(response) {
        console.log(response);
        $('.footer__contact-form-item').removeClass('footer__contact-form-item--current');
        $('.footer__contact-form-item').first().addClass('footer__contact-form-item--current');
        step = 1;
        $('.footer__contact-form-steps').text(step + ' / ' + total);
        error.text(response.statusText);
      }
    });
  };

  $('.footer__contact-form-item--current input').on('focus', function(){
    nextButton.addClass('footer__contact-form-next--is-visible');
  });

  nextButton.on('click', function(event) {
    event.preventDefault();
    if(validateInput(event)) {
      nextInput(event);
      if(step === total + 1) {
        submitInput(event);
      }
    }
  });

  $(document).on('keydown', function(event) {
    var keyCode = event.keyCode;
		// enter
		if( keyCode === 13 ) {
      event.preventDefault();
      if(validateInput(event)) {
        nextInput(event);
        if(step === total + 1) {
          submitInput(event);
        }
      }
		}
  });



});
