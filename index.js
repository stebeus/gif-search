const searchInput = document.querySelector('.search-input');
const initialGifPath = '/images/sonic-waiting.gif';

const isEmpty = (query) => query.trim() === '';

function renderGif(title = "I'm waiting for you...", url) {
	const gifTitle = document.querySelector('h2');
	const gif = document.querySelector('.gif');

	gifTitle.textContent = title;
	gif.src = url;
}
