//----------SUPPLEMENT QUIZ----------//

function calculateRecommendation() {
    const goal = document.getElementById('goal').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const dietType = document.getElementById('dietType').value;
    let recommendation = '';

    if (goal === 'muscleGain') {
        recommendation = 'We recommend a high-quality whey protein supplement and creatine to help you build muscle.';
    } else if (goal === 'weightLoss') {
        recommendation = 'A thermogenic fat burner and a high-fiber supplement like glucomannan could support your weight loss goals.';
    } else if (goal === 'energyBoost') {
        recommendation = 'A good pre-workout supplement with caffeine and B vitamins can give you the energy boost you need.';
    }

    if (dietType === 'vegetarian' || dietType === 'vegan') {
        recommendation += ' Since you follow a ' + dietType + ' diet, consider adding a plant-based protein powder or B12 supplement.';
    }
   
    // Check if all fields are filled
    if (!goal || !activityLevel || !dietType) {
        alert("Please fill in all the fields.");
        return;
    }

    document.getElementById('recommendationText').innerText = recommendation;
    document.getElementById('result').style.display = 'block';
}

//----------SUPPLEMENT TRACKER----------//

const supplementForm = document.getElementById('supplement-form');
const historyList = document.getElementById('history-list');
const logSupplement = document.getElementById('log-supplement');

// Event listener for supplement logging
logSupplement.addEventListener('click', function (event) {
    event.preventDefault();

    // Get form input values
    const supplementName = document.getElementById('supplement-name').value;
    const dosage = document.getElementById('dosage').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Check if all fields are filled
    if (!supplementName || !dosage || !date || !time) {
        alert("Please fill in all the fields.");
        return;
    }

    // Create a new history item
    const historyItem = document.createElement('div');
    historyItem.classList.add('history-item');
    historyItem.innerHTML = `
        <strong>${supplementName}</strong> (${dosage} mg) - 
        <small>${date} at ${time}</small>
    `;

    // Add the new history item to the list
    historyList.appendChild(historyItem);

    // Clear the form
    supplementForm.reset();
});
