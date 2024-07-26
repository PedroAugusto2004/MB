//----------CALCULATOR----------//

const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function addToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
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
