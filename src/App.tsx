import './App.css';
import { Form } from './components/Form/Form.tsx';
import { useEffect, useState } from 'react';
import { Image, UnspashData } from './App.types.ts';
import { fetchImages } from './service/unSplashAPI.ts';
import { ImageGallery } from './components/ImageGalary/ImageGallery.tsx';
import { LoadMore } from './components/LoadMore/LoadMore.tsx';
import { Error } from './components/Error/Error.tsx';
import { Modal } from './components/Modal/Modal.tsx';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState('');
  const [modalImg, setModalImg] = useState('');
  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        const data = await fetchImages<UnspashData>(query, page);
        setImages(prevState => [...prevState, ...data.results]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Це помилка Axios, можна отримати додаткову інформацію
          console.error('Axios error:', error.response?.data);
          setError(
            error.response?.data?.message || 'An unknown Axios error occurred',
          );
        }
      }
    };
    getData();
  }, [query, page]);
  const onSubmit = (query: string) => {
    setQuery(query);
  };
  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };
  const clickModalImg = (url: string) => {
    setModalImg(url);
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      <ImageGallery onClick={clickModalImg} images={images} />
      <LoadMore onClick={handleClick} />
      {modalImg && <Modal onClick={clickModalImg} url={modalImg} />}
      {error && <Error text={error} />}
    </>
  );
}

export default App;
