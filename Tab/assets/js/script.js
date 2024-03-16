$(function () {
    $(".tab-menu .menu li a").eq(1).click(function (e) {
        e.preventDefault();
        $(".tab").eq(0).removeClass("active");
        $(".tab").eq(2).removeClass("active");
        $(".tab").eq(1).addClass("active");

    })
    $(".tab-menu .menu li a").eq(2).click(function (e) {
        e.preventDefault();
        $(".tab").eq(0).removeClass("active");
        $(".tab").eq(1).removeClass("active");
        $(".tab").eq(2).addClass("active");

    })
    $(".tab-menu .menu li a").eq(0).click(function (e) {
        e.preventDefault();
        $(".tab").eq(2).removeClass("active");
        $(".tab").eq(1).removeClass("active");
        $(".tab").eq(0).addClass("active");

    })
});