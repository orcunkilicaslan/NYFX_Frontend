
/* Head Big Slider */
$('#headbigsliderowl').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    items:1,
    margin:0,
    autoWidth:false
});
/* Head Big Slider */

/* Features Icons Component */
$('#sitefeaturesiconsowl').owlCarousel({
    loop:false,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    items:6,
    margin:0,
    autoWidth:false
});
/* Features Icons Component */

/* Features Icons Component */
$('#sitefeaturesboxsowl').owlCarousel({
    loop:false,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    items:3,
    margin:45,
    autoWidth:false
});
/* Features Icons Component */

/* Home Instruments Carousel */
$(document).ready(function(){

    $('#HomeInstrumentsCarousel').carousel({
        interval: 20000,
        pause: "hover"
    });

    var clickEvent = false;
    $('#HomeInstrumentsCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slide.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.nav').children().length -1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});
/* Home Instruments Carousel */

/* Loading Info */
// console.log("Custom App Javascript Loading Successful");
/* Loading Info */