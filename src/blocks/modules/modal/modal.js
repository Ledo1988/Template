import $ from "jquery";

$(document).ready(function() {

    $('body').on('click', '.modal__open-btn', function () {
        $('body').find('.modal').fadeIn('slow');
        $('body').addClass('overflow-hidden');
    });

    $('body').on('click', '.modal__close-btn', function () {
        $('body').find('.modal').fadeOut('slow');
        $('body').removeClass('overflow-hidden');
    });

    $(document).click(function(event) {
        if ($('body .modal').css('display') == 'block' && !$(event.target).closest('.modal__body,.modal__open-btn').length) {
            $('body').find('.modal').fadeOut('slow');
            if ($('body').hasClass('overflow-hidden')) {
                $('body').removeClass('overflow-hidden');
            }
        }
    });
});
