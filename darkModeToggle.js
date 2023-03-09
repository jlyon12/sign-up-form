let darkMode = localStorage.getItem("darkMode");
const toggleSwitch = document.getElementById("toggle-switch");

// if (darkMode === "enabled") {
// 	enableLightMode();
// }
const enableDarkMode = () => {
	document.body.classList.remove("lightmode");
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
};

const enableLightMode = () => {
	document.body.classList.remove("darkmode");
	document.body.classList.add("lightmode");
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

toggleSwitch.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		enableLightMode();
	}
});
