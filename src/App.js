import './App.css';
import { useQuery } from 'graphql-hooks';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    title
    content{
      blocks
      value
    }
    author
    _status
    _firstPublishedAt
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });
  if (loading) return 'Loading...';
  if (error) return `Something Bad Happened -> ${error.fetchError}`;
  // const content = Object.keys(data.allPosts).map((key) => {
  //   return `${data.allPosts[key].title}`;
  // });
  const postJson = JSON.stringify(data.allPosts);
  const postArray = JSON.parse(postJson);
  return (
    <main>
      {postArray.map((item) => {
        return (
          <div className="blogpost">
            <h2 key={item.id}>{item.title}</h2>
            <p>
              {item.content.map((content) => {
                return <p>{content.value}</p>;
              })}
            </p>
          </div>
        );
      })}
    </main>
  );
}

export default App;
