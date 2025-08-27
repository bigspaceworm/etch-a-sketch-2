const DEFAULT_GRID_SIZE = 16;
const GRID_SIDE = 35;
const INIT_OPACITY = 0.1;
const sketchContainer = document.querySelector("#sketchContainer");
const buttonGridSize = document.querySelector(".gridSize").querySelector("button");
const buttonRandomColor = document.querySelector(".randomColor").querySelector("button");
const buttonSingleColor = document.querySelector(".singleColor").querySelector("button");
const buttonChangeOpacity = document.querySelector(".changeOpacity").querySelector("button");
let colorMode = "solid";

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
		block.style.opacity = INIT_OPACITY;

		sketchContainer.appendChild(block);
	}
}

function deleteGrid(){
	while(sketchContainer.lastChild){
		sketchContainer.removeChild(sketchContainer.lastChild);
	}
}

function changeBlockOnHoverSolid(){
	const blocksHover = sketchContainer.querySelectorAll("div");

	blocksHover.forEach((div) => {
		div.addEventListener("mouseover", () => {
			div.style.removeProperty("background");
			div.removeAttribute("class");
			let blockOpacity = div.style.opacity;
			if(blockOpacity != 1){
				div.style.opacity = setBlockOpacity(blockOpacity);
			}
			div.classList.add("gridBlockOnHover");
		});
	});
}

function changeBlockOnHoverRandom(){
	const blocksHover = sketchContainer.querySelectorAll("div");
	let randomColor = "";

	blocksHover.forEach((div) => {
		div.addEventListener("mouseover", () => {
			randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

			div.removeAttribute("class");
			let blockOpacity = div.style.opacity;
			if(blockOpacity != 1){
				div.style.opacity = setBlockOpacity(blockOpacity);
			}
			div.style.background = randomColor;
			div.classList.add("gridBlockOnHoverRandom");
		});
	});
}

function setBlockOpacity(blockOpacity){
	if(colorMode === "solid"){
		return 1;
	} else {
		return parseFloat(blockOpacity) + 0.1;
	}
}

buttonGridSize.addEventListener("click", () => {
	let gridBlockSize = getUserGridSize();

	deleteGrid();
	createGrid(gridBlockSize);
	changeBlockOnHoverSolid();
});

buttonRandomColor.addEventListener("click", () => {
	changeBlockOnHoverRandom();
});

buttonSingleColor.addEventListener("click", () => {
	changeBlockOnHoverSolid();
});

buttonChangeOpacity.addEventListener("click",
() => {
	const opacityStatusLabel = document.querySelector(".opacityStatus");

	if(colorMode === "solid"){
		colorMode = "opacity";
		opacityStatusLabel.textContent = "Opacity: ON";
	} else {
		colorMode = "solid";
		opacityStatusLabel.textContent = "Opacity: OFF";
	}
}
);

function initGrid(){
	setGridSize();
	createGrid(DEFAULT_GRID_SIZE);
	changeBlockOnHoverSolid();
}

// INITIALIZATION
initGrid();