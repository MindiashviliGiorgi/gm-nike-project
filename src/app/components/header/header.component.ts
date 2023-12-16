import { Component } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.showItem()
  }

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

  showItem() {

    setInterval(() => {
      this.currentDataIndex = (this.currentDataIndex + 1) % this.newData.length;
    }, 2000);
  }


}
