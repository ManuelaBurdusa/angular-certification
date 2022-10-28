import { Injectable } from '@angular/core';
import { STORAGE_TRACKING_KEY } from '../utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setStorageItem(key, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getStorageItem(key): string[] {
    const item = localStorage.getItem(key);
    return !!item ? JSON.parse(item): item;
  }

  public removeItemFromStorage(item): void {
    localStorage.removeItem(item);
  }
}
