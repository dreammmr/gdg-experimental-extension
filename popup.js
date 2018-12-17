
let input = document.querySelector('input');

input.addEventListener('input', (e) => {
	let params = {
		active: true,
		currentWindow: true
	}
	chrome.tabs.query(params, (tab) => {
		let data = {
			color: input.value
		};

		chrome.tabs.sendMessage(tab[0].id, data);
	})
})