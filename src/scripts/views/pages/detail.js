import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content" id="content" tabindex="0">
        <div class="list-post" id="list-post">
          <h1 class="list-label">Detail Restaurant
          <div class="underline"></div></h1> 
          <div id="likeButtonContainer"></div>
          <div class="restaurant" id="restaurant"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),

      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
