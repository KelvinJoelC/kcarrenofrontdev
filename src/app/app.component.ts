import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

export enum Language {
  English = 'en',
  Spanish = 'es',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'kcarrenofrontdev';
  
  defaultLeng: string = 'es';

  constructor(private translate: TranslateService) {
    // Set up translation languages and default
    this.translate.addLangs(Object.values(Language));
    this.translate.setDefaultLang(this.defaultLeng);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}


