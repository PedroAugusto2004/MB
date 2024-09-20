
//----------CALORIES CALCULATOR----------//

function calculateCalories() {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
    const goal = document.getElementById("goal").value;

    let bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let dailyCalories = bmr * activityLevel;

    if (goal === "lose") {
        dailyCalories -= 500;
    } else if (goal === "gain") {
        dailyCalories += 500;
    }

    document.getElementById("result").innerHTML = `Your daily caloric needs are approximately ${Math.round(dailyCalories)} calories.`;
}

//----------MACROS CALCULATOR----------//

function calculateMacros() {
    const calories = parseFloat(document.getElementById('calories').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;

    // Input validation
    if (isNaN(calories) || calories <= 0 || isNaN(weight) || weight <= 0 || !goal) {
        document.getElementById('macroResult').innerHTML = '<p>Please enter valid inputs for all fields.</p>';
        return;
    }

    // Adjust caloric intake based on goal
    let adjustedCalories = calories;
    if (goal === "lose") {
        adjustedCalories *= 0.85; // Reduce calories by 15% for weight loss
    } else if (goal === "gain") {
        adjustedCalories *= 1.15; // Increase calories by 15% for muscle gain
    }

    // Carbohydrates: 45-55% of calories -> use average 50%
    const carbCalories = adjustedCalories * 0.50;
    const carbGrams = carbCalories / 4;

    // Adjust protein intake based on goal
    let proteinGrams;
    if (goal === "maintain") {
        proteinGrams = weight * 0.8; // 0.8g per kg for maintenance
    } else if (goal === "gain") {
        proteinGrams = weight * 1.6; // 1.6-2.2g per kg for muscle gain (using 1.6g for average)
    } else if (goal === "lose") {
        proteinGrams = weight * 1.2; // 1.2-1.5g per kg for weight loss (using 1.2g for average)
    }

    // Adjust fat intake based on goal
    let fatPercentage;
    if (goal === "maintain") {
        fatPercentage = 0.25; // 20-25% for maintenance (using 25%)
    } else if (goal === "gain") {
        fatPercentage = 0.25; // 20-25% for muscle gain (using 25%)
    } else if (goal === "lose") {
        fatPercentage = 0.20; // 20-25% for weight loss (using 20%)
    }

    const fatCalories = adjustedCalories * fatPercentage;
    const fatGrams = fatCalories / 9;

    // Display result
    document.getElementById('macroResult').innerHTML = `
        <p>Based on your goal: <strong>${goal.charAt(0).toUpperCase() + goal.slice(1)}</strong></p>
        <p>Carbohydrates: ${carbGrams.toFixed(2)} grams/day</p>
        <p>Protein: ${proteinGrams.toFixed(2)} grams/day</p>
        <p>Fats: ${fatGrams.toFixed(2)} grams/day</p>
    `;
}

//----------WORKOUT PLAN----------//

function getWorkoutPlan() {
    const fitnessLevel = document.getElementById('fitness-level').value;
    const goal = document.getElementById('goal').value;
    const preference = document.getElementById('preference').value;
    let workoutPlan = '';

    if (fitnessLevel === 'beginner') {
        if (goal === 'weight-loss') {
            workoutPlan = preference === 'cardio' ? 'Beginner Cardio Plan' : 'Beginner Full Body Plan';
        } else if (goal === 'muscle-gain') {
            workoutPlan = 'Beginner Strength Training Plan';
        } else if (goal === 'endurance') {
            workoutPlan = 'Beginner Endurance Plan';
        } else {
            workoutPlan = 'Beginner Yoga & Flexibility Plan';
        }
    } else if (fitnessLevel === 'intermediate') {
        if (goal === 'weight-loss') {
            workoutPlan = preference === 'cardio' ? 'Intermediate Cardio Plan' : 'Intermediate Full Body Plan';
        } else if (goal === 'muscle-gain') {
            workoutPlan = 'Intermediate Strength Training Plan';
        } else if (goal === 'endurance') {
            workoutPlan = 'Intermediate Endurance Plan';
        } else {
            workoutPlan = 'Intermediate Yoga & Flexibility Plan';
        }
    } else {
        if (goal === 'weight-loss') {
            workoutPlan = preference === 'cardio' ? 'Advanced Cardio Plan' : 'Advanced Full Body Plan';
        } else if (goal === 'muscle-gain') {
            workoutPlan = 'Advanced Strength Training Plan';
        } else if (goal === 'endurance') {
            workoutPlan = 'Advanced Endurance Plan';
        } else {
            workoutPlan = 'Advanced Yoga & Flexibility Plan';
        }
    }

    document.getElementById('result').innerText = `Your Recommended Workout Plan: ${workoutPlan}`;
}

/*===== SCROLL REVEAL ANIMATION =====*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Check if ScrollReveal is loaded
    if (typeof ScrollReveal !== 'undefined') {
        console.log('ScrollReveal is loaded');

        // Initialize ScrollReveal and reveal elements within the .section class
        ScrollReveal().reveal('.section .content', {
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Animation starting point
            distance: '20px', // Distance to travel
            easing: 'ease-in-out', // Easing function
            reset: true // Whether to reset the animation on scroll back up
        });
    } else {
        console.error('ScrollReveal is not loaded');
    }
});

/*===== SCROLL TO THE TOP BUTTON =====*/

// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

