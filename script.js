function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) localStorage.setItem('mode', 'dark');
    else localStorage.setItem('mode', 'white');
}

function checkDarkModePreference() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedMode = localStorage.getItem('mode');
    const body = document.querySelector('body');
    if (prefersDarkScheme.matches || savedMode === 'dark') body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', checkDarkModePreference);
