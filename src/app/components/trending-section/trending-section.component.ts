import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MensData, MensShoes } from 'src/app/interfaces/mens-data.interface';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.scss']
})
export class TrendingSectionComponent {
  mensData : MensData | undefined;
  mensDataList: MensShoes[] = [];

  constructor(
    private dataService : DataService,
    private el : ElementRef,
    private route : Router
    ) {}

  ngOnInit(): void {
    this.getDataMens();
  }

  getDataMens() {
    this.dataService.getMensData()
    .subscribe((res) => {
      this.mensData = res;
      this.mensDataList = Object.values(this.mensData.men) as MensShoes[];
    })
  }

  moveScrollRight() {
    const bodyDiv = this.el.nativeElement.querySelector('.containers-list');
    if (bodyDiv) {
      bodyDiv.scrollLeft += 370;
    }
  }

  moveScrollLeft() {
    const bodyDiv = this.el.nativeElement.querySelector('.containers-list');
    if (bodyDiv) {
      bodyDiv.scrollLeft -= 370;
    }
  }

  isScrollZero() {
    const bodyDiv = this.el.nativeElement.querySelector('.containers-list');
    if (bodyDiv) {
      return bodyDiv.scrollLeft === 0;
    } else {
      return true;
    }
  }

  isScrollZeroRight() {
    const bodyDiv = this.el.nativeElement.querySelector('.containers-list');
  }

}
