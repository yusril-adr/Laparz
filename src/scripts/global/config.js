const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  DATABASE_NAME: 'Laparz',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'favorite',
  ERROR_MESSAGE: {
    DEFAULT: 'Ups kesalahan telah terjadi, Cek koneksi anda dan Coba lagi nanti atau anda bisa hubungi kami pada laman "About us".',
    RESTAURANT_DETAIL: 'Ups kesalahan telah terjadi, Cek koneksi anda atau mungkin restoran ini tidak ada.',
  },
  CACHE_NAME: {
    UTILS: 'Laparz-Utils',
    DETAIL: 'Laparz-Detail',
  },
  CACHE_EXP: 30 * 24 * 60 * 60, // 30 Days
};

export default CONFIG;
