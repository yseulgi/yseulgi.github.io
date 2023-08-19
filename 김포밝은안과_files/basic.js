$(document).ready(function () {
    /*모바일 높이*/
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
    $(window).resize(function () {
        document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
    });

    $(".sub_visual").addClass('on');

    new WOW().init();

    $('select').niceSelect();


    $(".top_btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.fix_btn_box').addClass('show')
        } else {
            $('.fix_btn_box').removeClass('show');
        }
    });

    $(document).mouseup(function (e) {
        var LayerPopup = $(".modal");
        if (LayerPopup.has(e.target).length === 0) {
            LayerPopup.removeClass("open");
        }
    });

    $(document).click(function (e) {

        function modal_fixed(){
            if ($('.modal').hasClass('open')) {
                $('body').addClass('fixed');
            } else {
                $('body').removeClass('fixed');
            }
        }

        setTimeout(modal_fixed, 100)
    })
});
