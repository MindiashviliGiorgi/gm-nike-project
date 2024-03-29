import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';
import { SizesService } from 'src/app/shared/sizes.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  singleItemData: any[] = [];
  choicedImageSrc : string = '';
  itemSizeList : string[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private data: DataService,
    private sizes : SizesService,
    private el : ElementRef,
    private shoppingCart : ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.getItem();
    this.getSizeList();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getItemColor();
    }, 300)
  }

  getItem() {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.data.getMensData().subscribe((res) => {
        const menObject = res?.men;
        if (menObject) {
          const selectedShoe = Object.values(menObject).find(shoe => shoe.id.toString() === itemId);
          if (selectedShoe) {
            this.singleItemData = [...this.singleItemData, selectedShoe];
            this.choicedImageSrc = this.singleItemData[0].images[0].imageSrc;
          }
        }
      });
    }
  }

  onImageMouseOver(imageSrc : string):void {
    this.choicedImageSrc = imageSrc;
  }
  
  getSizeList() {
    this.itemSizeList = this.sizes.getSizes();
  }

  getItemColor() {
    const colorCircle = this.el.nativeElement.querySelector('.circle-color');
    colorCircle.style.backgroundColor = this.singleItemData[0].color;
  }

  addToBag(): void {
    if (this.singleItemData.length > 0) {
      const selectedItem = this.singleItemData[0];
      this.shoppingCart.addItem(selectedItem);
    }
  }

}