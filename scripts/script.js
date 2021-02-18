function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "light") {
	localStorage.lightMode = "dark";
	app.setAttribute("data-light-mode", "dark");
    } else {
	localStorage.lightMode = "light";
	app.setAttribute("data-light-mode", "light");
    }		
}
	
	