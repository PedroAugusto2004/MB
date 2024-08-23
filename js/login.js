// Function to show sign-up form
function showSignUp() {
    // Logic to show sign-up form
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Function to show sign-in form
function showSignIn() {
    // Logic to show sign-in form
    document.getElementById('sign-in-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Function to show forgot password form
function showForgotPassword() {
    // Logic to show forgot password form
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}

// Function to handle sign in
function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            // Handle successful login (e.g., redirect to another page)
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error during sign-in.');
    });
}

// Function to handle sign up
function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const dob = document.getElementById('signup-dob').value;
    const phone = document.getElementById('signup-phone').value;
    const country = document.getElementById('signup-country').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions');
        return;
    }

    const data = {
        name,
        email,
        password,
        dob,
        phone,
        country,
        gender,
        terms
    };

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            showSignIn();
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error during sign-up.');
    });
}

// Function to handle forgot password
function forgotPassword() {
    const email = document.getElementById('forgot-email').value;

    fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error during password reset.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Bind the signIn, signUp, and forgotPassword functions to their respective buttons
    document.querySelector('#signin-button')?.addEventListener('click', signIn);
    document.querySelector('#signup-button')?.addEventListener('click', signUp);
    document.querySelector('#forgot-password-button')?.addEventListener('click', forgotPassword);
    document.querySelector('#show-signup-button')?.addEventListener('click', showSignUp);
    document.querySelector('#show-signin-button')?.addEventListener('click', showSignIn);
    document.querySelector('#show-forgot-password-button')?.addEventListener('click', showForgotPassword);
});
