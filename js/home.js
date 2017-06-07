(function() {
  $(document).ready(function() {

    var videoHeight = $('.video').height();
    var fixed = 'header';
    var notfixed = 'header-scroll';
    var nav = $('header');
    var hidden = 'hidden';
    var topnavlinks = $('.navbar-top > .links');
    var bottomnavlinks = $('.navbar-bottom > .links');
    var bottomnavimg = $('.navbar-bottom img');
    var section = $('section');

    var scrollHandler = function() {
      // console.log('scrl', this)
      if ( $(this).scrollTop() > videoHeight && $(this).width() > 768) {
        nav.addClass(fixed);
        nav.removeClass(notfixed);
        section.css('marginTop','105px');
      } else {
        section.css('marginTop','0');
        nav.addClass(notfixed);
        nav.removeClass(fixed);
      }

      if ($(this).scrollTop() > 150 ) {
        topnavlinks.removeClass(hidden);
        bottomnavlinks.removeClass(hidden);
        bottomnavimg.removeClass(hidden);
      } else {
        topnavlinks.addClass(hidden);
        bottomnavlinks.addClass(hidden);
        bottomnavimg.addClass(hidden);
      }
    }

    $(window).resize(function() {
      if ( $(this).width() > 768 ) {
        $(this).on('scroll', scrollHandler)
        if ( $(this).scrollTop() < 150 ) {
          nav.removeClass(fixed);
          nav.addClass(notfixed);
          topnavlinks.addClass(hidden);
          bottomnavimg.addClass(hidden);
          bottomnavlinks.addClass(hidden);
        }
      } else {
        $(this).off('scroll');
        nav.addClass(fixed);
        nav.removeClass(notfixed);
        bottomnavlinks.removeClass(hidden);
        bottomnavimg.removeClass(hidden);
      }
    })

    if ( $(window).width() > 768 ) {
      bottomnavimg.addClass(hidden);
      $(window).scroll(scrollHandler)
    } else {
      nav.removeClass(notfixed);
      nav.addClass(fixed);
      bottomnavimg.removeClass(hidden);
    }
  })
})()

