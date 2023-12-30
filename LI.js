document.addEventListener('DOMContentLoaded', function () {
     // Get the dark mode toggle input element
    const darkModeToggle = document.getElementById('darkmode-toggle');

    // Add an event listener to the toggle 
    darkModeToggle.addEventListener('change', function () {
         // Toggle the 'dark-mode' class on the body based on the toggle state
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
  });