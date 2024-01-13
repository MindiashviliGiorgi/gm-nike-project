import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SizesService {

  sizes : string[] = [
    'UK 5.5',
    'UK 6 (EU 39)',
    'UK 6 (EU 40)',
    'UK 6.5',
    'UK 7',
    'UK 7.5',
    'UK 8',
    'UK 8.5',
    'UK 9',
    'UK 9.5',
    'UK 10',
    'UK 10.5',
    'UK 11',
    'UK 11.5',
    'UK 12',
    'UK 13',
    'UK 14',
  ];

  getSizes(): string[] {
    return this.sizes;
  }

}
