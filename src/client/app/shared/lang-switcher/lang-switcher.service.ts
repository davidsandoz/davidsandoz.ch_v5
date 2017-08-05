export class LangSwitcherService {

  static setLocale(locale: string) {
    try {
      localStorage.setItem('locale', locale);
    } catch (e) {
      // Handle any errors (e.g. "SecurityError: The operation is insecure." if client blocks cookies.)
    }
    window.location.href = '/';
  }

  static getLocale() {
    let locale: string;
    try {
      return localStorage.getItem('locale') || 'en-US';
    } catch (e) {
      // Handle any errors (e.g. "SecurityError: The operation is insecure." if client blocks cookies.)
      return 'en-US';
    }
  }

  static getLang() {
    return this.getLocale().slice(0,2);
  }
}
