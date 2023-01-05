$(document).ready(function(){
    $("#commentForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            comment: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: 'The Name field is mendatory!',
                minlength: 'Name length should be bigger than 2 symbols!'
            },
            email: {
                required: 'The email field is mendatory'
            },
            comment: {
                required : 'The comment field is mendatory',
                minlength: 'Message length should be bigger than 5 symbols'
            }
        }
    });
    $("commentFormFooter").validate();
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

const slider = document.querySelector('#swiper');
let mySwiper = new Swiper(slider, {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});