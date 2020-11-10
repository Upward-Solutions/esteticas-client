import { IS_INDEX } from './utils/constants.js';
import createEvents from './utils/events.js';
import setInitialLocalStorage from './utils/storage.js';
import applyCustomStyles from './utils/styles.js';

if (IS_INDEX) {
  setInitialLocalStorage();
}
applyCustomStyles();
createEvents();
