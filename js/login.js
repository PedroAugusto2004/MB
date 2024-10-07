// Function to show sign-up form
function showSignUp() {
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Function to show sign-in form
function showSignIn() {
    document.getElementById('sign-in-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Function to show forgot password form
function showForgotPassword() {
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}

// Initialize intl-tel-input for the phone number input
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector("#signup-phone");

    // Initialize the phone number input with country code selection
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            fetch('https://ipinfo.io?token=<your_token>', { headers: { 'Accept': 'application/json' } })
                .then((resp) => resp.json())
                .then((resp) => {
                    const countryCode = (resp && resp.country) ? resp.country : "us";
                    callback(countryCode);
                });
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Ensure this is loaded
    });

    // Attach UI handlers for navigation
    document.querySelector('#show-signup-button')?.addEventListener('click', showSignUp);
    document.querySelector('#show-signin-button')?.addEventListener('click', showSignIn);
    document.querySelector('#show-forgot-password-button')?.addEventListener('click', showForgotPassword);

    // Handle sign-up form submission and pass formatted phone number to register.js
    document.getElementById('signup-button')?.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the formatted phone number with the selected country code
        const formattedPhoneNumber = iti.getNumber(); // Get the number in E.164 format
        phoneInput.value = formattedPhoneNumber; // Set the input value to the formatted number

        // Trigger the handleSignUp function in register.js
        handleSignUp(event);
    });
});

