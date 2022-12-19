const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');

  if (isAsideOpen) {
    aside.classList.toggle('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');
  
  if (isAsideOpen) {
    aside.classList.toggle('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.toggle('inactive');
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.toggle('inactive');
  }

  aside.classList.toggle('inactive');
}