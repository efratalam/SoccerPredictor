
const predictButton = document.getElementById("predict-button");
const predictionResult = document.getElementById("prediction-result");

function showPrediction() 
{
    predictionResult.textContent = "PREDICTIONS ARE WORK IN PROGRESS";
}

predictButton.addEventListener("click", showPrediction);