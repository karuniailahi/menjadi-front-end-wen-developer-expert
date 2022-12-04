import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-resource';
import createRestaurantDetailMenu from '../templates/detail-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await RestaurantResource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createRestaurantDetailMenu(rest.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: rest.restaurant.id,
        name: rest.restaurant.name,
        rating: rest.restaurant.rating,
        pictureId: rest.restaurant.pictureId,
        city: rest.restaurant.city,
        description: rest.restaurant.description,
      },
    });
  },
};

export default Detail;
