import { ImageGalleryTypes } from './ImageGallery.types.ts';

export const ImageGallery = ({ images, onClick }: ImageGalleryTypes) => {
  console.log(images);
  return (
    <ul>
      {images.map(item => (
        <li key={item.id}>
          <img
            onClick={() => onClick(item.urls.full)}
            src={item.urls.small}
            alt={item.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};
