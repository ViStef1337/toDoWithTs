import styles from './Modal.module.css';
import { ModalTypes } from './Modal.types.ts';
import * as React from 'react';
export const Modal = ({ url, onClick }: ModalTypes) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClick('');
    }
  };
  return (
    <div onClick={handleClick} className={styles.backDrop}>
      <img src={url} alt="" />
    </div>
  );
};
