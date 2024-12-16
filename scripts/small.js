// ! Navigation Menu Toggle

function toggleNav(element) {
  element.classList.toggle('active');

  const navMenu = document.getElementById('header-nav1');
  navMenu.classList.toggle('active');

  if (navMenu.classList.contains('active')) {
    setTimeout(() => window.addEventListener('click', closeOnOutsideClick), 0);
  } else {
    window.removeEventListener('click', closeOnOutsideClick);
  }

  const navLinks = document.querySelectorAll('#header-nav1 a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => closeNav());
  });
}

function closeNav() {
  const navButton = document.getElementById('header-button');
  const navMenu = document.getElementById('header-nav1');

  navButton.classList.remove('active');
  navMenu.classList.remove('active');
  window.removeEventListener('click', closeOnOutsideClick);
}

function closeOnOutsideClick(event) {
  const navButton = document.getElementById('header-button');
  const navMenu = document.getElementById('header-nav1');

  if (!navButton.contains(event.target) && !navMenu.contains(event.target)) {
    closeNav();
  }
}

// ! Experience Progress circles

document.querySelectorAll('.progress').forEach(progress => {
  const percentage = parseInt(progress.getAttribute('data-percentage'));
  const caption = progress.getAttribute('data-caption');
  const link = progress.getAttribute('data-link');
  const linkText = progress.getAttribute('data-link-text');
  const target = progress.getAttribute('data-link-target') || '_self';

  progress.style.setProperty('--progress', percentage);

  progress.innerHTML = `
        <svg viewBox="0 0 120 120">
          <circle class="background" cx="60" cy="60" r="50"></circle>
          <circle class="bar" cx="60" cy="60" r="50"></circle>
        </svg>
        <div class="label">${percentage}%</div>
        <div class="caption"><a href=${link}>${linkText}</a></div>
      `;
});

// ! Function to handle scroll offset
function scrollToElementWithOffset(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offset = 92;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

const scrollLinks = document.querySelectorAll('.nav-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', scrollToElementWithOffset);
});
