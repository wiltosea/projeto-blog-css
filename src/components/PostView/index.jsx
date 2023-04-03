import styles from './postView.module.scss';
import { Image } from 'react-datocms';
import { Icon } from '@iconify/react';

const convertDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export function PostView({
  id,
  title,
  imagemDestaque,
  content,
  author,
  _publishedAt,
}) {
  return (
    <container className={styles.postContainer}>
      <article className={styles.postArticle}>
        <h1 key={id} className={styles.postArticleTitle}>
          {title}
        </h1>
        {imagemDestaque && (
          <Image
            data={imagemDestaque.responsiveImage}
            className={styles.postArticleFeaturedImage}
          />
        )}
        {content.value.document.children.map((node) => {
          return (
            <>
              {node.type === 'paragraph' ? (
                node.children[0].value === '' ? (
                  ''
                ) : (
                  <p>{node.children[0].value}</p>
                )
              ) : (
                ''
              )}
              {node.type === 'heading' ? (
                node.level === 1 ? (
                  <h1>{node.children[0].value}</h1>
                ) : node.level === 2 ? (
                  <h2>{node.children[0].value}</h2>
                ) : node.level === 3 ? (
                  <h3>{node.children[0].value}</h3>
                ) : node.level === 4 ? (
                  <h4>{node.children[0].value}</h4>
                ) : node.level === 5 ? (
                  <h5>{node.children[0].value}</h5>
                ) : node.level === 6 ? (
                  <h6>{node.children[0].value}</h6>
                ) : (
                  <span>{node.children[0].value}</span>
                )
              ) : (
                ''
              )}
            </>
          );
        })}
        <hr className={styles.postArticleBorder} />
        <div className={styles.postArticlePostedAt}>
          Publicado em <span>{convertDate(_publishedAt)}</span>
        </div>
        <div className={styles.postArticleAuthor}>
          {author.avatar ? (
            <Image
              data={author.avatar.responsiveImage}
              className={styles.postArticleAuthorAvatar}
            />
          ) : (
            <Icon
              icon="ic:baseline-person"
              className={styles.postArticleAuthorNoAvatar}
            />
          )}
          <div className={styles.postArticleAuthorInfo}>
            <span className={styles.postArticleAuthorInfoName}>
              {author.completeName}
            </span>
            <span className={styles.postArticleAuthorInfoRole}>
              {author.role}
            </span>
          </div>
        </div>
      </article>
    </container>
  );
}
