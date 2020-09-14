import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import CONFIG from '../global/config';

const CacheHelper = {
  async routeBaseUrl() {
    registerRoute(
      ({ url }) => url.origin === CONFIG.BASE_URL && !url.pathname.startsWith('/detail'),
      new StaleWhileRevalidate({
        cacheName: CONFIG.CACHE_NAME.UTILS,
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new ExpirationPlugin({
            maxAgeSeconds: CONFIG.CACHE_EXP,
          }),
        ],
      }),
    );
  },

  async routeUrlPath(urlPath) {
    registerRoute(
      ({ url }) => url.origin === CONFIG.BASE_URL && url.pathname.startsWith(urlPath),
      new NetworkFirst({
        networkTimeoutSeconds: 2,
        cacheName: CONFIG.CACHE_NAME.DETAIL,
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new ExpirationPlugin({
            maxAgeSeconds: CONFIG.CACHE_EXP,
          }),
        ],
      }),
    );
  },
};

export default CacheHelper;
