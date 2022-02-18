const p1 = {
    score: 0,
    button: document.querySelector("#p1Add"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Add"),
    display: document.querySelector("#p2Display")
}

const reset = document.querySelector("#resetButton");
const maxScore = document.querySelector("#maxScore");
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.display.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetFunction();
})

reset.addEventListener('click', resetFunction)


function resetFunction() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled = false;
    }
}


