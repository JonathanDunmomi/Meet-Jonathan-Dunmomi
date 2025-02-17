const modeToggle = document.getElementById('modeToggle');
        const body = document.body;

        // Check for saved mode preference in localStorage
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            body.classList.add('dark-mode');
        }
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button icon and paragraph color dynamically
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '🌙'; 
        localStorage.setItem('theme', 'dark');
        changeParagraphColor('white'); // Change text color to white in dark mode
    } else {
        modeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'light');
        changeParagraphColor('black'); // Change text color to black in light mode
    }
});

        