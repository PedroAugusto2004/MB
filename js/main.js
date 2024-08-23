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

	
//TERMS AND CONDITIONS

document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('terms-modal');
	const agreeBtn = document.getElementById('agree-btn');
	const content = document.getElementById('content');
  
	// Check if the user has already agreed to the terms
	if (!localStorage.getItem('termsAgreed')) {
	  modal.style.display = 'block';
	} else {
	  content.classList.remove('hidden');
	}
  
	// When the user clicks the "I Agree" button
	agreeBtn.addEventListener('click', function () {
	  localStorage.setItem('termsAgreed', 'true');
	  modal.style.display = 'none';
	  content.classList.remove('hidden');
	});
  });
	

//DARKMODE SWITCH

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const elementsToToggle = document.querySelectorAll('section, p, li, h1, h2, h3, h4, h5, h6, label, input, form, span');

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    elementsToToggle.forEach(element => {
        element.classList.toggle('dark-mode');
    });
});