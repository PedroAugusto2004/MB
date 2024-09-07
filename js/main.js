$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

});

//SLIDESHOW

let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slides img').length;
    let startX, endX;

    function showSlides() {
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlides();
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlides();
    }

    // Touch events
    slides.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchmove', e => {
        endX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            nextSlide(); // Swipe left
        } else if (startX < endX - 50) {
            prevSlide(); // Swipe right
        }
    });

    // Automatic slide (optional)
    setInterval(nextSlide, 5000); // Change image every 5 seconds

// SUBSCRIBE

document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the email input field
    const emailInput = document.getElementById('emailInput').value;
  
    // Check if the email input is not empty
    if (emailInput.trim() !== '') {
      // Change button text to 'SUBMITTED'
      this.textContent = 'SUBMITTED';
      
      // Clear the email input field
      document.getElementById('emailInput').value = '';
  
      // Disable the button to prevent further clicks
      this.style.pointerEvents = 'none';
      this.style.backgroundColor = '#333'; // Change button color after submission
  
      // Redirect to the login page after submission (example: "/login")
      setTimeout(function() {
        window.location.href = 'login.htm'; // Replace with your actual login page URL
      }, 1500); // Adds a slight delay of 1.5 seconds before redirecting
    } else {
      // If the email input is empty, alert the user
      alert('Please fill in your email before submitting.');
    }
  });
  