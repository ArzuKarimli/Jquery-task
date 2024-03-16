// let leftIcon = document.querySelector(".left-icon");
// let rightIcon = document.querySelector(".right-icon");
// let images = document.querySelectorAll(".images img");



// function rightSlider() {
//     let activeImage = document.querySelector(".active");
//     activeImage.classList.remove("active");
//     for (const img of images) {
//         img.classList.remove("left");
//         img.classList.add("right");
//     }

//     if (activeImage.nextElementSibling != null) {
//         activeImage.nextElementSibling.classList.add("active");
//     } else {
//         images[0].classList.add("active");
//     }
// }

// function leftSlider() {
//     let activeImage = document.querySelector(".active");
//     activeImage.classList.remove("active", "right");
//     for (const img of images) {
//         img.classList.remove("right");
//         img.classList.add("left");
//     }

//     if (activeImage.previousElementSibling != null) {
//         activeImage.previousElementSibling.classList.add("active", "left");
//     } else {
//         images[images.length - 1].classList.add("active", "left");
//     }
// }

// rightIcon.addEventListener("click", rightSlider);
// leftIcon.addEventListener("click", leftSlider);

$(document).ready(function () {
    $('.right-icon').click(function () {
        var activeImage = $('.active');
        activeImage.removeClass('active');
        $('.images img').removeClass('left').addClass('right');

        if (activeImage.next().length > 0) {
            activeImage.next().addClass('active');
        } else {
            $('.images img:first').addClass('active');
        }
    });

    $('.left-icon').click(function () {
        var activeImage = $('.active');
        activeImage.removeClass('active').removeClass('right').addClass('left');
        $('.images img').removeClass('right');

        if (activeImage.prev().length > 0) {
            activeImage.prev().addClass('active');
        } else {
            $('.images img:last').addClass('active').addClass('left');
        }
    });
});