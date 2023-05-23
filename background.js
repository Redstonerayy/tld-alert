/*------------ check if a certain site is visited ------------*/
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
	const hostname = new URL(details.url).hostname; // does not include port
	const tlds = [".zip"];
	const tldregex = new RegExp("(" + tlds.join("|") + ")$", "g");
	if (hostname.match(tldregex)) {
		console.log(await chrome.tabs.get(details.tabId));
		const index = (await chrome.tabs.get(details.tabId)).index + 1;
		chrome.tabs.create({
			active: true,
			index: index,
			url: "alert/alert.html",
		});
	}
});
