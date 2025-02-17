import createRestaurantHomePage from './restaurant'
import createTabs from './tabs';

function intialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default intialLoad;