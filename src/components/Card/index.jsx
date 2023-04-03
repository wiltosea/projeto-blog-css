import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import { Image } from 'react-datocms';

export default function Card({ title, image, id, abstract }) {
  return (
    <div className={styles.blogpostCard}>
      <Link to={`/post/${id}`}>
        {image && <Image data={image} className={styles.blocpostCardImage} />}
        <h3 className={styles.blogpostCardTitle}>{title}</h3>
        <p className={styles.abstract}>{abstract}</p>
      </Link>
    </div>
  );
}
