import { useQuery } from 'graphql-hooks';
import React from 'react';
import styles from './postCollection.module.scss';
import Card from '../Card';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
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
    author{
      completeName
    }
    _status
    _firstPublishedAt
    _publishedAt
  }
}`;

function PostCollection() {
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
    <main className={styles.post_list}>
      {postArray.map((blogPost) => (
        <Card
          title={blogPost.title}
          image={blogPost.imagemDestaque.responsiveImage}
          author={blogPost.author.completeName}
          date={handleDate(blogPost._publishedAt)}
          id={blogPost.id}
        />
      ))}
    </main>
  );
}

export default PostCollection;
