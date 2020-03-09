import $ from "jquery";

$(document).ready(function() {

	// InputAnimated functions

	$("body").on("focus", ".input-animated", function() {
		$(this).addClass("not-empty");
		$(this).removeClass("error");
	});

	$("body .input-animated").on("input", ".input-animated__item", function () {
		if ($(this).val()) {
			$(this).parents(".input-animated").addClass("not-empty");
			$(this).removeClass("error");
		} else {
			$(this).parents(".input-animated").trigger("focusout");
			$(this).parents(".input-animated").removeClass("not-empty");
		}
	});

	$("body").on("focusout", ".input-animated", function() {

		if (!$(this).children(".input-animated__item").val()) {
			$(this).removeClass("not-empty");
		}

	});

	$("body .input-animated").on("click", ".input-animated__empty", function() {
		$(this).parents('.input-animated').find('input').val("");
		$(this).parents(".input-animated").find('input').trigger("focus");
	});
});