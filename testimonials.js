class Testimonials {
  constructor(info) {
    this.info = info;
    this.testimonials = info.querySelectorAll('.testimonial');

    this.leftButton = info.querySelector('.left-button');
    this.rightButton = info.querySelector('.right-button');

    this.currentIndex = 0;
    this.testimonials[this.currentIndex].style.display = 'block';

    this.leftButton.addEventListener('click', () => this.showLeftTestimonial());
    this.rightButton.addEventListener('click', () => this.showRightTestimonial());
  }

  showLeftTestimonial() {
    this.testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
      });
      this.currentIndex === 0 ? this.currentIndex = this.testimonials.length-1 : this.currentIndex--;
      this.testimonials[this.currentIndex].style.display = 'block';
      
    }

    // showLeftTestimonial() {
    //   this.testimonials.forEach(testimonial => {
    //     testimonial.style.display = 'none';
    //     });
    //     this.currentIndex === 0 ? this.currentIndex = this.testimonials.length-1 : this.currentIndex--;
    //     this.testimonials[this.currentIndex].style.display = 'block';
    //   }

  showRightTestimonial() {
    this.testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
      });
      this.currentIndex < this.testimonials.length-1 ? this.currentIndex++ : this.currentIndex = 0;
      this.testimonials[this.currentIndex].style.display = 'block';
    }
}

const info = document.querySelector('.testimonials');
new Testimonials(info);
