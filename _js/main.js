document.addEventListener('DOMContentLoaded', function (event) {
  var typeTitle = function (element, strings) {
    var typed = new Typed(element, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 33,
      smartBackspace: true,
      showCursor: false
    })
  }

  if (document.querySelector('.header__title.header__title--type')) {
    typeTitle('.header__title.header__title--type', ['var hello = ', 'Joel Mercier<br>Développeur web'])
  }

  // document.getElementById('barba__wrapper').addEventListener('click', 'a[href*="#"]:not([href="#"])', function () {
  //   if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
  //     var target = $(this.hash)
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000)
  //       return false
  //     }
  //   }
  // })

  var wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // not default
    live: true        // default
  })

  wow.init()

  var wowskills = new WOW({
    boxClass: 'skills__icon',
    animateClass: 'skills__icon--animate',
    offset: 0,
    mobile: true,
    live: true
  })

  wowskills.init()

  function isHighDensity () {
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3))
  }

  document.getElementById('barba__wrapper').addEventListener('mouseover', function portfolioMouseEnterHandler (e) {
    if (e.target.classList.contains('portfolio__link')) {
      console.log('mouseover')
      var currentImage = document.querySelector('.portfolio__image')
      var portfolioImg = e.target.parentNode.getAttribute('data-img')
      var portfolioImgName = portfolioImg.split('.').shift()
      var portfolioImgExt = portfolioImg.split('.').pop()
      if (isHighDensity()) {
        currentImage.style.backgroundImage = 'url(img/portfolio/covers/' + portfolioImgName + '@2x.' + portfolioImgExt + ')'
      } else {
        currentImage.style.backgroundImage = 'url(img/portfolio/covers/' + portfolioImgName + '@1x.' + portfolioImgExt + ')'
      }
      currentImage.classList.remove('animated', 'fade-out')
      currentImage.classList.add('animated', 'fade-in')
    }
  })

  var portfolioLinks = document.querySelectorAll('.portfolio__link')
  for (var i = 0; i < portfolioLinks.length; i++) {
    portfolioLinks[i].addEventListener('mouseleave', function portfolioMouseOutHandler () {
      console.log('mouseover')
      var currentImage = document.querySelector('.portfolio__image')
      var animationEnd = whichAnimationEvent()
      currentImage.classList.remove('animated', 'fade-in')
      currentImage.classList.add('animated', 'fade-out')
      currentImage.addEventListener(animationEnd, function (e) {
        currentImage.style.backgroundImage = ''
        e.target.removeEventListener(e.type, portfolioMouseOutHandler())
      })
    })
  }
  // document.getElementById('barba__wrapper').addEventListener('mouseout', function portfolioMouseOutHandler () {
  //   console.log(event)
  //   event.stopPropagation()
  //   if (event.target.classList.contains('portfolio__link')) {
  //     var currentImage = document.querySelector('.portfolio__image')
  //     var animationEnd = whichAnimationEvent()
  //     currentImage.classList.remove('animated', 'fade-in')
  //     currentImage.classList.add('animated', 'fade-out')
  //     currentImage.addEventListener(animationEnd, function (e) {
  //       currentImage.style.backgroundImage = ''
  //       e.target.removeEventListener(e.type, portfolioMouseOutHandler())
  //     })
  //   }
  // })
  // $('#barba__wrapper').on('mouseleave', '.portfolio__link', function (event) {
  //   var currentImage = $('.portfolio__image')
  //   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  //   currentImage.stop().fadeOut(500)
  //   currentImage.one(animationEnd, function () {
  //     currentImage.css('background-image', '')
  //   })
  // })

  // BarbaJS plugin init
  Barba.Pjax.Dom.wrapperId = 'barba__wrapper'
  Barba.Pjax.Dom.containerClass = 'barba__container'
  Barba.Pjax.ignoreClassLink = 'barba__link--ignored'

  // var FadeTransition = Barba.BaseTransition.extend({
  //   start: function () {
  //     /**
  //      * This function is automatically called as soon the Transition starts
  //      * this.newContainerLoading is a Promise for the loading of the new container
  //      * (Barba.js also comes with an handy Promise polyfill!)
  //      */
  //
  //     // As soon the loading is finished and the old page is faded out, let's fade the new page
  //     Promise
  //       .all([this.newContainerLoading, this.fadeOut()])
  //       .then(this.fadeIn.bind(this))
  //   },
  //
  //   fadeOut: function () {
  //     /**
  //      * this.oldContainer is the HTMLElement of the old Container
  //      */
  //
  //     return $(this.oldContainer).animate({ opacity: 0 }).promise()
  //   },
  //
  //   fadeIn: function () {
  //     /**
  //      * this.newContainer is the HTMLElement of the new Container
  //      * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
  //      * Please note, newContainer is available just after newContainerLoading is resolved!
  //      */
  //
  //     var _this = this
  //     var $el = $(this.newContainer)
  //
  //     $(this.oldContainer).hide()
  //
  //     $el.css({
  //       visibility: 'visible',
  //       opacity: 0
  //     })
  //
  //     window.scrollTo(0, 0)
  //
  //     $el.animate({ opacity: 1 }, 400, function () {
  //       /**
  //        * Do not forget to call .done() as soon your transition is finished!
  //        * .done() will automatically remove from the DOM the old Container
  //        */
  //       _this.done()
  //     })
  //   }
  // })

  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  // Barba.Pjax.getTransition = function () {
  //   /**
  //    * Here you can use your own logic!
  //    * For example you can use different Transition based on the current page or link...
  //    */
  //
  //   return FadeTransition
  // }

  Barba.Prefetch.init()
  Barba.Pjax.start()

  Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
    console.log('newPageReady')
    if (document.querySelector('.header__title.header__title--type')) {
      typeTitle('.header__title.header__title--type', ['var hello = ', 'Joel Mercier<br>Développeur web'])
    }
    var steps = document.querySelector('.footer__contact-form-steps')
    if (steps !== null) {
      steps.textContent = step + ' / ' + total
    }
    var currentUrlArray = currentStatus.url.split('/')
    if (currentUrlArray.indexOf('about') !== -1) {
      document.querySelector('body').classList.remove('works')
    } else if (currentUrlArray.indexOf('blog') !== -1) {
      document.querySelector('body').classList.remove('works')
      if (document.getElementById('#disqus_thread')) {
        disqusLoader('#disqus_thread', {
          scriptUrl: '//jomercier.disqus.com/embed.js',
          disqusConfig: function () {
            this.page.title = page.title
            this.page.url = page.url
            this.page.identifier = page.identifier
          }
        })
      }
    } else if (currentUrlArray[currentUrlArray.length - 2] === 'works') {
      document.querySelector('body').classList.add('works')
      worksList = []
      var portfolioItems = document.querySelectorAll('.portfolio__hero_item')
      for (var i = 0; i < portfolioItems.length; i++) {
        worksList.push(portfolioItems[i].getAttribute('id'))
      }
      currentWork = worksList.slice(-1).pop()
    } else {
      document.querySelector('body').classList.remove('works')
    }
    document.querySelector('.nav-mobile').classList.remove('nav-mobile--is-visible')
    ga('send', 'pageview', currentStatus.url)
  })

  Barba.Dispatcher.on('transitionCompleted', function (currentStatus, prevStatus) {
    var currentUrlArray = currentStatus.url.split('/')
    if (currentUrlArray.indexOf('blog') !== -1) {
      if (document.querySelector('.post__content')) {
        readingTime(document.querySelector('.post__content').textContent, 220, document.querySelector('.post__readtime'))
      }
    }
  })

  Barba.Dispatcher.on('initStateChange', function () {

  })

  var form = document.getElementById('contactForm')
  var total = document.querySelectorAll('.footer__contact-form-item').length
  var step = 1
  var nextButton = document.querySelector('.footer__contact-form-next')
  var error = document.querySelector('.footer__contact-form-error')
  var itemList = document.querySelectorAll('.footer__contact-form-item')
  var steps = document.querySelector('.footer__contact-form-steps')
  if (steps !== null) {
    steps.textContent = step + ' / ' + total
  }

  function isEmail (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return regex.test(email)
  }

  var validateInput = function (event) {
    var activeInput = document.querySelector('.footer__contact-form-item--current input, .footer__contact-form-item--current textarea')

    if (activeInput.type === 'text' && activeInput.value) {
      return true
    } else if (activeInput.type === 'email' && isEmail(activeInput.value)) {
      return true
    } else if (activeInput.tagName === 'TEXTAREA' && activeInput.value) {
      return true
    } else {
      var message
      if (step === 1) {
        message = 'Veuillez indiquer un nom afin que je puisse vous identifier'
      } else if (step === 2) {
        message = 'Votre adresse email n\'est pas valide, je ne pourrais pas vous recontacter'
      } else if (step === 3) {
        message = 'Veuillez indiquer un message, sinon quel est le but de ce formulaire ?'
      }
      error.textContent = message
      return false
    }
  }

  var nextInput = function (event) {
    error.textContent = ''
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i].classList.contains('footer__contact-form-item--current')) {
        itemList[i].classList.remove('footer__contact-form-item--current')
        itemList[i].nextElementSibling.classList.add('footer__contact-form-item--current').focus()
        document.querySelector('.footer__contact-form-progress').style.width = step * (100 / total) + '%'
        if (step <= total) {
          step++
          steps.textContent = step + ' / ' + total
        }
        return false
      }
    }
  }

  var submitInput = function (event) {
    nextButton.classList.remove('footer__contact-form-next--is-visible')

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      document.getElementById('#contactName').value = ''
      document.getElementById('#contactEmail').value = ''
      document.getElementById('#contactMessage').value = ''
      document.querySelectorAll('.footer__contact-form-list, .footer__contact-form-controls').style.display = 'none'
      document.querySelector('.footer__contact-form-final').textContent = response
      document.querySelector('.footer__contact-form-final').classList.add('footer__contact-form-final--is-visible', 'animated', 'fade-in')
    }, function (response) {
      for (var i = 0; i < itemList.length; i++) {
        itemList[i].classList.remove('footer__contact-form-item--current')
      }
      itemList[0].classList.add('footer__contact-form-item--current')
      step = 1
      steps.textContent = step + ' / ' + total
      error.textContent = response.statusText
    })
  }

  if (document.querySelector('.footer__contact-form-item--current input') !== null) {
    document.querySelector('.footer__contact-form-item--current input').addEventListener('focus', function () {
      nextButton.classList.add('footer__contact-form-next--is-visible')
    })
  }

  if (nextButton !== null) {
    nextButton.addEventListener('click', function (event) {
      event.preventDefault()
      if (validateInput(event)) {
        nextInput(event)
        if (step === total + 1) {
          submitInput(event)
        }
      }
    })
  }

  document.addEventListener('keydown', function (event) {
    var keyCode = event.keyCode
    if (keyCode === 13) {
      event.preventDefault()
      if (validateInput(event)) {
        nextInput(event)
        if (step === total + 1) {
          submitInput(event)
        }
      }
    }
  })

  var mobileNav = document.querySelector('.nav-mobile')

  var mobileNavTriggers = document.querySelectorAll('.nav-mobile__show, .nav-mobile__hide, .nav-mobile__link')
  for (var i = 0; i < mobileNavTriggers.length; i++) {
    mobileNavTriggers[i].addEventListener('click', function () {
      mobileNav.classList.add('nav-mobile--animatable')
      mobileNav.classList.add('nav-mobile--is-visible')
      mobileNav.addEventListener('transitionend', function handleMobileNavTransitionEnd (e) {
        mobileNav.classList.remove('nav-mobile--animatable')
        e.target.removeEventListener(e.type, handleMobileNavTransitionEnd())
      })
    })
  }

  function whichAnimationEvent () {
    var t
    var el = document.createElement('fakeelement')
    var transitions = {
      'animation': 'animationend',
      'OAnimation': 'oanimationend',
      'MsAnimation': 'msAnimationEnd',
      'WebkitAnimation': 'webkitAnimationEnd'
    }

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t]
      }
    }
  }

  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassiveEventListener = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassiveEventListener = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}
  var animationEnd = whichAnimationEvent()
  var worksList = []
  Array.prototype.map.call(document.querySelectorAll('.portfolio__hero_item'), function (navItem) {
    worksList.push(navItem.getAttribute('id'))
  })
  var currentWork = worksList.slice(-1).pop()
  var animationIsRunning = false

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('portfolio__nav_item') && !animationIsRunning) {
      handleWorksNav(currentWork, e.target.getAttribute('data-to'), e.target)
    }
  })

  // document.addEventListener('wheel', function (e) {
  //   if (document.querySelector('portfolio__hero') !== undefined && !animationIsRunning) {
  //     window.requestAnimationFrame(function () {
  //       var currentIndex = worksList.indexOf(currentWork)
  //       var nextIndex = 0
  //       console.log(e)
  //       if (e.deltaY > 100) {
  //         nextIndex = currentIndex - 1
  //         if (worksList[nextIndex] === undefined) {
  //           nextIndex = worksList.length - 1
  //         }
  //         console.log('scroll down to ' + worksList[nextIndex])
  //         handleWorksNav(currentWork, worksList[nextIndex], document.querySelector('.portfolio__nav_item[data-to="' + worksList[nextIndex] + '"]'))
  //       } else if (e.deltaY > -100) {
  //         nextIndex = currentIndex + 1
  //         if (worksList[nextIndex] === undefined) {
  //           nextIndex = 0
  //         }
  //         console.log('scroll up to ' + worksList[nextIndex])
  //         handleWorksNav(currentWork, worksList[nextIndex], document.querySelector('.portfolio__nav_item[data-to="' + worksList[nextIndex] + '"]'))
  //       }
  //     })
  //   }
  // }, supportsPassiveEventListener ? {passive: true} : false)

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-portfolio-nav-next') && !animationIsRunning) {
      e.preventDefault()
      var currentIndex = worksList.indexOf(currentWork)
      var nextIndex = currentIndex - 1
      if (worksList[nextIndex] === undefined) {
        nextIndex = worksList.length - 1
      }
      handleWorksNav(currentWork, worksList[nextIndex], document.querySelector('.portfolio__nav_item[data-to="' + worksList[nextIndex] + '"]'))
    }
  })

  if (document.querySelector('.portfolio__hero') !== null) {
    document.querySelector('body').classList.add('works')
    var hammertime = new Hammer(document.querySelector('.portfolio__hero'))
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
    hammertime.on('swipedown', function (e) {
      console.log('swipedown')
      if (!animationIsRunning) {
        var currentIndex = worksList.indexOf(currentWork)
        var nextIndex = currentIndex + 1
        if (worksList[nextIndex] === undefined) {
          nextIndex = 0
        }
        handleWorksNav(currentWork, worksList[nextIndex], document.querySelector('.portfolio__nav_item[data-to="' + worksList[nextIndex] + '"]'))
      }
    })

    hammertime.on('swipeup', function (e) {
      console.log('swipeup')
      if (!animationIsRunning) {
        var currentIndex = worksList.indexOf(currentWork)
        var nextIndex = currentIndex - 1
        if (worksList[nextIndex] === undefined) {
          nextIndex = worksList.length - 1
        }
        handleWorksNav(currentWork, worksList[nextIndex], document.querySelector('.portfolio__nav_item[data-to="' + worksList[nextIndex] + '"]'))
      }
    })
  }

  function handleWorksNav (from, to, activeNavItem) {
    if (from === to) {
      return false
    } else {
      animationIsRunning = true
      var navItems = document.querySelectorAll('.portfolio__nav_item')
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('portfolio__nav_item--current')
      }
      activeNavItem.classList.add('portfolio__nav_item--current')
      currentWork = to
      var currentWorkEl = document.getElementById(from)
      var destinationWorkEl = document.getElementById(to)
      currentWorkEl.classList.add('fade-out', 'animated')
      destinationWorkEl.classList.add('fade-in', 'animated')
      animationEnd && currentWorkEl.addEventListener(animationEnd, function handleWorksAnimationEnd (e) {
        currentWorkEl.classList.remove('fade-out', 'animated')
        var notActivePortfolioHeroItems = document.querySelectorAll('.portfolio__hero_item:not(#' + to + ')')
        for (var i = 0; i < notActivePortfolioHeroItems.length; i++) {
          notActivePortfolioHeroItems[i].classList.remove('fade-in', 'animated')
        }
        animationIsRunning = false
        e && e.target.removeEventListener(e.type, handleWorksAnimationEnd)
      })
    }
  }

  document.getElementById('barba__wrapper').addEventListener('click', function (e) {
    if (e.target.classList.contains('project__design-showcase--text') && window.matchMedia('(max-width:960px)').matches) {
      e.target.classList.toggle('project__design-showcase--is-open')
    }
  })

  var readingTime = function (text, readingSpeed, dest) {
    var wordsPerSecond = readingSpeed / 60
    var totalWords = text.trim().split(/\s+/g).length
    var totalTimeSeconds = totalWords / wordsPerSecond
    var totalTimeMinutes = Math.round(totalTimeSeconds / 60)
    if (totalTimeMinutes === 0) {
      totalTimeMinutes = 'Moins d\'une minute'
    } else if (totalTimeMinutes === 1) {
      totalTimeMinutes = totalTimeMinutes + ' minute'
    } else {
      totalTimeMinutes = totalTimeMinutes + ' minutes'
    }
    dest.innerHTML = dest.innerHTML + totalTimeMinutes
  }
  if (document.querySelector('.post__content')) {
    readingTime(document.querySelector('.post__content').textContent, 220, document.querySelector('.post__readtime'))
  }
})
