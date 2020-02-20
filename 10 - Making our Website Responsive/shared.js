var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', closeModal);
toggleButton.addEventListener('click', showMobileNav);

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  // mobileNav.style.display = 'none';
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');

  if (modal) {
    modal.classList.remove('open');
  }
}

function showMobileNav() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
}
