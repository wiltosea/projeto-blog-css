import styles from './navbar.module.scss';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.brand}>Sagrado Verde</h1>
        <Icon
          icon="ic:baseline-menu"
          className={styles.iconMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={menuOpen ? styles.active : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <a href="mailto:wilsontorresdesigner@gmail.com">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
