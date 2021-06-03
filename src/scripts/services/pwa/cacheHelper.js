import CONFIG from '../../config';

const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this._openCache();
    cache.addAll(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },

  async deletePreviousCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async staleWhileRevalidate(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200 || request.method !== 'GET') {
      return response;
    }

    await this._addCache(request);
    return response;
  },

};

export default CacheHelper;
