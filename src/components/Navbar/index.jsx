import styles from './navbar.module.scss';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.headerNavbar}>
        <Link to="/">
          <h1 className={styles.headerNavbarBrand}>Sagrado Verde</h1>
        </Link>
        <div className={styles.headerNavbarMenu}>
          <Icon
            icon="ic:baseline-menu"
            className={styles.headerNavbarMenuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div
            className={
              menuOpen
                ? styles.headerNavbarMenuOpenActive
                : styles.headerNavbarMenuOpenInactive
            }
          >
            <Icon
              icon="ic:baseline-close"
              onClick={() => setMenuOpen(false)}
              className={styles.headerNavbarMenuClose}
            />
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <span>Home</span>
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
