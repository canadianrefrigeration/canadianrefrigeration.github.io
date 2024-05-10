document.addEventListener('DOMContentLoaded', checkDarkModePreference);
window.addEventListener("resize", navSideBarVisibility);

setTimeout(() => {
    document.location.reload();
  }, 3600000);

function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    let toggleBtn = document.getElementById("toggleBtn");
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        toggleBtn.textContent = "Light Mode";
    }
    else {
        localStorage.setItem('mode', 'white');
        toggleBtn.textContent = "Dark Mode";
    }
}

function checkDarkModePreference() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedMode = localStorage.getItem('mode');
    const body = document.querySelector('body');
    if (prefersDarkScheme.matches || savedMode === 'dark') {
        body.classList.add('dark-mode');
        let toggleBtn = document.getElementById("toggleBtn");
        toggleBtn.textContent = "Light Mode";
    }
}

window.onscroll = function () { scrollCheck() };

function scrollCheck() {
    let navLeftBar = document.getElementById("navLeftBar");
    if (document.documentElement.clientWidth > 480) {
        if (document.body.scrollTop > document.getElementById('companyHeader').offsetHeight || document.documentElement.scrollTop > document.getElementById('companyHeader').offsetHeight) navLeftBar.classList.remove("hidden");
        else navLeftBar.classList.add("hidden");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function navSideBarVisibility() {
    let navLeftBar = document.getElementById("navLeftBar");
    let toggleBtn = document.getElementById("toggleBtn");
    if (document.documentElement.clientWidth > 480) {
        navLeftBar.classList.remove("hidden");
        toggleBtn.classList.add("fixed");
    }
    else {
        navLeftBar.classList.add("hidden");
        toggleBtn.classList.remove("fixed");
    }
}