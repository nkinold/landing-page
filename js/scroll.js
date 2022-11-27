
const scroll = document.querySelector('.page__scroll');
document.addEventListener('DOMContentLoaded', () => {
	const service = document.querySelector('.service');

	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		let serviceCenter = service.offsetHeight / 2;

		if (scrollTop > serviceCenter) {
			scroll.classList.add('page__scroll--active');
		} else {
			scroll.classList.remove('page__scroll--active');
		}
	})

	scroll.addEventListener('click', goTop);
	function goTop() {
		if (window.scrollY > 0) {
			window.scrollBy(0, -75);
			setTimeout(goTop, 0);
		}
	}
})