// ! Header Navigation Menu

function toggleNav() {
  const button = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("header-nav");

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);

  button.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenuOnItemClick() {
  const navMenuItems = document.querySelectorAll("#header-nav a");
  navMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const navMenu = document.getElementById("header-nav");
      if (navMenu.classList.contains("active")) {
        toggleNav();
      }
    });
  });
}

document.addEventListener("click", (event) => {
  const button = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("header-nav");

  if (
    !button.contains(event.target) &&
    !navMenu.contains(event.target) &&
    navMenu.classList.contains("active")
  ) {
    toggleNav();
  }
});

closeMenuOnItemClick();

// ! Function to handle scroll offset dynamically
function scrollToElementWithOffset(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offset = window.innerWidth <= 768 ? 60 : 100;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", scrollToElementWithOffset);
});

// ! Progress Circle Aniamtions

function triggerProgressAnimation(entry) {
  const container = entry.target;
  const circle = container.querySelector(".circle");
  const label = container.querySelector("p");
  const span = container.querySelector("span");

  const percent = container.getAttribute("data-percent");
  const labelText = container.getAttribute("data-label");

  label.textContent = labelText;

  let progress = 0;
  const animateProgress = setInterval(() => {
    if (progress >= percent) {
      clearInterval(animateProgress);
    } else {
      progress++;
      circle.style.background = `conic-gradient( from 0deg,
            #ff7e5f 0%,
            #feb47b ${progress}%,
            #fff5e4 ${progress}% )`;
      span.textContent = `${progress}%`;
    }
  }, 15);
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        triggerProgressAnimation(entry);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".circle-container").forEach((container) => {
  observer.observe(container);
});

document.querySelectorAll(".circle").forEach((circle) => {
  circle.addEventListener("mouseenter", () => {
    circle.classList.add("bouncing");
  });

  circle.addEventListener("animationend", () => {
    circle.classList.remove("bouncing");
  });
});

// ! Animate Project Cards

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 500);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
});

// ! Set year in footer

document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
