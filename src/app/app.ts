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
    'https://drive.google.com/uc?export=view&id=1UCATiFnS_niRS_NiZWwY9mtfKcmKNl2x',
    'https://drive.google.com/uc?export=view&id=1V9EDOPMlqLrVkUVLJQovd7OqUiqaRnTY',
    'https://drive.google.com/uc?export=view&id=1Y-edHAeNOLGFE3RwklIB8Fa-sax03EUt',
    'https://drive.google.com/uc?export=view&id=1pP0dN-WU-WSp0S4nxPdC35MTAIkFEPuw',
    'https://drive.google.com/uc?export=view&id=1Kk8J_czUsCI4KkYtjUFsOKdxcAqVddAQ',
    'https://drive.google.com/uc?export=view&id=1QwkuOD6ZhBFat8QVpk_-QVvm6NPibwZC',
    'https://drive.google.com/uc?export=view&id=13OiawCigdUzwXPGnTqNmBat-ypmzjJ0Y',
    'https://drive.google.com/uc?export=view&id=1QwkuOD6ZhBFat8QVpk_-QVvm6NPibwZC',
    'https://drive.google.com/uc?export=view&id=13OiawCigdUzwXPGnTqNmBat-ypmzjJ0Y',
    'https://drive.google.com/uc?export=view&id=118dL5PVkIb04lOEk3v-yQZfJXxoDT3EV'
  ];

  t(en: string, vi: string) {
    return this.langService.translate(en, vi);
  }

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
}
