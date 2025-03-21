// Main JavaScript for portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // If mobile menu is open, close it after clicking
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            }
        });
    });
    
    // Activate Bootstrap scrollspy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 100
    });
    
    // Portfolio filter functionality
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show all items if 'all' is selected, otherwise filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const formInputs = this.querySelectorAll('input, textarea');
            
            formInputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) {
                        isValid = false;
                        input.classList.add('is-invalid');
                    }
                }
            });
            
            if (isValid) {
                // Simulating form submission
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Here you would typically send the form data to a server
                // For demo purposes, we'll use a timeout to simulate server response
                setTimeout(() => {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.textContent = 'Your message has been sent successfully!';
                    contactForm.appendChild(successMessage);
                    
                    // Reset form
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
        
        // Clear validation styling on input
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('is-invalid');
            });
        });
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        // IntersectionObserver to detect when elements enter viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Optional: Unobserve after animation is triggered
                    // observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Dynamic typing effect for hero section
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const phrases = [
            'Web Developer',
            'UI/UX Designer',
            'Freelancer',
            'Problem Solver'
        ];
        
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentPhrase = phrases[currentPhraseIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                typedElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                // Pause at the end of typing
                isDeleting = true;
                typingSpeed = 1000;
            } else if (isDeleting && currentCharIndex === 0) {
                // Move to next phrase
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing effect
        setTimeout(type, 1000);
    }
});