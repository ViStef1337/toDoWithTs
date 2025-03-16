export interface Image {
  id: string;
  alt_description: string;
  height: number;
  width: number;
  likes: number;
  user: {
    name: string;
    location: string;
    links: {
      html: string;
    };
  };
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}
export interface UnspashData {
  total: number;
  total_pages: number;
  results: Image[];
}
