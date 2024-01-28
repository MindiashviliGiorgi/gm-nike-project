import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/shared/language.service';

interface NewInformation {
  id : number;
  title : string;
  information : string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentDataIndex : number = 0;
  newData : NewInformation[] = [
    {
      "id" : 0,
      "title" : "Free Delivery & Returns",
      "information" : "Nike Members get free delivery and free 60-day returns. Learn More Join Us"
    },
    {
      "id" : 1,
      "title" : "20% Off Fleece Sets",
      "information" : "Pair fleece tops and bottoms. Use code FLEECE23 on selected styles.* Valid til 21 December 9am CET. Shop *Promo Terms"
    },
    {
      "id" : 2,
      "title" : "Shop All New Arrivals",
      "information" : "Shop"
    }
  ];
  constructor(private el : ElementRef, private languageService : LanguageService) {}

  ngOnInit(): void {
    this.showItem();
    this.onHeaderScroll();
  }

  showItem() {
    setInterval(() => {
      this.currentDataIndex = (this.currentDataIndex + 1) % this.newData.length;
    }, 1500);
  }

  @HostListener("document:scroll")
  onHeaderScroll() {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    const headerMain = this.el.nativeElement.querySelector('.header-main')
    const headerUp = this.el.nativeElement.querySelector('.header-up');
    const headerMiddle = this.el.nativeElement.querySelector('.header-middle');
    const headerDown = this.el.nativeElement.querySelector('.header-down');

    if (scrollValue > 5) {
      headerMain.style.height = '150px'
      headerUp.style.display = 'none';
      headerDown.style.display = 'none'
      headerMiddle.style.position = 'fixed';
      headerMiddle.style.left = '0';
      headerMiddle.style.right = '0';
      headerMiddle.style.top = '0';
      headerMiddle.style.zIndex = 10;
    } else if (scrollValue < 5) {
      headerMain.style.height = 'auto'
      headerUp.style.display = 'flex';
      headerDown.style.display = 'flex';
      headerMiddle.style.position = 'relative'
    }
  }



}
