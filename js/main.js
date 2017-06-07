(function() {
  $(document).ready(function() {
    var sidenav = $('#sidenav');
    var navbarToggle = $('#navbar-toggle');
    var block = $('.block');
    var body = $('body');

    // show mobile sidenav
    navbarToggle.on('click', function() {
      sidenav.css('right', 0);
      block.css('display', 'inline');
      body.css('overflow-y','hidden');
    })
    // close mobile sidenav
    block.on('click', function() {
      sidenav.css('right', '-200px');
      block.css('display', 'none');
      body.css('overflow-y','auto');
    })

    $(window).resize(function() {
      if ( $(this).width() > 768 ) {
        sidenav.css('right', '-200px');
        block.css('display', 'none');
        body.css('overflow-y','auto');
      }
    })
  })
})()
