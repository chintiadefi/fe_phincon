import React from 'react';
import styles from './index.module.css';

const Modal = ({ title, setModal, children }) => {
  return (
    <div className={styles['modal-overlay']} onClick={() => setModal(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal-header']}>
          <h2 className={styles['modal-title']}>{title}</h2>
          <button className={styles['modal-close']} onClick={() => setModal(false)} aria-label="Close">&times;</button>
        </div>
        <div className={styles['modal-body']}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
