const searchBox = document.querySelector('.search-box');
const queryInput = document.querySelector('#query');

const initialGifPath = './images/sonic-waiting.gif';

const isEmpty = (query) => query.trim() === '';

function renderGif(title = "I'm waiting for you!", src = initialGifPath) {
	const gifTitle = document.querySelector('h2');
	const gif = document.querySelector('.gif');

	gifTitle.textContent = title;
	gif.src = src;
}

async function fetchGif(gif) {
	const key = '6OXtOEb9inKrHI7HYhBObJYoDTLSpfN139Gm6AXrX4l96Tb4IbPJ6vIczCDg6PRp';
	const url = `https://api.klipy.com/api/v1/${key}/gifs/search?per_page=8&q=${gif}&format_filter=gif`;

	try {
		const response = await fetch(url);
		const {
			data: {
				data: [data],
			},
		} = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

async function handleQuery() {
	const query = queryInput.value;

	if (isEmpty(query)) {
		renderGif();
		return;
	}

	const loaderPath = './images/sonic-ring.gif';
	renderGif('Loading...', loaderPath);

	const {
		title,
		file: {
			hd: {
				gif: { url },
			},
		},
	} = await fetchGif(query);
	renderGif(title, url);
}

searchBox.addEventListener('click', () => queryInput.focus());
searchBox.addEventListener('change', handleQuery);

renderGif();
