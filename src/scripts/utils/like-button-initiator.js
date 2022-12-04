import FavoriteRestIdb from '../data/favorite-rest-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like-button';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteRestIdb.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestIdb.putRestaurant(this._movie);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestIdb.deleteRestaurant(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
