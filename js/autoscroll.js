$(function(){
    $('#move_target').on('click', function(){
        var targetTop = $('#target_point').offset().top;
        //targetTopを表示
        $('#target_top span').html(targetTop);

        $('html,body').animate({
            scrollTop: targetTop + 1
        }, 500);
        return false;
    });
});