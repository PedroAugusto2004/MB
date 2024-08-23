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

