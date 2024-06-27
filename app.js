document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const successMessage = document.querySelector('.success-message');
    const formInputs = document.querySelectorAll('.form-input');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Example: Simulate successful submission (replace with actual AJAX request)
      setTimeout(() => {
        // Hide form inputs and show success message
        formInputs.forEach(input => {
          input.style.display = 'none';
        });
        successMessage.style.display = 'block';
      }, 1000); // Adjust timeout as needed for testing purposes
    });
  });
  