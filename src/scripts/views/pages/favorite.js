import RestaurantIdb from '../../data/restaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content" id="content" tabindex="0">
          <div class="list-post">
            <h1 class="list-label">
              Your Favorite Restaurant
              <div class="underline"></div>
            </h1>
            <div class="list-wrapper" id="list-container">
              
            </div>
          </div>
        </section>;`;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurants();

    const restaurantContainer = document.querySelector('#list-container');

    restaurants.forEach((restaurant)=> {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
