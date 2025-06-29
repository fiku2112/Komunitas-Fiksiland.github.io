// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the navbar navigation
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#hamburger-menu');

    // Check if elements exist
    if (navbarNav && hamburger) {
        // Toggle class active when hamburger menu is clicked
        hamburger.onclick = () => {
            navbarNav.classList.toggle('active');
        };

        // Click outside the sidebar to hide the nav
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
            }
        });
    }
});