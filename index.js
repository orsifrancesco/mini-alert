/**

miniAlert({
	overflow: false,
	autoremove: true,
	size: 'medium',
	time: 500,
	cartoon: true,
	limit: 0,
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
		dom.parentNode.removeChild(dom);
		if (domBg) domBg.parentNode.removeChild(domBg);
	}, obj.time);

}

function miniAlert(obj) {

    if (!miniAlertClicked) {
		
		if(!obj.time || isNaN(obj.time)) obj.time = 500;

        miniAlertClicked = true;

        const dom = document.createElement('div');
        dom.classList.add('miniAlert');
		dom.style.transitionDuration = (obj.time/1000) + "s";
        dom.classList.add('miniAlert--' + (obj.size != undefined ? obj.size : ""));
        dom.innerHTML = (obj.text != undefined ? obj.text : "I'm a mini alert!!";
        document.querySelector('body').appendChild(dom);

        let domBg = false;

        if (obj.overflow) {

            domBg = document.createElement('div');
            domBg.classList.add('miniAlertBg');
            document.querySelector('body').appendChild(domBg);

        }
		
		let limit = 9999999;
		if(obj.limit && !isNaN(obj.limit)) limit = obj.limit;
		
		setTimeout(function () {
			miniAlertClicked = false;
		}, 200);		

		if(document.querySelectorAll('.miniAlert').length < limit) {
			
			setTimeout(function () {
				dom.classList.add('show');
				if(obj.cartoon) { dom.classList.add('show--' + getRandomInt(1, 8)); }
			}, 20);
			
			if (obj.autoremove) {

				setTimeout(function () {
					dom.classList.remove('show');
					dom.parentNode.removeChild(dom);
					if (domBg) domBg.parentNode.removeChild(domBg);
				}, obj.time);

			} else {

				dom.addEventListener("click", () => { obj.el = this; closeMiniAlert(obj); });

			}
			
		}

    }

}

module.exports = miniAlert;