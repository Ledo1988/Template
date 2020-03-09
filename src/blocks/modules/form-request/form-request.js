let formRequest = document.getElementById("form-request");
let userEmail = document.getElementById("form-email");
let userName = document.getElementById("form-name");
let userSelect = document.getElementById("form-select");

formRequest.addEventListener("submit", validate);

function validate(event) {

	event.preventDefault();

	if (!userEmail.value || !isValidEmail(userEmail.value)) {
		userEmail.closest(".form-request__input").classList.add("error");
		return false;
	}

	if (!userName.value || !isValidName(userName.value)) {
		userName.closest(".form-request__input").classList.add("error");
		return false;
	}

	if (!userSelect.value) {
		return false;
	}

	return true;
}

function isValidEmail (emailAddress) {
	let patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return patternEmail.test(emailAddress);
}

function isValidName (name) {
	let patternName = new RegExp(/^([- A-Za-zа-яА-ЯёЁ]+)$/);
	return patternName.test(name);
}

