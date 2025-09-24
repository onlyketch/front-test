document.addEventListener('DOMContentLoaded', function() {

	console.log('onlyketch');

	let form = document.forms.testform;

	form.addEventListener('submit', function(event) {
			event.preventDefault();
	});



});
