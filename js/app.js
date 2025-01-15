/**
 * Table of contents
 * -----------------------------------
 * 1.0 JQUERY WINDOW LOAD FUNCTION
	* 1.1 PRELOADER
 * 2.0 JQUERY DOCUMENT READY FUNCTION
	* 2.1 NAVBAR FIXED ON SCROLL
	* 2.2 ONE PAGE NAVIGATION
	* 2.3 MAGNIFIC POPUP
	* 2.4 MAGNIFIC POPUP PORTOLIOS
	* 2.5 EMAIL ADDRESS VAILDATION FUNCTION
 ==================
 *
 */
(function($) {
    "use strict"; // this function is executed in strict mode
    /* =================================
       1.0 JQUERY WINDOW LOAD FUNCTION
    =================================== */
    $(window).on( 'load', function() {
        /******************** 1.1 PRELOADER ********************/
        // will first fade out the loading animation
        $(".preloader").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".magnifier").delay(1000).fadeOut("slow");
    });
    /* =================================
       2.0 JQUERY DOCUMENT READY FUNCTION
    =================================== */
    $(document).ready(function() {
        /******************** 2.1 NAVBAR FIXED ON SCROLL ********************/
        $(document).on('scroll', function() {
            var activeClass = 'navbar-fixed',
                ActiveID = '.header',
                scrollPos = $(this).scrollTop();

            if (scrollPos > 0) {
                $(ActiveID).addClass(activeClass);
            } else {
                $(ActiveID).removeClass(activeClass);
            }
        });
		/******************** 2.2 ONE PAGE NAVIGATION ********************/
		$('.navbar-nav-top').onePageNav({
			currentClass: 'active',
			scrollOffset: 74,
		});
        /******************** 2.3 MAGNIFIC POPUP ********************/
        $('.gallery-popup').magnificPopup({
            type: 'image',
            removalDelay: 500,
        });
        /******************** 2.4 MAGNIFIC POPUP PORTOLIOS ********************/
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });

        /******************** 2.5 EMAIL ADDRESS VAILDATION FUNCTION ********************/
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        };
        
    });
})(jQuery);