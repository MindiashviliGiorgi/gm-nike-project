import { Injectable } from '@angular/core';
import { Subject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {}

  private langTagSubject = new Subject<string>();
  langTag: string = 'en';

  setLangTag(tag: string): void {
    this.langTag = tag;
    this.langTagSubject.next(tag);
  }

  getLangTag(): string {
    return this.langTag;
  }

  langTagChanged$ = this.langTagSubject.asObservable();

}
