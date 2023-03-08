const form = document.getElementById("new-user-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const submitButton = document.getElementById("submit");

function validateFirstName() {
	const namePattern = new RegExp("[A-Z]+[A-Za-z-]{1,}");
	const tempDiv = document.getElementById("temp-first-name");
	const firstNameValidMark = document.getElementById("first-name-valid-mark");
	const firstNameInvalidMark = document.getElementById(
		"first-name-invalid-mark"
	);
	if (firstName.value !== "") {
		tempDiv.classList.add("hidden");
		if (namePattern.test(firstName.value)) {
			firstNameInvalidMark.classList.add("hidden");
			firstNameValidMark.classList.remove("hidden");
		} else {
			firstNameValidMark.classList.add("hidden");
			firstNameInvalidMark.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		firstNameInvalidMark.classList.add("hidden");
		firstNameValidMark.classList.add("hidden");
	}
}

function validateLastName() {
	const namePattern = new RegExp("[A-Z]+[A-Za-z-]{1,}");
	const tempDiv = document.getElementById("temp-last-name");
	const lastNameValidMark = document.getElementById("last-name-valid-mark");
	const lastNameInvalidMark = document.getElementById("last-name-invalid-mark");
	if (lastName.value !== "") {
		tempDiv.classList.add("hidden");
		if (namePattern.test(lastName.value)) {
			lastNameInvalidMark.classList.add("hidden");
			lastNameValidMark.classList.remove("hidden");
		} else {
			lastNameValidMark.classList.add("hidden");
			lastNameInvalidMark.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		lastNameInvalidMark.classList.add("hidden");
		lastNameValidMark.classList.add("hidden");
	}
}

function validateEmail() {
	const emailPattern =
		/[A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@+[A-Za-z0-9-]+\.+[A-Za-z]{2,}/;
	const tempDiv = document.getElementById("temp-email");
	const emailValidMark = document.getElementById("email-valid-mark");
	const emailInvalidMark = document.getElementById("email-invalid-mark");
	if (email.value !== "") {
		tempDiv.classList.add("hidden");
		if (emailPattern.test(email.value)) {
			emailInvalidMark.classList.add("hidden");
			emailValidMark.classList.remove("hidden");
		} else {
			emailValidMark.classList.add("hidden");
			emailInvalidMark.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		emailInvalidMark.classList.add("hidden");
		emailValidMark.classList.add("hidden");
	}
}

function validatePhoneNumber() {
	phoneNumber.addEventListener("input", (e) => {
		let x = e.target.value
			.replace(/\D/g, "")
			.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		console.log(x);
		phoneNumber.value = !x[2]
			? x[1]
			: "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
	});
	const phoneNumberPattern = /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/;

	const tempDiv = document.getElementById("temp-phone-number");
	const phoneNumberValidMark = document.getElementById(
		"phone-number-valid-mark"
	);
	const phoneNumberInvalidMark = document.getElementById(
		"phone-number-invalid-mark"
	);
	if (phoneNumber.value !== "") {
		tempDiv.classList.add("hidden");
		if (phoneNumberPattern.test(phoneNumber.value)) {
			phoneNumberInvalidMark.classList.add("hidden");
			phoneNumberValidMark.classList.remove("hidden");
		} else {
			phoneNumberValidMark.classList.add("hidden");
			phoneNumberInvalidMark.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		phoneNumberInvalidMark.classList.add("hidden");
		phoneNumberValidMark.classList.add("hidden");
	}
}

function validatePassword() {
	const passwordPattern = new RegExp(
		"[A-Za-z0-90-9!()-.?{}_`~;:!@#$%^&*+=]{8,}"
	);
	const tempDiv = document.getElementById("temp-password");
	const passwordValidMark = document.getElementById("password-valid-mark");
	const passwordInvalidMark = document.getElementById("password-invalid-mark");
	if (password.value !== "") {
		tempDiv.classList.add("hidden");
		if (passwordPattern.test(password.value)) {
			passwordInvalidMark.classList.add("hidden");
			passwordValidMark.classList.remove("hidden");
		} else {
			passwordValidMark.classList.add("hidden");
			passwordInvalidMark.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		passwordInvalidMark.classList.add("hidden");
		passwordValidMark.classList.add("hidden");
	}
}

function confirmPasswordMatch() {
	const tempDiv = document.getElementById("temp-password-confirm");
	const passwordConfirmValidMark = document.getElementById(
		"password-confirm-valid-mark"
	);
	const passwordConfirmInvalidMark = document.getElementById(
		"password-confirm-invalid-mark"
	);
	const passwordError = document.getElementById("password-error");
	if (passwordConfirm.value !== "") {
		tempDiv.classList.add("hidden");
		if (passwordConfirm.value === password.value) {
			submitButton.disabled = false;
			passwordConfirmInvalidMark.classList.add("hidden");
			passwordConfirmValidMark.classList.remove("hidden");
			passwordError.classList.add("hidden");
		} else {
			submitButton.disabled = true;
			passwordConfirmValidMark.classList.add("hidden");
			passwordConfirmInvalidMark.classList.remove("hidden");
			passwordError.classList.remove("hidden");
		}
	} else {
		tempDiv.classList.remove("hidden");
		passwordConfirmInvalidMark.classList.add("hidden");
		passwordConfirmValidMark.classList.add("hidden");
	}
}

form.addEventListener("input", () => {
	validateFirstName();
	validateLastName();
	validateEmail();
	validatePhoneNumber();
	validatePassword();
	confirmPasswordMatch();
});
