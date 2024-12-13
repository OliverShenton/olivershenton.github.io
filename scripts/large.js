// ! Progress Circles Animations

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

// ! Projects Card Animations

const cards = document.querySelectorAll(".card");
const cardObserver = new IntersectionObserver(
  (entries, cardObserver) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("pop-up");
        }, index * 500);
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => cardObserver.observe(card));
