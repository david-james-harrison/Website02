// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Form Validation
  const form = document.querySelector('.contact__form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
  
    if (nameValid && emailValid && messageValid) {
      alert('Form submitted successfully!');
      form.reset(); // Clears the form fields
    } else {
      alert('Please fill out all fields correctly.');
    }
  });
  
  function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      showError(nameInput, 'Name is required.');
      return false;
    } else {
      hideError(nameInput);
      return true;
    }
  }
  
  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailValue === '') {
      showError(emailInput, 'Email is required.');
      return false;
    } else if (!emailRegex.test(emailValue)) {
      showError(emailInput, 'Please enter a valid email.');
      return false;
    } else {
      hideError(emailInput);
      return true;
    }
  }
  
  function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
      showError(messageInput, 'Message is required.');
      return false;
    } else {
      hideError(messageInput);
      return true;
    }
  }
  
  function showError(input, message) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = 'inline';
    input.classList.add('error');
    input.placeholder = message;
  }
  
  function hideError(input) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = 'none';
    input.classList.remove('error');
  }
  
  // Open Social Media Links in a New Tab
  document.querySelectorAll('.header__social').forEach(socialLink => {
    socialLink.setAttribute('target', '_blank');
  });
  