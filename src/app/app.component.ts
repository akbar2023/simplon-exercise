import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@core/store';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  language: string ='en';

  constructor(private readonly store: Store<State>, private readonly translate: TranslateService) {
  }

  ngOnInit(): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  changeLanguage(lang: string): void {
    this.language = lang;
    this.translate.use(lang);
  }
}
