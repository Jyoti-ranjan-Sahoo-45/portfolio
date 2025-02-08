'use strict';

// Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
});

// Navigation Functionality
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        pages.forEach(page => page.classList.remove('active'));
        navigationLinks.forEach(nav => nav.classList.remove('active'));

        pages[index].classList.add('active');
        link.classList.add('active');
    });
});
// Initialize EmailJS with your User ID
emailjs.init('XuRZB5Zr_30RGTDHz'); // Replace with your EmailJS User ID

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_jc36hzw', 'template_y23u4r3', formData) // Replace with your Service ID and Template ID
        .then(function (response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});
