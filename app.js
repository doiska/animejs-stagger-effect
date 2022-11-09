let columns = 0;
let rows = 0;
let toggled = false;

const wrapper = document.getElementById('tiles');

const toggle = () => {
	toggled = !toggled;
}

const handleOnClick = index => {
	toggle();

	anime({
		targets: ".tile",
		opacity: toggled ? 0 : 1,
		delay: anime.stagger(50, {
			grid: [columns, rows],
			from: index
		}),
	});
}

const createTile = index => {
	const tile = document.createElement('div');

	tile.classList.add("tile");
	tile.onclick = () => handleOnClick(index);
	return tile;
}

const createTiles = amount => {
	Array.from(Array(amount)).forEach((_, index) =>
		wrapper.appendChild(createTile(index))
	);
}


const createGrid = () => {
	wrapper.innerHTML = '';

	columns = Math.floor(document.body.clientWidth / 50);
	rows = Math.floor(document.body.clientHeight / 50);

	wrapper.style.setProperty('--columns', columns);
	wrapper.style.setProperty('--rows', rows);

	createTiles(columns * rows);
}

window.onresize = () => createGrid();
window.onload = () => createGrid();