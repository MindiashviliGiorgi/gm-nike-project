import { Injectable } from '@angular/core';
import { Subject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

 
  constructor() {}

  private langTagSubject = new Subject<string>();

  setLangTag(tag: string): void {
    this.langTagSubject.next(tag);
    localStorage.setItem('langTag', tag)
  }

  getLangTag(): string {
    return localStorage.getItem('langTag') || 'en';
  }

  langTagChanged$ = this.langTagSubject.asObservable();

}
