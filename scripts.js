const GRID_SIZE = 16;
const BLOCK_SIZE = 20;
const sketchContainer = document.querySelector("#sketchContainer");

function setGridSize(){
	sketchContainer.style.height = (GRID_SIZE * BLOCK_SIZE) + "px";
	sketchContainer.style.width = (GRID_SIZE* BLOCK_SIZE) + "px";
}

function createGrid(){
	for(let i = 0; i < GRID_SIZE *GRID_SIZE; i++){
		const block = document.createElement("div");
		block.classList.add("gridBlock");
		block.style.height = BLOCK_SIZE + "px";
		block.style.width = BLOCK_SIZE + "px";

		sketchContainer.appendChild(block);

		// DEBUG
		console.log("block +1");
	}
}

setGridSize();
createGrid();