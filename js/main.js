$(function() {

    'use strict';

    // Add hover functionality in mobile
    $('body').bind('touchstart', function() {});

    // .strengths navigation
    var iCurrent = 0;
    $('.strengths > ol > li').on('click', 'h3', function() {
        iCurrent = $(this).closest('li').index();
        markCurrent();
    });
    $('.nav.dot').on('click', 'li', function() {
        iCurrent = $(this).index();
        markCurrent();
    });

    $('.strengths .content').on( 'swipeleft', function() {
        iCurrent = iCurrent+1;
        if (iCurrent >= 8) {
            iCurrent = 0;
        }
        markCurrent();
    });
    $('.strengths .content').on( 'swiperight', function() {
        iCurrent = iCurrent-1;
        if (iCurrent <= -1) {
            iCurrent = 7;
        }
        markCurrent();
    });
    // Hide loading from jquery mobile
    $.mobile.loading().hide();

    function markCurrent() {
        //console.log("iCurrent: " + iCurrent);
        $('.nav.dot > li, .strengths > ol > li').removeClass( 'current' );
        $('.strengths > ol > li').eq( iCurrent ).addClass( 'current' );
        $('.nav.dot > li').eq( iCurrent ).addClass( 'current' );
        //
        $('html, body').animate({
            scrollTop: $('#strengths').offset().top
        }, 500);
    }

});
