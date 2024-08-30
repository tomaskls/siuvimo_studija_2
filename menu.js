const sideMenu = document.querySelector('.sideMenu');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function() {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Uždraudžia slinkimą
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Grąžina slinkimą
}