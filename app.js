const goalSelect = document.getElementById("goal-select");
const resetBtn = document.getElementById("reset-btn");
const p1 = {
  score: document.getElementById("p1-score"),
  button: document.getElementById("p1-btn")
}
const p2 = {
  score: document.getElementById("p2-score"),
  button: document.getElementById("p2-btn")
}

// increases the player's score by 1, and then checks if the player has won the game
function updateScore(player, opponent) {
  // adds 1 to player's score
  player.score.innerHTML = parseInt(player.score.innerHTML) + 1;
  // checks if player has reached the target score AND beaten their 
  // opponent by 2 or more points
  if (parseInt(player.score.innerHTML) >= parseInt(goalSelect.value)
    && ((parseInt(player.score.innerHTML) - parseInt(opponent.score.innerHTML)) >= 2)) {
    // game won animations
    player.score.style.color = "#38ae38";
    opponent.score.style.color = "#cf2b2b";
    player.button.disabled = true;
    opponent.button.disabled = true;
    p1.button.style.backgroundColor = "#769fca"
    p2.button.style.backgroundColor = "#cd7a79"
  }
}
p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
})
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
})

// resets the scoreboard to 0 - 0 and resets to initial color scheme
function resetGame() {
  for (let p of [p1, p2]) {
    p.score.style.color = "#2c2e40";
    p.score.innerHTML = 0;
    p.button.disabled = false;
  }
  p1.button.style.backgroundColor = "#3380D1";
  p2.button.style.backgroundColor = "#CF312E";
};
resetBtn.addEventListener("click", resetGame);
goalSelect.addEventListener("change", resetGame);