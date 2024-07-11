import React from 'react';
import styles from './index.module.css';

const Alert = ({ alert, setAlert }) => {
  return (
    <div className={styles['alert-container']}>
      <div className={alert ? styles['alert-error-show'] : styles['alert-error']}>
          <span className={styles['alert-message']}>The Pokemon ran away!</span>
          <button className={styles['alert-close']} onClick={() => setAlert(false)} aria-label="Close">
              &times;
          </button>
      </div>
    </div>
  );
}

export default Alert;
