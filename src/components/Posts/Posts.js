import { useSelector } from 'react-redux';

import Title from '../Title';
import Post from './Post';

const Posts = () => {
  const posts = useSelector(state => state.posts.posts);

  console.log('posts', posts);

  return (
    <section>
      <Title title="Posty" />
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
