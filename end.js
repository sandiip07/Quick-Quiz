const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores"))|| [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("clicked the button");
  e.preventDefault();

  const score = {
    score: Math.floor(mostRecentScore),
    name: username.value,
  };

  highScores.push(score);
  highScores.sort((a,b) => {
    return b.score - a.score;
  });
  highScores.splice(3);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
