let index = 0;
const slides = document.getElementById("Cbn-slides");
const slideItems = document.querySelectorAll(".Cbn-slide");
const total = slideItems.length;
const dotsContainer = document.getElementById("dots");

/* ===== CREATE DOTS ===== */
for (let i = 0; i < total; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("data-index", i);
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    update();
  });
}

const dots = document.querySelectorAll(".dot");

/* ===== CLONE FIRST SLIDE ===== */
const firstClone = slideItems[0].cloneNode(true);
slides.appendChild(firstClone);

/* ===== UPDATE FUNCTION ===== */
function update() {
  slides.style.transition = "0.6s ease";
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((d) => d.classList.remove("active"));
  if (index < total) {
    dots[index].classList.add("active");
  } else {
    dots[0].classList.add("active"); // for cloned slide
  }
}

/* ===== NEXT ===== */
function nextSlide() {
  index++;
  update();

  if (index === total) {
    setTimeout(() => {
      slides.style.transition = "none";
      index = 0;
      slides.style.transform = `translateX(0)`;
      updateDots();
    }, 600);
  }
}

/* ===== PREV ===== */
function prevSlide() {
  if (index === 0) {
    slides.style.transition = "none";
    index = total;
    slides.style.transform = `translateX(-${index * 100}%)`;

    setTimeout(() => {
      slides.style.transition = "0.6s ease";
      index--;
      update();
    }, 10);
  } else {
    index--;
    update();
  }
}

/* ===== DOT UPDATE FIX ===== */
function updateDots() {
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

/* ===== AUTO SLIDE ===== */
setInterval(nextSlide, 4000);

/* INIT */
update();
