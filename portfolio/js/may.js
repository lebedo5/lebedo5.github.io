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
        $('.portfolio_indicator[filter="sate"]').click(function() {
            if ($(this).attr('val') == 'off') {
                $('.portfolio_indicator[filter]').attr('val', 'off');
                $(this).attr('val', 'on');

                $('.portfolio_indicator[filter]').removeClass('focused');
                $(this).addClass('focused');

                $(' .filter > div').hide(300);
                $(' .filter > div[filter="sate"]').show(300);
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
    // выпадающее меню
$(document).ready(function() {
    $('.menu_button').click(function() {
        $('nav').slideToggle(500);
        $('ul.menu li').css({
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'background': 'blue',
        })
        if ($('.menu_button').html() == '<i class="fa fa-bars fa-2x icon_burger">') {
            $(this).html('<i class="fas fa-times"></i>')
        } else {
            $(this).html('<i class="fa fa-bars fa-2x icon_burger">')
        }
    });
    // $('ul.menu a[href^="#"]').click(function() {
    //     var target = $(this).attr('href');
    //     $('html, body').animation({
    //         scrollTop: $(target).offset().top
    //     }, 500);
    //     $('ul.menu a[href^="#"]').css({ 'color': '#212121' });
    //     $(this).css({ 'color': '#00897b' });
    //     return false;
    // });

})