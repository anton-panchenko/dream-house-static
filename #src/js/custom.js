
/*---------------------AOS-------------------------*/

AOS.init({
    offset: 150,
    // duration: 600,
    // easing: "ease-in-quad",
    // delay: 0,
    disable: "mobile"
});

/*--------------------Owl Carousel-----------------------*/

let owlTeam = $('.team_content__carousel');
owlTeam.owlCarousel({
    items: 4,
    dots: false,
    loop: true,
    margin: 30,
    slideBy: 3,
    responsive: {
        100: {
            items: 1
        },
        650: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

$(".team_next_button").click(function(){
    owlTeam.trigger("next.owl.carousel");
});

$(".team_prev_button").click(function(){
    owlTeam.trigger("prev.owl.carousel");
});

let owlPortfolio = $('.portfolio_content__carousel');
owlPortfolio.owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    margin: 30,
    slideBy: 2,
    responsive: {
        100: {
            items: 1
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$(".portfolio_next_button").click(function(){
    owlPortfolio.trigger("next.owl.carousel");
});

$(".portfolio_prev_button").click(function(){
    owlPortfolio.trigger("prev.owl.carousel");
});

// let owlJokes = $('.jokes_content');
// owlJokes.owlCarousel({
//     items: 2,
//     dots: false,
//     loop: true,
//     margin: 30,
//     slideBy: 2,
//     // smartSpeed: 500,
//     // responsive: {
//     //     100: {
//     //         items: 1
//     //     },
//     //     500: {
//     //         items: 2
//     //     },
//     //     700: {
//     //         items: 3
//     //     },
//     //     800: {
//     //         items: 4
//     //     }
//     // }
// });
//
// $(".jokes_next_button").click(function(){
//     owlJokes.trigger("next.owl.carousel");
// });
//
// $(".jokes_prev_button").click(function(){
//     owlJokes.trigger("prev.owl.carousel");
// });
//
// let owlTestimonials = $('.testimonials_content__carousel');
// owlTestimonials.owlCarousel({
//     items: 3,
//     dots: false,
//     loop: true,
//     margin: 30,
//     slideBy: 2,
//     // smartSpeed: 500,
//     // responsive: {
//     //     100: {
//     //         items: 1
//     //     },
//     //     500: {
//     //         items: 2
//     //     },
//     //     700: {
//     //         items: 3
//     //     },
//     //     800: {
//     //         items: 4
//     //     }
//     // }
// });
//
// $(".testimonials_next_button").click(function(){
//     owlTestimonials.trigger("next.owl.carousel");
// });
//
// $(".testimonials_prev_button").click(function(){
//     owlTestimonials.trigger("prev.owl.carousel");
// });

/*--------------------Nav menu visibility-----------------------*/

let navMenu = document.querySelector('#navMenu');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 10) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }

});

/*---------------------Imask-------------------------*/

let maskOptions = {
    mask: '+{38}(000)-000-00-00'
};

let portfolioPhone = document.getElementById('portfolio_phone');
let leadFormPhone = document.getElementById('leadFormPhone');
let headFormPhone = document.getElementById('headFormPhone');

let mask1 = new IMask(portfolioPhone, maskOptions);
let mask2 = new IMask(leadFormPhone, maskOptions);
let mask3 = new IMask(headFormPhone, maskOptions);

/*---------------------Btns scale-------------------------*/

let scaleBtns = document.querySelectorAll('.btn_scale');

setInterval(() => {
    scaleBtns.forEach(btn => {
        btn.classList.add('active_btn');
    });
}, 5000);

setTimeout(() => {
    setInterval(() => {
        scaleBtns.forEach(btn => {
            btn.classList.remove('active_btn');
        });
    }, 5000);
}, 500);

/*---------------------Magnific Popup-------------------------*/

$('.map-popup-content').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
});

$('.form-popup-content').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    showCloseBtn: false,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
});

$('#humburger').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    showCloseBtn: true,
    alignTop: true,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
});

$('.nav_popup__content_textLinks__item').on('click', () => {
    $('.mfp-close').click();
});

/*---------------------Auto click-------------------------*/

// let isTheFormCalled = false;
// let formCallBtns = document.querySelectorAll('.btn_scale');
// formCallBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         isTheFormCalled = true;
//     });
// });
//
// let autoClick = new Event('click');
// let leadFormBtn = document.querySelector('#leadFormBtn');
//
// setTimeout(() => {
//     if (!isTheFormCalled) {
//         leadFormBtn.dispatchEvent(autoClick);
//     }
// }, 30000);

/*---------------------Forms-------------------------*/

// $("#form").on("submit", function(){
//     $.ajax({
//         url: '/handler.php',
//         method: 'post',
//         dataType: 'html',
//         data: $(this).serialize(),
//         success: function(data){
//             $('#message').html(data);
//         }
//     });
// });