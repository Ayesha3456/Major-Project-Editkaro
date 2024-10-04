// scripts.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // You can add your form submission logic here, like sending data to an API
            console.log('Form submitted:', { name, email, message });

            // Optionally reset the form after submission
            form.reset();
            alert('Your message has been sent!');
        });
    }
});

// Example function for smooth scrolling (if you have internal links)
// You can leave this function if you want smooth scrolling for specific elements
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
