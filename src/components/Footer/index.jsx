import styles from './footer.module.scss';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerSocialMedia}>
            <Link to="/" className={styles.footerContainerSocialMediaIcon}>
              <Icon icon="mdi:facebook" />
              <span>Facebook</span>
            </Link>
            <Link to="/" className={styles.footerContainerSocialMediaIcon}>
              <Icon icon="mdi:instagram" />
              <span>Instagram</span>
            </Link>
            <Link to="/" className={styles.footerContainerSocialMediaIcon}>
              <Icon icon="mdi:twitter" />
              <span>Twitter</span>
            </Link>
          </div>
          <div className={styles.footerContainerCopyRight}>
            <p>
              Copyright 2023 Sagrado Verde. Todos os direitos Reservados. Feito
              com amor em Belo Horizonte
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
