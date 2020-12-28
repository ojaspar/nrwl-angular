/* eslint-disable @typescript-eslint/no-explicit-any */

export class LocalStorageService {
  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, value);
  }
  getItem(key: string): any {
    const item = window.localStorage.getItem(key);
    return item;
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
  clear() {
    window.localStorage.clear();
  }
}
