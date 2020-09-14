import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database, oldVersion) {
    switch (oldVersion) {
      case 0:
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    const db = await dbPromise;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.get(id);
  },
  async getAllRestaurant() {
    const db = await dbPromise;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.getAll();
  },
  async putRestaurant(restaurant) {
    const db = await dbPromise;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.put(restaurant);
  },
  async deleteRestaurant(id) {
    const db = await dbPromise;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.delete(id);
  },
};

export default FavoriteRestaurantIdb;
