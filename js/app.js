$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

jQuery(document).ready(function ($) {
    $('a.loc').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });

    $('.slider-slick').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true
    });
});

$(document).on('click', '.more-portfolio', function(e){
    e.preventDefault();
    var nevPartners = $('.portfolio-item').clone().attr('id', '');
    $(this).before(nevPartners);
});

