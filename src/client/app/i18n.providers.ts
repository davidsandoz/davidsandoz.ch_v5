import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

export class TranslationProviders {

  public getTranslationFile = (): Promise<any> => {
    let noProviders: Object[] = [];

    // Define a way to retrieve the local information
    let locale: string;

    // Retrieving locale based on the user browser
    let firstBrowserLanguage = TranslationProviders.getFirstBrowserLanguage();

    if (firstBrowserLanguage === 'fr-CH' || firstBrowserLanguage === 'en-US') {
      locale = firstBrowserLanguage;
    }
    else {
      locale = 'en-US';
    }

    // Retrieving locale from localStorage
    try {
      locale = localStorage.getItem('locale') || locale;
    } catch (e) {
      // Handle any errors (e.g. "SecurityError: The operation is insecure." if client blocks cookies.)
      locale = 'en-US';
    }

    // Set the directory to the translation files
    let file: string = `../assets/locale/messages.${locale}.xlf`;

    if (!locale || locale === 'en-US') return Promise.resolve(noProviders);

    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest;
      xhr.open('GET', file);
      xhr.onload = (data: any) => resolve(
        [
          { provide: TRANSLATIONS, useValue: data.target.response },
          { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
          { provide: LOCALE_ID, useValue: locale }
        ]
      );
      xhr.onerror = () => reject(noProviders);
      xhr.send();
    });
  };

  private static getFirstBrowserLanguage(): string {
    let nav = window.navigator;
    let browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
    let i;
    let language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = (<any>nav)[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  }
}

