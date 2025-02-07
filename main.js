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
