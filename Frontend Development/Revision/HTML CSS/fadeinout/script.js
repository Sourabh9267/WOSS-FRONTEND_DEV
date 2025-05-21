// app.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Part 1: Handle Fading OUT the current page ---
    const transitionLinks = document.querySelectorAll('a.page-transition-link'); // Add this class to links you want to animate
    const body = document.body;
    // Or use a wrapper: const pageWrapper = document.getElementById('page-wrapper');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Only apply to internal links on the same domain, not mailto:, tel:, #hashes, or external links
            const href = this.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || (href.startsWith('http') && !href.startsWith(window.location.origin))) {
                return; // Allow default behavior
            }

            event.preventDefault(); // Stop immediate navigation

            // Add class to start fade-out
            body.classList.add('fade-out-start'); // Ensure initial state is set for transition

            // Force reflow to ensure transition plays
            void body.offsetWidth;

            body.classList.add('fade-out-active');
            // If using a wrapper:
            // pageWrapper.classList.add('fade-out-active');

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Must match your CSS transition duration (e.g., 0.5s = 500ms)
        });
    });

    // --- Part 2: Handle Fading IN the new page ---
    // This runs when any new page (that includes this script) loads

    // Set initial state for fade-in
    body.classList.add('fade-in-start');
    // If using a wrapper:
    // if (pageWrapper) pageWrapper.classList.add('fade-in-start');


    // On window load (ensures styles are applied and images etc. are loading)
    window.addEventListener('load', () => {
        // Force reflow before adding active class
        void body.offsetWidth;

        body.classList.add('fade-in-active');
        // If using a wrapper:
        // if (pageWrapper) pageWrapper.classList.add('fade-in-active');

        // Optional: Clean up classes after transition if they are no longer needed
        // setTimeout(() => {
        //     body.classList.remove('fade-in-start', 'fade-in-active');
        // }, 500); // Match transition duration
    });
});