const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}else{
    console.log("Ligth Mode.....")
}

// Toggle theme function
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the current theme to localStorage
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('theme', currentTheme);
});
