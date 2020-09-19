// const canvas = document.getElementById("BOCanvas");
// const ctx = canvas.getContext("2d");
// const colors = document.getElementsByClassName("BOColor");

// const INITIAL_COLOR = "#0579FF";
// const CANVAS_SIZE = 600;

// canvas.width = CANVAS_SIZE;
// canvas.height = CANVAS_SIZE;

// ctx.fillStyle = "#ece6cc";
// ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
// ctx.strokeStyle = INITIAL_COLOR;
// ctx.fillStyle = INITIAL_COLOR;
// ctx.lineWidth = 2.5;

// let moving = false;

// function stopMoving() {
//     moving = false;
// }

// function startMoving() {
//     moving = true;
// }

// function onMouseMove(event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
// }

// function handleCanvasClick() {
//     if (filling) {
//         ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//     }
// }

// if (canvas) {
//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mousedown", startMoving);
//     canvas.addEventListener("mouseup", stopMoving);
//     canvas.addEventListener("mouseleave", stopMoving);
//     canvas.addEventListener("click", handleCanvasClick);
// }