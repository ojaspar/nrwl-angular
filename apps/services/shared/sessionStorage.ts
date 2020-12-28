/* eslint-disable @typescript-eslint/no-explicit-any */

export default class SessionStorageService {
  public setItem(key: string, value: any): void {
    window.sessionStorage.setItem(key, value);
  }
  public getItem(key: string): any {
    const item = window.sessionStorage.getItem(key);
    return item;
  }
  public removeItem(key: string) {
    window.sessionStorage.removeItem(key);
  }
  public clear() {
    window.sessionStorage.clear();
  }
}
