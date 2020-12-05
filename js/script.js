$(document).ready(function () {


    $("html").niceScroll();

    $('#testmonials-carousel').carousel(function () {
        Interval: 100
    });

    $('#myslide').carousel(function () {
        Interval: 500
    });
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    var colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor", "red").end()
        .eq(1).css("backgroundColor", "yellow").end()
        .eq(2).css("backgroundColor", "green").end()
        .eq(3).css("backgroundColor", "blue").end()
        .eq(4).css("backgroundColor", "pink").end()
        .eq(5).css("backgroundColor", "purple").end();

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"))
    });
    $(window).load(function () {
        /* h1 then screen*/

        $(".loading_overlay .spinner").fadeOut(4000, function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(4000, function () {

                $(this).remove();//eomve from dom
            });
        });


    })
    var scrolltop = $("#scroll-top");
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 700) {
            scrolltop.show();
        }
        else {
            scrolltop.hide();
        }
        scrolltop.click(function () {
            $("html,body").animate({ scrollTop: 0 }, 600);
        });
    });
});