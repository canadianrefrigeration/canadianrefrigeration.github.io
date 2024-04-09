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

window.onscroll = function () { scrollCheck() };

function scrollCheck() {
    let scrollToTopButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > document.getElementById('companyHeader').offsetHeight || document.documentElement.scrollTop > document.getElementById('companyHeader').offsetHeight) scrollToTopButton.classList.remove("hidden");
    else scrollToTopButton.classList.add("hidden");

    let navLeftBar = document.getElementById("navLeftBar");
    if (document.body.scrollTop > document.getElementById('companyHeader').offsetHeight || document.documentElement.scrollTop > document.getElementById('companyHeader').offsetHeight) navLeftBar.classList.remove("hidden");
    else navLeftBar.classList.add("hidden");
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}