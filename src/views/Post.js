import { useQuery } from 'graphql-hooks';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PostView } from '../components/PostView';

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
          responsiveImage(imgixParams: { fit: crop, w: 100, h: 100, auto: format }) {
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

  return (
    <PostView
      id={postArray.id}
      title={postArray.title}
      imagemDestaque={postArray.imagemDestaque}
      content={postArray.content}
      author={postArray.author}
      _publishedAt={postArray._publishedAt}
    />
  );
}
