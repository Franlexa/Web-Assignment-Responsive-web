document.addEventListener('DOMContentLoaded', function () {
    const menuon = document.querySelector('.menuOn');
    const menuoff = document.querySelector('.menuOff');
    const menu = document.querySelector('.menu');
    
    menuon.addEventListener('click', function () {
    menu.style.display = 'flex';
    menuon.style.display = 'none';
    menuoff.style.display = 'block';
    });
    
    menuoff.addEventListener('click', function () {
    menu.style.display = 'none';
    menuon.style.display = 'block';
    menuoff.style.display = 'none';
    });
});
    