import $ from "jquery";

$(document).ready(function() {

	// InputAnimated functions

	$('body').on('focus', '.input-animated', function() {
		$(this).addClass('not-empty');
	});

	$('body .input-animated').on('input', '.input-animated__item', function () {
		if ($(this).val()) {
			$(this).parents('.input-animated').addClass('not-empty');
		} else {
			$(this).parents('.input-animated').trigger('focusout');
			$(this).parents('.input-animated').removeClass('not-empty');
		}
	});

	$('body').on('focusout', '.input-animated', function() {

		if (!$(this).children('.input-animated__item').val()) {
			$(this).removeClass('not-empty');
			$(this).children('.input-animated__item').blur();
		}

	});
});