import FavoriteRestIdb from '../../data/favorite-rest-idb';
import createRestaurantItemRestaurant from '../templates/item-restaurant';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restauran Favorit Kamu</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemRestaurant(restaurant);
    });
  },
};

export default Favorite;
