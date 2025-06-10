const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});



const hero = document.querySelector('.hero');
const bgImages = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1550547660-d9450f859349"
];
let i = 0;

function changeHeroBg() {
  hero.style.backgroundImage = `url(${bgImages[i]})`;
  i = (i + 1) % bgImages.length;
}

changeHeroBg();
setInterval(changeHeroBg, 5000); // har 5 sekundda almashsin




function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  alert(`${itemName} savatga qo‘shildi!`);

  // OPTIONAL: Savat element sonini yangilash (agar navbarda ko‘rsatilsa)
  const cartIcon = document.querySelector('#cart-count');
  if (cartIcon) {
    cartIcon.textContent = cart.length;
  }
}



document.getElementById('filial-link').addEventListener('click', function(e) {
  e.preventDefault();
  const section = document.getElementById('filial-section');
  if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    section.classList.add('hidden');
  }
});


