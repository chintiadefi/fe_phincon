import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.nav}>
      <div className={currentPath === '/' ? styles['nav-active'] : styles['nav-btn']}>
        <Link to="/">Pokemon List</Link>
      </div>
      <div className={currentPath === '/my-pokemon' ? styles['nav-active'] : styles['nav-btn']}>
        <Link to="/my-pokemon">My Pokemon List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
