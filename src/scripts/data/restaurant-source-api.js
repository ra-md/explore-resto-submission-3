import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSourceApi {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      return error;
    }
  }

  static async reviewRestaurant(review) {
    try {
      const response = await fetch('https://dicoding-restaurant-api.el.r.appspot.com/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(review),
      });

      const jsonResponse = response.json();
      return jsonResponse;
    } catch (error) {
      return error;
    }
  }
}

export default RestaurantSourceApi;
