var formRequest = document.getElementById("form-request");
var userEmail = document.getElementById("form-email");
var userName = document.getElementById("form-name");
var userSelect = document.getElementById("form-select");
var userAgree = document.getElementById("form-agree");

window.onload=function() {
	
	formRequest.addEventListener("submit", function(event) {
		var isValid = validate();

		if (isValid == false) {
			event.preventDefault ? event.preventDefault() : (event.returnValue = false);
		} else {
			return true;
		}
	});
}

function validate() {

	if (!userEmail.value || !isValidEmail(userEmail.value)) {
		userEmail.closest(".form-request__input").classList.add("error");
		return false;
	}

	if (!userName.value || !isValidName(userName.value)) {
		userName.closest(".form-request__input").classList.add("error");
		return false;
	}

	if (userSelect.value == "hide") {
		userSelect.closest(".form-request__select").classList.add("error");
		return false;
	}

	if (!userAgree.checked) {
		userAgree.closest(".form-request__agree").classList.add("error");
		return false;
	} else {
		userAgree.closest(".form-request__agree").classList.remove("error");
	}

	return true;

}

function isValidEmail (emailAddress) {
	var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return patternEmail.test(emailAddress);
}

function isValidName (name) {
	var patternName = new RegExp(/^([- A-Za-zа-яА-ЯёЁ]+)$/);
	return patternName.test(name);
}

