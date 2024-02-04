// Menu
const buttons = document.querySelectorAll('header button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        document.querySelector('body').classList.toggle('nav-open');
        document.querySelector('nav').classList.toggle('show');
    });
});

// Scroll top
const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', (event) => {
    topFunction();
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}