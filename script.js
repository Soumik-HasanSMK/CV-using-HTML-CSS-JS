// Typing Effect for Name
const nameStr = "MD. SOUMIK HASAN";
let i = 0;
function typeWriter() {
    if (i < nameStr.length) {
        document.getElementById("typed-name").innerHTML += nameStr.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Dark Mode Toggle with localStorage
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    const modeBtn = document.getElementById("Toggle");
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        modeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        modeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}


// On Load
window.onload = function () {
    typeWriter();
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
    document.getElementById("year").textContent = new Date().getFullYear();
};

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// col Section Toggle
function toggleSection(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    header.innerHTML = content.style.display === "block"
        ? header.innerHTML.replace("▾", "▴")
        : header.innerHTML.replace("▴", "▾");
}
