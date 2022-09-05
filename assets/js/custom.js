jQuery(document).ready(function($) {
    $('.certificates-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
    $('.main-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // progress bar
    function setProgress(slider, index) {
        let count = $(slider).slick('getSlick').slideCount
        let calc = ((index + 1) / (count)) * 100;
        $(slider).find('.progress-line-slick').css('width', calc + '%')
    }

    let slidersProgress = $('.slider-progress');
    slidersProgress.map((i, item) => {
        console.log(item)
        $(item).append(`<div class="progress-bar-slick"><div class="progress-line-slick"></div></div>`)
        $(item).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            setProgress(item, nextSlide);
        });
        setProgress(item, 0);
    })


    $('.slider-advantages').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // autoplay: true
    });

    $('.slider-doctors').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});