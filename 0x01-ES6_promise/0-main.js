// eslint-disable-next-line import/extensions
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
(async () => {
  console.log(await response);
})();
