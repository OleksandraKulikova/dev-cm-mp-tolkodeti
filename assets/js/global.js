jQuery(document).ready(function($) {
    // $(".fancybox").fancybox();
    if($('[type="tel"]')){
        $('[type="tel"]').mask('+38(000)000-00-00');
    }else{
        null;
    }

    $(".bottom-animation a").on('click', function(event){
        event.preventDefault();
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        'href': $(this).attr('src'),
                    });
                };
            };
        });
    };

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


});


if (document.querySelector('textarea')) {
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function() {
        if (this.scrollTop > 0) {
            this.style.height = this.scrollHeight + "px";
        }
    });
}





const menu = document.querySelector('.header-nav__menu');
const openBtn = document.querySelector('.header-nav__burger');
const closeBtn = document.querySelector('.header-nav__menu-close');

let animateContent = menu.querySelectorAll('[data-animate]')
let delay = 500;


function clickBurger() {
    openBtn.addEventListener('click', () => {
        menu.classList.add('show');
        animateContent.forEach(elem => {
            elem.style.opacity = "1";
        })
    });
}
clickBurger()
//https://learn.javascript.ru/async-await

closeBtn.addEventListener('click', () => {
    animateContent.forEach(elem => {
        elem.style.opacity = "0";
        setTimeout(() => {
            menu.classList.remove('show')
        }, delay);
    });
})








var title = document.querySelectorAll('[data-video]');
var videoUrl = document.querySelectorAll('.set-video-url');

var video1 = document.querySelector('.video-1');
var video2 = document.querySelector('.video-2');
var video3 = document.querySelector('.video-3');



function remove() {
    document.querySelectorAll('.faq__video .fullscreen-bg__video').forEach(element => element.classList.remove('active'));
};
$('[data-video]').siblings().find('.accordion-body').slideUp();
$('[data-video]').on('click', function() {
    var attr = this.getAttribute('data-video');
    if (attr == 1) {
        remove();
        video1.classList.add('active');
    }

    if (attr == 2) {
        remove();
        video2.classList.add('active');
    }

    if (attr == 3) {
        remove();
        video3.classList.add('active');
    }

    $(this).toggleClass('active').find('.accordion-body').slideToggle()
    $(this).siblings().find('.accordion-body').slideUp();
    $(this).siblings().removeClass('active')
})


let titleAccrordion = document.querySelectorAll('.map-accordion [data-bs-toggle]')
function destroyAttr(){titleAccrordion.forEach(e => e.removeAttribute('data-bs-toggle'))}

(window.matchMedia("(max-width: 768px)").matches) ? destroyAttr() : undefined;


if(window.matchMedia('(min-width: 991px)').matches) {
    const blockServices = document.querySelector('.services');
    blockServices ? installSnipet() : undefined;
    
    function installSnipet() {
        let itemLink = document.querySelectorAll('.service__item');
        itemLink.forEach(item=>{
            let styles = item.getAttribute('data-styles');
            console.log(styles);
    
            item.addEventListener("mouseenter", function() {
                blockServices.setAttribute('style', styles);
                blockServices.classList.add('active');
            })
        })
    }
}


