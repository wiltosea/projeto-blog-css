import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.brand}>Sagrado Verde</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="mailto:wilsontorresdesigner@gmail.com">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
