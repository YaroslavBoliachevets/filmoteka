const searchFrom = document.querySelector('.searcher__input');

searchFrom.addEventListener('input', handleInput);

function handleInput(e) {

	event.preventDefault();
	const form =e.target.value;
	console.log(form);
}


	