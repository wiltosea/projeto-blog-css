import { useQuery } from 'graphql-hooks';
import { Image } from 'react-datocms';
import React from 'react';
import styles from './blog.module.scss';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    title
    imagemDestaque {
      responsiveImage(imgixParams: { fit: crop, w: 1120, h: 300, auto: format }) {
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
    author
    _status
    _firstPublishedAt
    _publishedAt
  }
}`;

function Blog() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return 'Loading...';
  if (error) return `Something Bad Happened -> ${error.fetchError}`;

  const postJson = JSON.stringify(data.allPosts);
  const postArray = JSON.parse(postJson);
  const handleDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main>
      {postArray.map((blogPost) => (
        <article className={styles.blogpost}>
          <h2 key={blogPost.id}>{blogPost.title}</h2>
          {blogPost.imagemDestaque && (
            <Image
              data={blogPost.imagemDestaque.responsiveImage}
              className={styles.imagemDestaque}
            />
          )}
          <p>
            Por: <strong>{blogPost.author}</strong>
          </p>
          {blogPost.content.value.document.children.map((node) => {
            return (
              <>
                {node.type === 'paragraph' ? (
                  node.children[0].value === '' ? (
                    ''
                  ) : (
                    <p>{node.children[0].value}</p>
                  )
                ) : (
                  <div></div>
                )}
              </>
            );
          })}
          <i>
            Publicado em <span>{handleDate(blogPost._publishedAt)}</span>
          </i>
        </article>
      ))}
    </main>
  );
}

export default Blog;
