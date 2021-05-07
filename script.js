const copy = document.getElementById("copy");
const passwordField = document.getElementById("password");
const generate = document.getElementById("generate");
const pwd = document.getElementById("pwd");
const notif = document.querySelector("span");
generate.addEventListener("click", () => {
	let num = Math.floor(Math.random() * 6);
	let num1 = Math.floor(Math.random() * 6);
	let chars = ["!", "@", "$", "%", ">", "<", "?"];
	const generatedPassword = Math.random().toString(36).substr(2, 36);
	const generatedPassword2 = Math.random().toString(36).substr(2, 36);
	passwordField.innerText =
		chars[num1] + generatedPassword + chars[num] + generatedPassword2;
});

const copyText = document.querySelector("#password");

copyText.onclick = function () {
	document.execCommand("copy");
};

copyText.addEventListener("copy", function (event) {
	event.preventDefault();
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", copyText.textContent);
		notif.innerText = "Password copied.";
		setTimeout(function () {
			notif.innerText = "";
		}, 500);
	}
});
