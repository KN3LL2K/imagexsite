(function() {
  $(document).ready(function() {


    var $solNav = $('#solutions-nav');
    var $window = $(window);
    var $solMenuItem = $('.solutions-menu-item');
    /*
    * solutions section begin
    */

    var solutions = {
      printing: $('#print'),
      promotional: $('#promo'),
      mailing: $('#direct-mail'),
      packaging: $('#package'),
      signage: $('#sign'),
      distribution: $('#distrib'),
      marketing: $('#dig-marketing')
    };    

    $solMenuItem.on('mouseenter', function() {
      var elem = $(this);
      var id = elem[0].id;

      for (var each in solutions) {
        if (each === id) {
          solutions[each].show();
        } else {
          solutions[each].hide();
        }
      }
      
      $solMenuItem.removeClass('-active');
      elem.addClass('-active');
    })

    $window.resize(function() {
      if ($(this).width() > 1024 ) {
        $solNav.show();
        for (var each in solutions) {
          if (each === 'printing') {
            solutions[each].show();
          } else {
            solutions[each].hide();
          }
        }
      } else {
        $solNav.hide();
        for (var each in solutions) {
          solutions[each].show();
        }
      }
    })

    if ($window.width() <= 1024 ) {
      $solNav.hide();
      for (var each in solutions) {
        solutions[each].show();
      }
    }

    /*
    * solutions section end
    */


  })
})()

