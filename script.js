
const predictButton = document.getElementById("predict-button");
const predictionResult = document.getElementById("prediction-result");

function showPrediction() {
    
    const homeTeam = document.getElementById("home-team").value;
    const awayTeam = document.getElementById("away-team").value;

    if (homeTeam === awayTeam) {
        predictionResult.textContent = "Please choose two different teams.";
        return;
    }

    predictionResult.textContent = homeTeam + " vs " + awayTeam;
}
predictButton.addEventListener("click", showPrediction);