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
    'https://lh3.googleusercontent.com/d/1Y-edHAeNOLGFE3RwklIB8Fa-sax03EUt',
    'https://lh3.googleusercontent.com/d/1V9EDOPMlqLrVkUVLJQovd7OqUiqaRnTY',
    'https://lh3.googleusercontent.com/d/1UCATiFnS_niRS_NiZWwY9mtfKcmKNl2x',
    'https://lh3.googleusercontent.com/d/1V9EDOPMlqLrVkUVLJQovd7OqUiqaRnTY',
    'https://lh3.googleusercontent.com/d/1Kk8J_czUsCI4KkYtjUFsOKdxcAqVddAQ',
    'https://lh3.googleusercontent.com/d/1QwkuOD6ZhBFat8QVpk_-QVvm6NPibwZC',
    'https://lh3.googleusercontent.com/d/13OiawCigdUzwXPGnTqNmBat-ypmzjJ0Y',
    'https://lh3.googleusercontent.com/d/1V9EDOPMlqLrVkUVLJQovd7OqUiqaRnTY',
    'https://lh3.googleusercontent.com/d/13OiawCigdUzwXPGnTqNmBat-ypmzjJ0Y',
    'https://lh3.googleusercontent.com/d/1UCATiFnS_niRS_NiZWwY9mtfKcmKNl2x'
  ];

  t(en: string, vi: string) {
    return this.langService.translate(en, vi);
  }

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
}
