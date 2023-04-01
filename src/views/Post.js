import { useQuery } from 'graphql-hooks';
import { Image } from 'react-datocms';

import React from 'react';
import { useParams } from 'react-router-dom';

import styles from '../components/PostCollection/postCollection.module.scss';

export function Post() {
  const { postId } = useParams();

  const { loading, error, data } = useQuery(
    `query PostPage {
    post(filter: {id: {eq: "${postId}"}}) {
      id
      title
      imagemDestaque {
        responsiveImage(imgixParams: { fit: crop, w: 1120, h: 600, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      content{
        blocks
        value
      }
      author{
        id
        completeName
        aboutMe
        role
        avatar {
          responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
      _status
      _firstPublishedAt
      _publishedAt
    }
  }`,
    {
      variables: {
        limit: 1,
      },
    },
  );

  if (loading) return 'Loading...';
  if (error) return `Something Bad Happened -> ${error.fetchError}`;

  const postJson = JSON.stringify(data.post);
  const postArray = JSON.parse(postJson);
  const handleDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  console.log(postArray);
  console.log(postId);

  return (
    <main>
      <article className={styles.postArray}>
        <h2 key={postArray.id}>{postArray.title}</h2>
        {postArray.imagemDestaque && (
          <Image
            data={postArray.imagemDestaque.responsiveImage}
            className={styles.imagemDestaque}
          />
        )}
        <div className={styles.author}>
          {postArray.author.avatar && (
            <Image
              data={postArray.author.avatar.responsiveImage}
              className={styles.author_avatar}
            />
          )}
          <div className={styles.author_line}>
            <span className={styles.author_name}>
              {postArray.author.completeName}
            </span>
            <span className={styles.author_role}>{postArray.author.role}</span>
          </div>
        </div>
        {postArray.content.value.document.children.map((node) => {
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
        <i>
          Publicado em <span>{handleDate(postArray._publishedAt)}</span>
        </i>
      </article>
    </main>
  );
}
