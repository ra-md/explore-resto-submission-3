import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
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
}

export default RestaurantSource;
