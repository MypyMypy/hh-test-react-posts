import { Post } from '@/entities/post';
import { useGetPostByIdQuery } from '@/shared/api';
import { useParams } from 'react-router-dom';

export const PostPage: React.FC = () => {
  const params = useParams();
  const postId = Number(params.id);
  const { data, isLoading, isError } = useGetPostByIdQuery(postId);

  return (
    <main>
      <section>
        <div className="container">
          {isLoading && <p>Is Loading...</p>}
          {isError && <p>Error</p>}
          {data ? <Post {...data} details={true} /> : null}
        </div>
      </section>
    </main>
  );
};
