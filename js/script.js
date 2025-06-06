function scrollExploreMore(direction, containerId) {
  const container = document.getElementById(containerId);
  const scrollAmount = 320;
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentAnswer = button.nextElementSibling;
    const currentPlus = button.querySelector('.plus-sign');
    const isVisible = currentAnswer.classList.contains('show');

    faqButtons.forEach(btn => {
      btn.nextElementSibling.classList.remove('show');
      btn.querySelector('.plus-sign').textContent = '+';
    });

    if (!isVisible) {
      currentAnswer.classList.add('show');
      currentPlus.textContent = '−';
    }
  });
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  backToTopButton.style.display = scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sliderTrack = document.getElementById('slider-track');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

let currentPosition = 0;

const card = sliderTrack.querySelector('.testimonial-card');
const cardStyle = window.getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);

const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;

function updateSliderPosition() {
  sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
}

btnRight.addEventListener('click', () => {
  currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
  updateSliderPosition();
});

btnLeft.addEventListener('click', () => {
  currentPosition = Math.max(currentPosition - cardWidth, 0);
  updateSliderPosition();
});
