// Import the necessary functions from the Firebase SDK  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"; // Import Firestore functions
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging.js";

// My web app's Firebase configuration
const firebaseConfig = {
  //apiKey: 
  //authDomain: 
  //projectId: 
  //storageBucket: 
  //messagingSenderId: 
  //appId: 
};
// Initialize Firebase using the modular approach
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// Function to show a custom alert with a specified message and type (e.g., success, error)
function showAlert(message, type = 'info') {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');

  // Set the message and type
  alertMessage.textContent = message;
  alertBox.className = `alert ${type}`; // Apply appropriate styling class
  alertBox.classList.remove('hidden');

  // Show alert with a smooth transition
  setTimeout(() => {
    alertBox.style.opacity = '1';
    alertBox.style.transform = 'translateY(0)';
  }, 100); // Delay for smooth appearance

  // Auto-close alert after a few seconds
  setTimeout(() => {
    closeAlert();
  }, 5000); // Adjust the time as needed
}

// Function to close the custom alert
function closeAlert() {
  const alertBox = document.getElementById('custom-alert');

  // Hide alert with a smooth transition
  alertBox.style.opacity = '0';
  alertBox.style.transform = 'translateY(-20px)';

  setTimeout(() => {
    alertBox.classList.add('hidden');
  }, 300); // Delay to allow the transition to complete
}

// Function to handle sign-up using Firebase
async function handleSignUp(event) {
  event.preventDefault();

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const dateOfBirth = document.getElementById('signup-dob').value;
  const phone = document.getElementById('signup-phone').value || "";
  const country = document.getElementById('signup-country').value;
  const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";

  // Validate passwords
  if (password !== confirmPassword) {
    showAlert("Passwords do not match!", 'error');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      dateOfBirth: dateOfBirth,
      phone: phone,
      country: country,
      gender: gender,
      createdAt: new Date()
    });

    showAlert("Signed up successfully!", 'success');
    window.location.href = "index.htm";
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showAlert('The email address is already in use. Please try a different email.', 'error');
    } else if (error.code === 'auth/invalid-email') {
      showAlert('The email address is invalid. Please check and try again.', 'error');
    } else if (error.code === 'auth/weak-password') {
      showAlert('The password is too weak. Please enter a stronger password.', 'error');
    } else {
      console.error("Error signing up or saving data:", error);
      showAlert("Error: " + error.message, 'error');
    }
  }
}

// Function to handle sign-in using Firebase
async function handleSignIn(event) {
  event.preventDefault();

  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    showAlert("You have successfully signed in!", 'success');

    // Display the welcome message with user's name
    await displayWelcomeMessage(user.uid);

    // Redirect after a short delay (optional)
    setTimeout(() => {
      window.location.href = "index.htm";
    }, 1000); // Adjust delay as needed
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showAlert('The password is incorrect. Please try again.', 'error');
    } else if (error.code === 'auth/user-not-found') {
      showAlert('No user found with this email. Please sign up first.', 'error');
    } else {
      console.error("Error signing in:", error);
      showAlert("Error: " + error.message, 'error');
    }
  }
}

// Function to handle the display of welcome message after sign-in
async function displayWelcomeMessage(userId) {
  const authPlaceholder = document.getElementById("auth-placeholder");
  if (authPlaceholder) {
    // Get user data from Firestore
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      // Replace the "Sign In" button with a welcome message using user's name
      authPlaceholder.innerHTML = `<p class="welcome-message">Welcome, ${userData.name}!</p>`;
    }
  }
}

// Check the authentication state to ensure the user is authenticated before performing Firestore operations
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, display welcome message
    displayWelcomeMessage(user.uid);
  } else {
    console.log('No user is currently authenticated.');
    // Handle UI accordingly or notify the user
  }
});

// Attach Firebase handlers to buttons
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signup-button')?.addEventListener('click', handleSignUp);
  document.getElementById('signin-button')?.addEventListener('click', handleSignIn);
});
