import CONFIG from '../../globals/config';

const createRestaurantDetailMenu = (restaurant) => `
  <div class="detail"> 
    <div class="detail__top">
      <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant__info">
          <h3>${restaurant.name}</h3><br>
          <h4>Kota</h4>
          <span>${restaurant.city}</span>
          <h4>Alamat</h4>
          <span>${restaurant.address}</span>
          <h4>Rating</h4>
          <span>⭐️ ${restaurant.rating}</span>
          
          <h4>Category</h4>
          <div>${restaurant.categories.map((categorie) => `
            <span>${categorie.name}</span>
          `)}</div>
      </div>
    </div>

    <div class="description">
      <h3>Detail</h3>
      <p>${restaurant.description}</p>
    </div>
    
    <div class="detail__menu">
      <h3>LIST MENU</h3>
      <div class="content">
        <h4>FOOD</h4>
        <div class="menu">
          ${restaurant.menus.foods.map((food, i) => `
            <div class="menu-item">
              <p class="item">${i + 1}) ${food.name}</p>
            </div>
          `).join('')}
        </div>
        <h4>DRINKS</h4>
        <div class="menu">
          ${restaurant.menus.drinks.map((drink, i) => `
            <div class="menu-item">
              <p class="item">${i + 1}) ${drink.name}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="restaurant__reviews">
      <h3>Review Pelanggan</h3>
      <div>${restaurant.customerReviews.map((customerReview) => `
        <div class="review">
          <p><span class="name">${customerReview.name}</span> . <span class="date">${customerReview.date}</span></p>
          <p class="review-text">${customerReview.review}</p>
        </div>
      `).join('')}</div>
    </div>
  </div>
`;

export default createRestaurantDetailMenu;
