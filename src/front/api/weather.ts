import apiInstance from '@/api/index';


// eslint-disable-next-line import/prefer-default-export
export function getAllWeather() {
  return apiInstance({
    method: 'GET',
    url: 'weather',
  });
}
