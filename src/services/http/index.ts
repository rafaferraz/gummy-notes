import AxiosHttpClient from './axios.client';

const axiosClient = new AxiosHttpClient(
  process.env.NODE_ENV == 'production'
    ? `https://${process.env.NEXT_PUBLIC_PROD_API_HOST}${process.env.NEXT_PUBLIC_API_BASE_PATH}`
    : `https://${process.env.NEXT_PUBLIC_DEV_API_HOST}${process.env.NEXT_PUBLIC_API_BASE_PATH}`
);

export default axiosClient;
