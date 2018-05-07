$(document).ready(function() {

    function wsAtc() {
        $('#ws-atc').click(function() {
            $('#ws-modal, #ws-modal .modal').fadeIn(800);
        });

        $('#ws-modal .ws-close, #ws-modal .ws-btn').click(function(event) {
            if ($('#ws-modal').is(':visible')) {
                $('#ws-modal, #ws-modal .modal').fadeOut(800);
            }
        });
    }
    wsAtc();

    function productImages() {
        var thumbNails = document.querySelectorAll('#ws-imgThumbs li');
        var mainImgList = document.querySelectorAll('#ws-imgMain li');
        $(mainImgList).nextAll().hide();
        $(thumbNails).click(function() {
            var currentImg = $(this).index();
            if ($(thumbNails).hasClass('sm-img-active')) {
                $(thumbNails).removeClass('sm-img-active');
                $(this).addClass('sm-img-active');
            }
            $(mainImgList).eq(currentImg).show().siblings().hide();
        });
    }
    productImages();

    function readMore() {

        if ($('.ws-expanded').length) {
            $('.ws-expanded').find('.ws-content').show();
        }
        $('.ws-drawer').click(function() {
            $(this).find('.ws-content').slideToggle();
            var title = $(this).find('h3');
            if (title.text() == 'Collapsed') {
                $(title).text('Expanded');
                $(this).find('.ws-collapsed').attr('class', 'ws-expanded');
            } else {
                $(title).text('Collapsed');
                $(this).find('.ws-expanded').attr('class', 'ws-collapsed');
            }
        });
    }
    readMore();
});