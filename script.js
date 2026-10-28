
const predictButton = document.getElementById("predict-button");
const predictionResult = document.getElementById("prediction-result");

const teamStrengths = {"barcelona": 85, "real-madrid": 90, "arsenal": 85};

function showPrediction() 
{

    const homeTeam = document.getElementById("home-team").value;
    const awayTeam = document.getElementById("away-team").value;

    if (homeTeam === awayTeam)
    {
        predictionResult.textContent = "Please choose two different teams.";
        return;
    }

    const homeStrength = teamStrengths[homeTeam];
    const awayStrength = teamStrengths[awayTeam];


    if (homeStrength > awayStrength) 
    {
         predictionResult.textContent = "Prediction: " + homeTeam + " wins";
    } 
    else if (awayStrength > homeStrength)
    {
        predictionResult.textContent = "Prediction: " + awayTeam + " wins";
    } 
    else 
    {
        predictionResult.textContent = "Prediction: Draw";
    }
    

}

predictButton.addEventListener("click", showPrediction);