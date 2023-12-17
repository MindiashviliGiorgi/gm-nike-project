import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensData } from '../interfaces/mens-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private json = "/assets/mensData.json";

  constructor(private http : HttpClient) { }

  getMensData(): Observable<MensData> {
    return this.http.get<MensData>(this.json);
  }

}
