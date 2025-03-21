// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button if it doesn't exist
    if (!document.querySelector('.theme-switch')) {
      const themeSwitch = document.createElement('div');
      themeSwitch.className = 'theme-switch';
      themeSwitch.innerHTML = '<i class="fa-moon fas"></i>';
      document.body.appendChild(themeSwitch);
    }
  
    // Get current theme from localStorage or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Add click event to theme toggle
    document.querySelector('.theme-switch').addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Apply new theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update icon
      updateThemeIcon(newTheme);
    });
    
    // Function to update theme icon
    function updateThemeIcon(theme) {
      const themeIcon = document.querySelector('.theme-switch i');
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
      } else {
        themeIcon.className = 'fas fa-moon';
      }
    }
    
    // Add animation classes to elements when they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  });