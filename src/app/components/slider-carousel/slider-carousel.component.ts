import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.scss']
})
export class SliderCarouselComponent {
  currentIndex: number = 0;
  imagesArray: any = [
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-1.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-2.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-3.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-4.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-5.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-6.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-7.png"},
    {"imageSrc": "/assets/images/mens-shoes/shoes1/shoes1-8.png"}
  ];

  constructor() {}

  ngOnInit(): void {}

  moveSlide(direction: 'prev' | 'next'): void {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.imagesArray.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.imagesArray.length) % this.imagesArray.length;
    }
  }

  getPrevImage(): string | null {
    const prevIndex = (this.currentIndex - 1 + this.imagesArray.length) % this.imagesArray.length;
    return this.imagesArray[prevIndex] ? this.imagesArray[prevIndex].imageSrc : null;
  }

  getNextImage(): string | null {
    const nextIndex = (this.currentIndex + 1) % this.imagesArray.length;
    return this.imagesArray[nextIndex] ? this.imagesArray[nextIndex].imageSrc : null;
  }
}

