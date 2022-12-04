import RestaurantResource from '../../data/restaurant-resource';
import createRestaurantItemRestaurant from '../templates/item-restaurant';

const Home = {
  async render() {
    return `
    <div class="hero-image">
        <div class="hero-text">
            <h1 class="hero-title">Kami Menyajikan Makanan & Minuman</h1>
            <p class="hero-tagline">
                Hanya Di <b>LetungResto</b>
            </p>
        </div>
    </div>
    <div class="content">
        <h2 class="content__heading">LIST RESTAURANT</h2>
        <div id="restaurants" class="restaurants">

        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.restauranList();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemRestaurant(restaurant);
    });
  },
};

export default Home;
