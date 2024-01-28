import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {}

  langTag: string = 'giorgi';

  setLangTag(tag: string): string {
    this.langTag = tag;
    return this.langTag;
  }

  getLangTag(): string {
    return this.langTag;
  }

}
