chrome.runtime.onMessage.addListener((request) => {
	let paragraphs = [...document.querySelectorAll('p')];

	paragraphs.forEach((el) => {
		el.style.background = request.color;
		el.innerText = el.innerText.replace(/yan/g, "ian");
	});
})