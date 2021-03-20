const fileInput = document.querySelector('#file');

fileInput.addEventListener('change', (event) => {
	const blob = window.URL.createObjectURL(event.target.files[0]);
	setFavicon(blob);
});

function setFavicon(imageURL) {
	document.querySelector('#favicon').href = imageURL;
}
