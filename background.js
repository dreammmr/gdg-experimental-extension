console.log("This is the background");

chrome.browserAction.onClicked.addListener((tab) => {
	let data = {
		msg: 'duxov!'
	};

	chrome.tabs.sendMessage(tab.id, data);
})