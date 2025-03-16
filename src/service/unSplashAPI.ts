import axios from 'axios';

const accessKey = 'MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${accessKey}`;
axios.defaults.headers.common['Accept-Version'] = `v1`;

export const fetchImages = async <T>(
  query: string,
  page: number,
): Promise<T> => {
  const { data } = await axios.get<T>('/search/photos', {
    params: { query, page, per_page: 21 },
  });
  return data;
};
