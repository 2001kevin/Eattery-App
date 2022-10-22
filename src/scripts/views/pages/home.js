import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';
const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Find Your Best <br> Food Here</h1>
          <p class="hero-desc">
            we want to help you to find the food you <br> never meet before
          </p>
        </div>
      </div>
      <section class="content" id="content" tabindex="0">
        <div class="list-post">
          <h1 class="list-label">List Restaurant 
          <div class="underline"></div></h1> 
          <div class="list-wrapper" id="list-container">
          </div>
        </div>
      </section>
      <footer >
        <p>Copyright &copy; 2022 - Eattery. All Rights Reserved</p>
      </footer>
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
