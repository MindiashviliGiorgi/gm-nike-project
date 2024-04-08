import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-slider',
  templateUrl: './drag-slider.component.html',
  styleUrls: ['./drag-slider.component.scss']
})
export class DragSliderComponent implements AfterViewInit {

  containers : Array<any> = [
    'Giorgi',
    'Pavel', 
    'Petre', 
    'Ivane', 
    'Aeha', 
    'Redrum', 
    'See some',
    'Good morning',
    'lets go'
  ];

  private isActive = false;
  private startX!: number;
  private scrollLeft!: number;

  constructor(private el : ElementRef) {}

  @ViewChild('slider') slider!: ElementRef;
  
  private readonly debounceTime = 10;

  ngAfterViewInit(): void {

    this.slider.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
      this.isActive = true;
      this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    });

    this.slider.nativeElement.addEventListener('mouseleave', () => {
      this.isActive = false;
    });
    this.slider.nativeElement.addEventListener('mouseup', () => {
      this.isActive = false;
    });
    this.slider.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isActive) return;
      let x = e.pageX - this.slider.nativeElement.offsetLeft;
      let walk = (x - this.startX) * 1;
      this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
    });

    this.slider.nativeElement.addEventListener('mousemove', this.handleMouseMoveDebounced.bind(this));
  }

  private handleMouseMoveDebounced(event: MouseEvent): void {
    if (!this.isActive) return;

    const x = event.pageX - this.slider.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1;
    this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

}
