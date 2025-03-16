import { Image } from '../../App.types.ts';

export interface ImageGalleryTypes {
  images: Image[];
  onClick: (url: string) => void;
}
