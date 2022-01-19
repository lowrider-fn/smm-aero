import { safeJsonParce } from '../safeJsonParce';

import type { StorageKey } from './interfaces';

class StorageClass {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setData(key: StorageKey, data: any) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  getData<T>(key: StorageKey) {
    const value = this.storage.getItem(key);

    return safeJsonParce<T>(value);
  }

  deleteData(key: StorageKey) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const Storage = new StorageClass();
