import CONFIG from './config';

const ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  RESTAURANT_IMAGE: (id, size) => `${CONFIG.BASE_URL}/images/${size}/${id}`,
};

export default ENDPOINT;
