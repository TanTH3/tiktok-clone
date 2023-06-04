import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (API, options = []) => {
  const response = await httpRequest.get(API, options);
  return response.data;
};

export default httpRequest;
