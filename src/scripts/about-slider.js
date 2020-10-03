(function () {
  class Slider {
    constructor(startIndex, element) {
      this.startIndex = startIndex;
      this.currentIndex = this.startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll(".slideshow-about__slide");
      this.dots = this.element.querySelectorAll(".dot");
      this.setActiveSlide();
      this.setActiveDot();
      this.nextBtn = this.element.querySelector('[data-way="next"]');
      this.nextBtn.addEventListener("click", this.next.bind(this));
      this.prevBtn = this.element.querySelector('[data-way="prev"]');
      this.prevBtn.addEventListener("click", this.prev.bind(this));
    }
    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
    setActiveDot() {
      this.dots.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
    next() {
      if (this.currentIndex === this.slides.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.setActiveSlide();
      this.setActiveDot();
    }
    prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1;
      } else {
        this.currentIndex--;
      }
      this.setActiveSlide();
      this.setActiveDot();
    }
  }
  let slideShow = document.querySelectorAll(".slideshow-about__slider");
  slideShow.forEach((item) => {
    item = new Slider(0, item);
    setInterval(function () {
      item.next();
    }, 3000);
  });
})();
