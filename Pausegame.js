// let gamePaused = () => {

let gamePaused = false;

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    gamePause();
  } 
});


let gameContinue = () => {
  if (gamePaused) {
    gamePaused = false;
    gameInterval = setInterval(gameLoop,10);
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gameContinue();
  }
});


let gamePause = () => {
  if (!gamePaused) {
    gamePaused = true;
    drawGamePaused();
    clearInterval(gameInterval);
  }
};

let drawGamePaused = () => {
  canvasContext.font = "40px Emulogic";
  canvasContext.fillStyle = "white";
  canvasContext.fillText("Game Paused!", 110, 240);
};
