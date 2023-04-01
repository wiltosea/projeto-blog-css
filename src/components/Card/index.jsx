import { Link, useParams } from 'react-router-dom';
import styles from './card.module.scss';
import { Image } from 'react-datocms';

export default function Card({ title, image, author, date, id }) {
  return (
    <div className={styles.blogpost_card}>
      <h3 className={styles.blogpost_title}>{title}</h3>
      {image && <Image data={image} className={styles.imagem_destaque} />}
      <div className={styles.author}>
        <div className={styles.author_line}>
          <span className={styles.author_name}>{author}</span>{' '}
          <i>
            <span>{date}</span>
          </i>
        </div>
      </div>

      <Link to={`/post/${id}`} className={styles.link}>
        Leia mais
      </Link>
    </div>
  );
}
