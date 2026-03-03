import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService, Language } from './language';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  langService = inject(LanguageService);

  constructor() {
    // Hide the initial loader when the app is initialized
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }

  images = [
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_0.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_5.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_1.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_2.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_4.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_3.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_6.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_3.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_7.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741021880479_8.png'
  ];

  t(en: string, vi: string) {
    return this.langService.translate(en, vi);
  }

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
}
