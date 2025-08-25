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
	}
}


function initGrid(){
	setGridSize();
	createGrid();
	
	const block = sketchContainer.querySelectorAll("div");

	return block;
}

const blocksHover = initGrid();

blocksHover.forEach((div) => {
	div.addEventListener("mouseover", () => {
		div.classList.remove("gridBlock");
		div.classList.add("gridBlockOnHover");
	})
})