const menuIcon = document.getElementById('menu-icon');
const dropdown = document.getElementById('dropdown');

menuIcon.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});



const images = ['http://admin.evos.uz/uploads/Risunok_99791bd924.png', 'http://admin.evos.uz/uploads/Sajt_1000x1000_390068760c.png'];
let current = 0;
const imgElement = document.getElementById('switch-img');

setInterval(() => {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
}, 3000);

