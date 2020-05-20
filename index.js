/**

miniAlert({
	overflow: false,
	autoremove: true,
	size: 'small',
	time: 1000,
	cartoon: true,
	limit: false,
	text: "I'm a mini alert!!"
});

**/

let miniAlertClicked = false;

function getRandomInt(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);

}

function closeMiniAlert(obj) {

	const domBg = document.querySelector('.miniAlertBg');

	obj.el.classList.remove('show');

	setTimeout(function () {
		obj.el.parentNode.removeChild(obj.el);
		if (domBg) domBg.parentNode.removeChild(domBg);
	}, obj.time);

}

function miniAlert(obj) {

	if (!miniAlertClicked) {

		if (!obj.time || isNaN(obj.time)) obj.time = 1000;

		if (obj.autoremove === undefined) obj.autoremove = true;
		if (obj.cartoon === undefined) obj.cartoon = true;

		let limit = 9999999;
		if (obj.limit && !isNaN(obj.limit)) limit = obj.limit;

		miniAlertClicked = true;

		const dom = document.createElement('div');
		dom.classList.add('miniAlert');
		if (obj.cartoon) { dom.classList.add('cartoon'); }
		dom.style.transitionDuration = (obj.time / 1000) + "s";
		dom.classList.add('miniAlert--' + (obj.size != undefined ? obj.size : ""));
		dom.innerHTML = (obj.text != undefined ? obj.text : "I'm a mini alert!!");

		if (document.querySelectorAll('.miniAlert').length < limit) {

			document.querySelector('body').appendChild(dom);

		}

		let domBg = false;

		if (obj.overflow) {

			domBg = document.createElement('div');
			domBg.classList.add('miniAlertBg');

			if (document.querySelectorAll('.miniAlert').length < limit) {

				document.querySelector('body').appendChild(domBg);

			}

		}

		setTimeout(function () {
			miniAlertClicked = false;
		}, 200);

		setTimeout(function () {
			dom.classList.add('show');
			if (obj.cartoon) { dom.classList.add('show--' + getRandomInt(1, 8)); }
		}, 20);

		if (obj.autoremove) {

			setTimeout(function () {
				dom.classList.remove('show');
			}, obj.time);
			setTimeout(function () {
				dom.parentNode.removeChild(dom);
				if (domBg) domBg.parentNode.removeChild(domBg);
			}, obj.time * 2);

		} else {

			dom.addEventListener("click", () => { obj.el = dom; closeMiniAlert(obj); });

		}

	}

}

module.exports = miniAlert;