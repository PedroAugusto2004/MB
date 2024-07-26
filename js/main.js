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
  
