const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const overlay = document.getElementById('overlay');
const navMenu = document.getElementById('nav-menu');

const toggleVisibility = function(element) {
  element.classList.toggle('hidden');
}

const toggleNavMenu = function() {
  toggleVisibility(menuOpenButton);
  toggleVisibility(menuCloseButton);
  toggleVisibility(overlay);

  if(navMenu.getAttribute('data-attribute') === 'false') {
    navMenu.setAttribute('data-attribute', 'true');
  }
  else {
    navMenu.setAttribute('data-attribute', 'false');
  }
  return blah;
}

menuOpenButton.addEventListener('click', toggleNavMenu, false);
menuCloseButton.addEventListener('click', toggleNavMenu, false);