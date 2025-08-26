const DEFAULT_GRID_SIZE = 16;
const BLOCK_SIZE = 1.5; // Temp debug ?
const GRID_SIDE = 26; const sketchContainer = document.querySelector("#sketchContainer");
const buttonGridSize = document.querySelector(".gridSize").querySelector("button");

function getUserGridSize(){
	let userGridSize = Number(prompt("Write a number between 2-100 to set the size of the grid", 16));

	while(userGridSize < 2 || userGridSize > 100){
		userGridSize = Number(prompt("Invalid number, it MUST be between 2-100", ""));
	}

	return userGridSize;
}

function setGridSize(){
	sketchContainer.style.height = GRID_SIDE + "em";
	sketchContainer.style.width = GRID_SIDE + "em";
}

function createGrid(gridBlockSize){
	let blockSide = (GRID_SIDE / gridBlockSize) + "em";
	for(let i = 0; i < gridBlockSize * gridBlockSize; i++){
		const block = document.createElement("div");
		block.classList.add("gridBlock");
		block.style.height = blockSide;
		block.style.width = blockSide;

		sketchContainer.appendChild(block);
	}
}

function deleteGrid(){
	while(sketchContainer.lastChild){
		sketchContainer.removeChild(sketchContainer.lastChild);
	}
}

function changeBlockOnHover(){
	const blocksHover = sketchContainer.querySelectorAll("div");

	blocksHover.forEach((div) => {
		div.addEventListener("mouseover", () => {
			div.classList.remove("gridBlock");
			div.classList.add("gridBlockOnHover");
		});
	});
}


buttonGridSize.addEventListener("click", () => {
	let gridBlockSize = getUserGridSize();

	deleteGrid();
	createGrid(gridBlockSize);
	changeBlockOnHover();
	// DEBUG
	console.log("Grid size: " + gridBlockSize);
});

function initGrid(){
	setGridSize();
	createGrid(DEFAULT_GRID_SIZE);
	changeBlockOnHover();
}

// INITIALIZATION
initGrid();