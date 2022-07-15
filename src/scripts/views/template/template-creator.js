import API_ENDPOINT from '../../global/api-endpoint';

const createHomePageTemplate = () => `
    <div class="hero">
        <picture>
            <source media="(max-width: 640px)" srcset="./images/hero-image-small.webp">
            <source media="(max-width: 1000px)" srcset="./images/hero-image-medium.webp">
            <source srcset="./images/hero-image.webp">
            <img
                src="./images/hero-image.jpg"
                srcset="
                    ./images/hero-image-small.jpg 675w,
                    ./images/hero-image-medium.jpg 1097w,
                    ./images/hero-image.jpg 1350w
                "
                sizes="(max-width: 640px) 675px,(max-width: 1000px) 1097px"
                alt="Hero Image"
            />
        </picture>
       
        <div class="hero-content">
            <h1>Enjoy delicious food,</h1>
            <span>around you.</span>
        </div> 
    </div>

    <section class="home-section fun-fact">
        <h2 aria-label="Fakta Unik">#Fakta-Unik</h2>
        <fact-text></fact-text>

        <div class="section-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>

    <section class="home-section" id="main-content">
        <div class="restaurant">
            <h2>Eksplor Restoran</h2>

            <restaurant-list></restaurant-list>
        </div>
    </section>

    <loading-element></loading-element>

`;

const createDetailPageTemplate = () => `
    <restaurant-detail id="main-content"></restaurant-detail>
    <div id="likeButtonContainer"></div>
    <loading-element></loading-element>
`;

const createFavoritePageTemplate = () => `
    <section class="favorite" id="main-content">
    <div class="favorite-restaurant">
        <h1>Restoran Favorit</h1>

        <restaurant-list></restaurant-list>
    </div>
    </section>

    <loading-element></loading-element>
`;

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
        <img 
            class="lazyload" 
            data-src="${API_ENDPOINT.IMAGES.SMALL + restaurant.pictureId}" 
            alt="${restaurant.name}"
            />
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
                <img 
                    class="lazyload" 
                    src="${API_ENDPOINT.IMAGES.MEDIUM + restaurant.pictureId}"
                    srcset="
                        ${API_ENDPOINT.IMAGES.SMALL + restaurant.pictureId} 405w,
                        ${API_ENDPOINT.IMAGES.MEDIUM + restaurant.pictureId} 810w,
                    "
                    sizes="(max-width: 405px) 405px, 810px" 
                    alt="${restaurant.name}"
                />
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Tambahkan restoran ke favorit" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikedRestaurantButtonTemplate = () => `
  <button aria-label="Hapus restoran dari favorit" id="likedButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHomePageTemplate,
  createDetailPageTemplate,
  createFavoritePageTemplate,
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
  createLikeRestaurantButtonTemplate,
  createUnlikedRestaurantButtonTemplate,
};
