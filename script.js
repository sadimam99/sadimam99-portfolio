// Hamburger Menu বাটন ও Nav Links খুঁজে বের করা
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Hamburger-এ ক্লিক করলে Menu খোলা/বন্ধ হবে
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// কোনো একটা Menu Link-এ ক্লিক করলে Menu বন্ধ হয়ে যাবে (Mobile-এর জন্য সুবিধাজনক)
const allLinks = navLinks.querySelectorAll('a');
allLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});
