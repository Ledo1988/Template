import $ from "jquery";

$(document).ready(function() {
	$("body").on("click", ".form-request__agree", function () {
		$(this).removeClass("error");
	});
});
