import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';
const Home = {
  async render() {
    return `
      
      <section class="content" id="content" tabindex="0">
        <div class="list-post">
          <h1 class="list-label">List Restaurant 
          <div class="underline"></div></h1> 
          <div class="list-wrapper" id="list-container">
          </div>
        </div>
      </section>
     
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#list-container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
    console.log(restaurants);
  },
};

export default Home;
