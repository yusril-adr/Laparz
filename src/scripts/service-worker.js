import 'regenerator-runtime';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './utils/cache-helper';

skipWaiting();
clientsClaim();

CacheHelper.routeImage();
CacheHelper.routeBaseUrl();
CacheHelper.routeUrlPath('/detail');

precacheAndRoute(self.__WB_MANIFEST);
