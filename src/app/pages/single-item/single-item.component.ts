import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    const itemId = this.route.snapshot.paramMap.get('id');
    
  }

}
