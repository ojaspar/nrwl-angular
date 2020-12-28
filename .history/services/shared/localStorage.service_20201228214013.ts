/* eslint-disable @typescript-eslint/no-explicit-any */

export class LocalStorageService {
  public setItem(key: string, value: any): void {
    window.localStorage.setItem(key, value);
  }
  public getItem(key: string): any {
    const item = window.localStorage.getItem(key);
    return item;
  }
  public removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
  public clear() {
    window.localStorage.clear();
  }
}
