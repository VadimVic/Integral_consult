$(document).ready(function () {

$('.service-links a').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.service-links a');
    console.log(index);

    $('.service-links a').removeClass('active');
    $(this).addClass('active');

    $('.service-info').removeClass('service-info-visible');
    $('.service-info').eq(index).addClass('service-info-visible');
  });


  //slider

  $(function() {
				
    var Page = (function() {

      var $navArrows = $( '#nav-arrows' ).hide(),
        $navOptions = $( '#nav-options' ).hide(),
        $shadow = $( '#shadow' ).hide(),
        slicebox = $( '#sb-slider' ).slicebox( {
          onReady : function() {


            $navArrows.show();
            $navOptions.show();
            $shadow.show();

          },
          orientation : 'h',
          cuboidsCount : 3
        } ),
        
        init = function() {

          initEvents();
          
        },
        initEvents = function() {

          // add navigation events
          $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

          } );

          $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

          } );

          $( '#navPlay' ).on( 'click', function() {
            
            slicebox.play();
            return false;

          } );

          $( '#navPause' ).on( 'click', function() {
            
            slicebox.pause();
            return false;

          } );

        };

        return { init : init };

    })();

    Page.init();

  });

});

