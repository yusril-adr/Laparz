class RestaurantItem extends HTMLElement {
  set data(restaurant) {
    this.restaurant = restaurant;

    this.render();
  }

  render() {
    // Slicing 100 char if description length > 100
    let description;
    if (this.restaurant.description.length > 100) description = `${this.restaurant.description.slice(0, 100)} ...`;
    else description = this.restaurant.description;

    this.innerHTML = `
        <figure>
            <img src="${this.restaurant.pictureId}" alt="${this.restaurant.name}">
        </figure>

        <span class="city">${this.restaurant.city}</span>
        <div class="detail">
            <span class="rating">${this.restaurant.rating}</span>
            <span class="name">${this.restaurant.name}</span>
        </div>

        <article class="description">${description}</article>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
