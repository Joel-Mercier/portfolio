$( document ).ready(function() {

  var typeTitle = function(element, strings) {
    // typeIt jQuery plugin init
    $(element).typeIt({
      speed: 100,
      lifeLike: true,
      cursor: true,
      autoStart: false
    })
    .tiType(strings[0])
    .tiDelete()
    .tiType(strings[1])
    .tiBreak()
    .tiType(strings[2]); 
  };

  typeTitle('.header__title.type-it', ['var hello = ', 'Joel Mercier', 'Développeur web']);

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

  wowskills = new WOW ({
    boxClass: 'skills__icon',
    animateClass: 'skills__icon--animate',
    offset: 0,
    mobile: true,
    live: true
  });

  wowskills.init();

  function isHighDensity(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
  }

  $('#barba__wrapper').on('mouseover', '.portfolio__link', function(event) {
    var currentImage = $('.portfolio__image');
    var portfolioImg = $(this).parent().data('img');
    var portfolioImgName = portfolioImg.split('.').shift();
    var portfolioImgExt = portfolioImg.split('.').pop();
    if (isHighDensity()) {
      currentImage.css('background-image', 'url(img/portfolio/covers/'+ portfolioImgName + '@2x.'+ portfolioImgExt +')');
    } else {
      currentImage.css('background-image', 'url(img/portfolio/covers/'+ portfolioImgName + '@1x.'+ portfolioImgExt +')');
    }
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

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */

      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */

      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      window.scrollTo(0,0);

      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
        _this.done();
      });
    }
  });

  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
  };

  Barba.Prefetch.init();
  Barba.Pjax.start();

  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    typeTitle('.header__title.type-it', ['var hello = ', 'Joel Mercier', 'Développeur web']);
    var currentUrlArray = currentStatus.url.split('/');
    if($.inArray('about', currentUrlArray) > -1) {
      $('.skills__list:nth-child(2), #expert').connections({
        'class': 'skills__connection skills__connection--expert',
        'within': '.skills__container'
      });

      $('.skills__list:nth-child(3), #intermediate').connections({
        'class': 'skills__connection skills__connection--intermediate',
        'within': '.skills__container'
      });

      $('.skills__list:nth-child(4), #beginner').connections({
        'class': 'skills__connection skills__connection--beginner',
        'within': '.skills__container'
      });

      $(window).on('resize', function() {
        $('.skills__list:nth-child(2), #expert').connections('update');
        $('.skills__list:nth-child(3), #intermediate').connections('update');
        $('.skills__list:nth-child(4), #beginner').connections('update');
      });
    } else if($.inArray('blog', currentUrlArray) > -1) {
      // readingTime($('.post__content').text(), 220, $('.post__readtime'));
    }

    $('.nav-mobile').removeClass('nav-mobile--is-visible');
    ga('send', 'pageview', currentStatus.url);
  });

  Barba.Dispatcher.on('transitionCompleted', function(currentStatus, prevStatus) {
    var currentUrlArray = currentStatus.url.split('/');
    if($.inArray('blog', currentUrlArray) > -1) {
      readingTime($('.post__content').text(), 220, $('.post__readtime'));
    }
  });

  Barba.Dispatcher.on('initStateChange', function() {

  });

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

    if (activeInput.prop('type') === 'text' && activeInput.val()) {
      return true;
    } else if (activeInput.prop('type') === 'email' && isEmail(activeInput.val())) {
      return true;
    } else if (activeInput.is('textarea') && activeInput.val()) {
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
          $('.footer__contact-form-steps').text(step + ' / ' + total);
        }

        return false;
      };
    });
  };

  var submitInput = function(event) {
    nextButton.removeClass('footer__contact-form-next--is-visible');

    $.ajax({
      url: form.prop('action'),
      type: form.prop('method'),
      data: form.serialize(),
      success: function(response) {
        $('#contactName').val('');
        $('#contactEmail').val('');
        $('#contactMessage').val('');
        $('.footer__contact-form-list, .footer__contact-form-controls').css({display:'none'});
        $('.footer__contact-form-final').text(response).addClass('footer__contact-form-final--is-visible animated fade-in');
      },
      error: function(response) {
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

  $('.nav-mobile__show').on('click', function(){
    $('.nav-mobile').addClass('nav-mobile--animatable');
    $('.nav-mobile').addClass('nav-mobile--is-visible');
    $('.nav-mobile').on('transitionend', function(){
      $('.nav-mobile').removeClass('nav-mobile--animatable');
    });
  });

  $('.nav-mobile__hide').on('click', function(){
    $('.nav-mobile').addClass('nav-mobile--animatable');
    $('.nav-mobile').removeClass('nav-mobile--is-visible');
    $('.nav-mobile').on('transitionend', function(){
      $('.nav-mobile').removeClass('nav-mobile--animatable');
    });
  });

  $('.nav-mobile__link').on('click', function(){
    $('.nav-mobile').addClass('nav-mobile--animatable');
    $('.nav-mobile').removeClass('nav-mobile--is-visible');
    $('.nav-mobile').on('transitionend', function(){
      $('.nav-mobile').removeClass('nav-mobile--animatable');
    });
  });

  $('#barba__wrapper').on('click', '.project__design-showcase--text', function(){
    if(window.matchMedia('(max-width:960px)').matches){
      $(this).toggleClass('project__design-showcase--is-open');
    }
  });

  $('.skills__list:nth-child(2), #expert').connections({
    'class': 'skills__connection skills__connection--expert',
    'within': '.skills__container'
  });

  $('.skills__list:nth-child(3), #intermediate').connections({
    'class': 'skills__connection skills__connection--intermediate',
    'within': '.skills__container'
  });

  $('.skills__list:nth-child(4), #beginner').connections({
    'class': 'skills__connection skills__connection--beginner',
    'within': '.skills__container'
  });

  $(window).on('resize', function() {
    $('.skills__list:nth-child(2), #expert').connections('update');
    $('.skills__list:nth-child(3), #intermediate').connections('update');
    $('.skills__list:nth-child(4), #beginner').connections('update');
  });

  var readingTime = function(text, readingSpeed, dest) {
    var wordsPerSecond = readingSpeed / 60;
    var totalWords = text.trim().split(/\s+/g).length;
    var totalTimeSeconds = totalWords / wordsPerSecond;
    var totalTimeMinutes = Math.round(totalTimeSeconds / 60);
    if(totalTimeMinutes === 0) {
      totalTimeMinutes = 'Moins d\'une minute';
    } else if(totalTimeMinutes === 1) {
      totalTimeMinutes = totalTimeMinutes + ' minute';
    } else {
      totalTimeMinutes = totalTimeMinutes + ' minutes';
    }
    dest.append(totalTimeMinutes);
  }

  readingTime($('.post__content').text(), 220, $('.post__readtime'));

});
