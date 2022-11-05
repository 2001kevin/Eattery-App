import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4><i class="fa fa-star"></i>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <h4>Foods Menu</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
  <h4>Drinks Menu</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
     ${restaurant.customerReviews.reduce(
      (show, value) =>
        show.concat(`<br>
      <div class="post-item">
        <div class="post-content">
          <p>${value.name}</p>
          <p>${value.review}</p>
          <p>${value.date}</p>
        </div>
      </div>
        `),
      '<h4>Customer Reviews:</h4>',
  )}
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
              <img class="post-thumbnail lazyload" 
                data-src="${
                  restaurant.pictureId ?
                  CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId:
                  'https://picsum.photos/id/666/800/450?grayscale'}" 
                alt="Restaurant Pic">             
              <div class="post-content">
                <h1 class="resto-title">${restaurant.name}</h1>
                <p>${restaurant.city}</p>
                <p><i class="fa fa-star"></i>${restaurant.rating}</p>
                <a id="detailButton" href="/#/detail/${restaurant.id}">
                  <button class="button">Details</button>
                </a>
              </div>
            </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

