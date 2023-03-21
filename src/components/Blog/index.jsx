import { useQuery } from 'graphql-hooks';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    title
    conteudo
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
      {postArray.map((item) => {
        return (
          <div className="blogpost">
            <h2 key={item.id}>{item.title}</h2>
            <p>
              Por: <strong>{item.author}</strong> - em:{' '}
              <span>{handleDate(item._publishedAt)}</span>
            </p>
            {item.content.value.document.children.map((node) => {
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
          </div>
        );
      })}
    </main>
  );
}

export default Blog;
