import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  singleItemData: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getItem();
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
            console.log(this.singleItemData)
          }
        }
      });
    }
  }
  
  
}

