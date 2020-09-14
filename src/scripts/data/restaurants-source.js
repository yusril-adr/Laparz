import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL + id);
    const responseJson = await response.json();
    if (responseJson.error) throw new Error(responseJson.message);
    return responseJson.restaurant;
  }

  static async reviews(id) {
    const response = await fetch(API_ENDPOINT.DETAIL + id);
    const responseJson = await response.json();
    const reviews = responseJson.restaurant.consumerReviews;
    return reviews.reverse();// Sorted by the newest
  }

  static async postReview({ id, name, review }) {
    const reviewObject = {
      id,
      name,
      review,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(reviewObject),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
