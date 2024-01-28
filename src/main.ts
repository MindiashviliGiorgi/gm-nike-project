import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LanguageService } from './app/shared/language.service';

const languageService = new LanguageService();
let newLang = languageService.getLangTag()

let langName : any = languageService.getLangTag();

document.documentElement.lang = langName;


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
