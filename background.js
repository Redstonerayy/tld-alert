const tlds = [".zip", ".mov"];
const tldregex = new RegExp("(" + tlds.join("|") + ")$", "g");

/*------------ stop downloads from .zip sites and open alert ------------*/
chrome.downloads.onCreated.addListener(async (downloaditem) => {
	const hostname = new URL(downloaditem.url).hostname; // does not include port
	const enabled = (await chrome.storage.local.get(["enabled"])).enabled;
	if (enabled && hostname.match(tldregex)) {
		await chrome.downloads.cancel(downloaditem.id);
		chrome.tabs.create({
			active: true,
			url: "alert/alert.html",
		});
	}
});
