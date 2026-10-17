document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
	link.addEventListener("click", () => {
		const menu = document.querySelector("#navbarNav");
		if (menu.classList.contains("show")) {
			bootstrap.Collapse.getOrCreateInstance(menu).hide();
		}
	});
});
