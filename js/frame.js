$(function(){
    var locate = function(){
        var h_window = $(window).outerHeight();
        var w_window = $(window).outerWidth();

        var h_header = $('#frame-header').outerHeight();
        var w_header = $('#frame-header').outerWidth();

        var w_lefter = $('#frame-lefter').outerWidth();

        var h_footer = $('#frame-footer').outerHeight();

        var _h_lefter  = h_window - h_header;
        var _h_content = h_window - h_header - h_footer;

        $('#frame-lefter').height(_h_lefter);
        $('#frame-content').height(_h_content);
    };

    locate();
    $(window).resize(function(){
        locate();
    });

    $('#channels-list a').click(function(){
        $(this).parent('li').removeClass('active').addClass('active').siblings('.active').removeClass('active');
    });

    $('#frame-lefter .switcher i').click(function(){
        if ($(this).hasClass('rotated')) {
            $(this).removeClass('rotated');
            $('#frame-lefter').css('width', '200px');
            $('#frame-content').css('width', 'calc(100% - 200px)');
            $('#frame-footer').css('width', 'calc(100% - 200px)');
        } else {
            $(this).removeClass('rotated').addClass('rotated');
            $('#frame-lefter').css('width', '50px');
            $('#frame-content').css('width', 'calc(100% - 50px)');
            $('#frame-footer').css('width', 'calc(100% - 50px)');
        }
    });
});
