

let popWindow = document.querySelector('.toggle');
let subBtn = document.querySelector('.newsletter__submit');
subBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	let data = document.querySelector('.newsletter__input').value;

	function clear() {
		document.querySelector('.newsletter__input').value = '';
	}

	popWindow.classList.toggle('toggle--visible');
	const arr = data.split('');
	let checkArr = arr.includes('@');
	if (checkArr === true) {
		//document.querySelector('.newsletter__input').value = 'Thank you';
		popWindow.innerHTML = 'Thank you';
		popWindow.style.color = '#0d5c63';
		window.setTimeout(clear, 3000)
	}
	else {
		//document.querySelector('.newsletter__input').value = 'Email-address is incorrect';
		popWindow.innerHTML = 'Email-address is incorrect';
		popWindow.style.color = '#ff7b47';
		window.setTimeout(clear, 3000)
	}
})

popWindow.addEventListener('click', (evt) => {
	popWindow.classList.remove('toggle--visible');
	popWindow.style.color = '#0d5c63';
})