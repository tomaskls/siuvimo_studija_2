const navBar = document.querySelector("nav");
const meniuBtns = document.querySelectorAll(".menu-icon");
const overLay = document.querySelectorAll(".overlay");




document.querySelector('.menuBtn').addEventListener('click', function() {
    document.querySelector('.sideMenu').style.left = '0';
    document.body.style.marginLeft = "250px";
});

document.querySelector('.closeBtn').addEventListener('click', function() {
    document.querySelector('.sideMenu').style.left = '-250px';
    document.body.style.marginLeft = "0";
});