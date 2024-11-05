// *! Navigation Bar
const navBar = document.getElementById('navigation_bar');
const btn = document.getElementById('navigation_button');
const icon = document.getElementById('navigation_icon');

function toggleNavigation() {
  const isOpen = navBar.classList.toggle('open');
  icon.icon = isOpen ? 'ion:close' : 'f7:line-horizontal-3';
}

function closeNavigation() {
  if (navBar.classList.contains('open')) {
    navBar.classList.remove('open');
    icon.icon = 'f7:line-horizontal-3';
  }
}

window.addEventListener('click', event => {
  if (!navBar.contains(event.target) && !btn.contains(event.target)) {
    closeNavigation();
  }
});

document.querySelectorAll('.navigation_link').forEach(link => {
  link.addEventListener('click', closeNavigation);
});

// *! Link Scrolling offset
document.querySelectorAll('.summary_button').forEach(button => {
  button.addEventListener('click', function () {
    toggleSummaryPanel(this);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    const headerOffset = 98;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// *! Project links
function chatAppLink() {
  window.open('https://os-nodejs-chat-app-04e3fed13418.herokuapp.com/');
}

function githubChatApp() {
  window.open('https://github.com/OliverShenton/os-nodejs-chat-app');
}

function guessMyNumberLink() {
  window.location.href = '/views/guess-my-number-app/gmn-index.html';
}

function githubGuessMyNumber() {
  window.open('https://github.com/OliverShenton/os-guess-my-number-app');
}

// *! Experience & Education Buttons
function toggleSummaryPanel(button) {
  const panel = button.nextElementSibling;
  const icon = button.querySelector('iconify-icon');
  const allPanels = document.querySelectorAll('.summary_item_content');
  const allIcons = document.querySelectorAll('.summary_button iconify-icon');

  allPanels.forEach(p => {
    if (p !== panel) {
      p.style.maxHeight = null;
      p.classList.remove('active');
    }
  });

  allIcons.forEach(i => {
    if (i !== icon) {
      i.classList.remove('rotated');
    }
  });

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.classList.remove('active');
    icon.classList.remove('rotated');
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.classList.add('active');
    icon.classList.add('rotated');
  }
}
