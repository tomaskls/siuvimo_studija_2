const sideMenu = document.querySelector('.sideMenu');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.sideMenu a');

menuBtn.addEventListener('click', function() {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Uždraudžia slinkimą
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


function closeMenu(event) {
    // Jei event objektas egzistuoja ir jis nėra iš overlay, sustabdome jo sklaidą
    if (event && event.target !== overlay) {
        event.stopPropagation();
    }
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Leidžiame nuorodai suveikti prieš uždarant meniu
        setTimeout(() => {
            closeMenu();
        }, 100);
    });
});


// function closeMenu() {
//     sideMenu.classList.remove('open');
//     overlay.classList.remove('active');
//     document.body.style.overflow = ''; // Grąžina slinkimą
// }