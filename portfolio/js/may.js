// скрол в верх
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

})

// фильтр
$(document).ready(function() {
    $(' .portfolio_indicator[filter="bootstrap"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.portfolio_indicator[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $(' .portfolio_indicator[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="bootstrap"]').show(300);
        }
    })
    $('.portfolio_indicator[filter="adaptive"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.portfolio_indicator[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio_indicator[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="adaptive"]').show(300);
        }
    });

    $('.portfolio_indicator[filter="wd"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.portfolio_indicator[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio_indicator[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="wd"]').show(300);
        }
    });
    $('.portfolio_indicator[filter="all"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.portfolio_indicator[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $(' .portfolio_indicator[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').show(300);
        }
    })
})