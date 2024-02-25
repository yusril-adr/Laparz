/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteAllRestaurant();
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
