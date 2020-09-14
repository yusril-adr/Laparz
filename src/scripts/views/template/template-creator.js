import API_ENDPOINT from '../../global/api-endpoint';

const createLoadingTemplate = () => `
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
`;

const createRestaurantListEmptyTemplate = () => `
    <div class="empty-list-container">
      <span class="empty-list-message">
        List ini kosong.
      </span>
    </div>
`;

const createRestaurantListErrorTemplate = (message) => `
    <div class="error-container">
      <span class="error-message">
        ${message}
      </span>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <figure>
        <img src="${API_ENDPOINT.IMAGES.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
    </figure>

    <span class="city">${restaurant.city}</span>
    <div class="detail">
        <span class="rating" aria-label="Rating: ${restaurant.rating}">${restaurant.rating}</span>
        <a href="#/detail/${restaurant.id}"><span class="name">${restaurant.name}</span></a>
    </div>

    <article class="description">${restaurant.description}</article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <section class="detail">
        <div class="detail-container">
            <figure>
                <img src="${API_ENDPOINT.IMAGES.MEDIUM + restaurant.pictureId}" alt="${restaurant.name}">
                <figcaption class="name">${restaurant.name}</figcaption>
                <figcaption class="address">${restaurant.address}</figcaption>
                <figcaption class="city">${restaurant.city}</figcaption>
                <figcaption class="rating" aria-label="Rating: ${restaurant.rating}">${restaurant.rating}</figcaption>
            </figure>

            <span class="description">${restaurant.description}</span>
        </div>


        <div class="category">
            <span>Kategori :</span>
            <category-list></category-list>
        </div>
        </section>

        <section class="menu">
        <div class="menu-container">
            <menu-list id="food-menu"></menu-list>

            <menu-list id="drink-menu"></menu-list>
        </div>
        </section>

        <section class="review">
        <div class="review-container">
            <review-list></review-list>
        </div>
    </section>
`;

const createRestaurantDetailErrorTemplate = (message) => `
    <div class="error-container">
        <span class="error-message">${message}</span>
        <a href="#" aria-label="Home"><i class="fas fa-home"></i> Home</a>
    </div>
`;

const createMenuListTemplate = (title) => `
    <span class="title">${title}</span>
    <div class="container"></div>
`;

const createMenuItemTemplate = (item) => `
    ${item}<hr>
`;

const createReviewListTemplate = () => `
    <span class="title">Review</span>
    <div class="item-container"></div>

    <div class="review-post">
        <div class="text-container">
            <input type="text" placeholder="Nama" autocomplete="off" id="name">
            <textarea placeholder="Tulis review ..." id="review" aria-label="Tulis review"></textarea>
        </div>
        <button class="send-btn" aria-label="Kirim review"><i class="fas fa-paper-plane"> Kirim</i></button>
    </div>
`;

const createReviewItemTemplate = (item) => `
    <span class="review-name">${item.name}</span>
    <span class="review-text">${item.review}</span>
    <span class="review-date">${item.date}</span>
    <hr>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Tambahkan restoran ke favorit" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus restoran dari favorit" id="likedButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLoadingTemplate,
  createRestaurantListEmptyTemplate,
  createRestaurantListErrorTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailErrorTemplate,
  createMenuListTemplate,
  createMenuItemTemplate,
  createReviewListTemplate,
  createReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
