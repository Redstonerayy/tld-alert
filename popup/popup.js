/*------------ get elements ------------*/
let checkbox = document.querySelector(".checkbox");
let enabled = true;

/*------------ query local storage ------------*/
chrome.storage.local.get(["enabled"]).then((result) => {
	enabled = result.enabled;
	if (enabled) {
		checkbox.classList.add("checked");
	}
});

checkbox.addEventListener("click", () => {
	/*------------ change ui ------------*/
	checkbox.classList.contains("checked")
		? checkbox.classList.remove("checked")
		: checkbox.classList.add("checked");

	/*------------ update local storage setting ------------*/
	enabled = !enabled;
	chrome.storage.local.set({ enabled: enabled });
});
