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


    /*
    * navbar handler begin
    */

    // ensure navbar is visible if page refreshed below top
    if ( $(this).scrollTop() >= 150 ) {
      console.log($(this).scrollTop())
      nav.addClass(fixed);
      nav.removeClass(notfixed);
      bottomnavlinks.removeClass(hidden);
      bottomnavimg.removeClass(hidden);
    }


    var scrollHandler = function() {
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
    /*
    * navbar end
    */

    /*
    * solutions section begin
    */

    var printingDesc = ("<div id='solutions-desc'><div id='print'><div class='img-bg'></div><div class='title'>Printing</div><div class='desc'><p>When it comes to printing, we have virtually limitless capabilities!  Our team’s many years of print experience enables us to deliver the highest quality product and the most competitive pricing. From brochures to banners and postcards to packaging and beyond - our capabilities include:</p><ul><li>Web, Sheet fed and Digital Printing</li><li>Silk Screening</li><li>Large Format Printing</li><li>Flexography Label Printing</li><li>Embossing, Foil Stamping, Die Cutting</li><li>Distribution and Kitting Services</li></ul><p>We utilize state-of-the-art equipment and can employ special printing techniques such as specialized coatings, embossing, foil stamping and die cutting and more to make your project stand out from the competition.  Here are just a few examples of printed collateral we can produce for you:</p><ul><li>Annual Reports</li><li>Brochures</li><li>Binders &amp; Presentation Folders</li><li>Calendars</li><li>Catalogs</li><li>Newsletters </li><li>Stationary Suites: Envelopes, Letterhead, Notepads</li><li>Forms</li><li>Labels</li><li>Point of Purchase Displays</li><li>Retail Packaging</li><li>Trade Show Graphics &amp; Give Aways</li><li>Signage, Posters, Banners </li><li>Vehicle Wraps</li><li>Video Brochures</li></ul><a href='./contact.html'>Contact Us</a></div></div></div>");
    var promotionalDesc = ('<div id="solutions-desc">Promotional</div>');
    var mailingDesc = ('<div id="solutions-desc">mailing</div>');
    var packagingDesc = ('<div id="solutions-desc">packaging</div>');
    var signageDesc = ('<div id="solutions-desc">signage</div>');
    var distributionDesc = ('<div id="solutions-desc">distribution</div>');
    var marketingDesc = ('<div id="solutions-desc">marketing</div>');

    $('.solutions-menu-item  .triangle:first').show();
    $('.solutions-menu-item').on('mouseenter', function() {
      var elem = $(this);
      var triangle = elem.children('.triangle');
      var bg = $('#solutions-bg');
      bg.removeClass();
      if (elem[0].id === 'printing') {
        bg.addClass('dBlue');
        $('#solutions-desc').replaceWith(printingDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#21CE99'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else if (elem[0].id === 'promotional') {
        bg.addClass('red');
        $('#solutions-desc').replaceWith(promotionalDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#DA4E28'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else if (elem[0].id === 'mailing') {
        bg.addClass('yellow');
        $('#solutions-desc').replaceWith(mailingDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#E0DF6B'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else if (elem[0].id === 'packaging') {
        bg.addClass('yellow');
        $('#solutions-desc').replaceWith(packagingDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#E0DF6B'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else if (elem[0].id === 'signage') {
        bg.addClass('yellow');
        $('#solutions-desc').replaceWith(signageDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#E0DF6B'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else if (elem[0].id === 'distribution') {
        bg.addClass('yellow');
        $('#solutions-desc').replaceWith(distributionDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#E0DF6B'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      } else {
        bg.addClass('green');
        $('#solutions-desc').replaceWith(marketingDesc);
        // $('#solutions-desc > a').on('mouseenter', function() {$(this).css('color', '#093E4F'); });
        // $('#solutions-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
      }
      $('.solutions-menu-item').removeClass('-active');
      // $('.solutions-menu-item  .triangle').addClass('hidden');
      $('.solutions-menu-item  .triangle').hide();
      triangle.show();
      // triangle.removeClass('hidden');
      elem.addClass('-active');

    })

    /*
    * solutions section end
    */


  })
})()

