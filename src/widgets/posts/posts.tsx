import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetPostsListQuery } from '@/shared/api';
import { constantsMap } from '@/shared/model';
import { Post } from '@/entities/post';
import './index.scss';

export const Posts: React.FC = () => {
  const { ref, inView } = useInView();
  const [limit, setLimit] = useState(constantsMap.shared.config.limit);
  const { data, isLoading, isError } = useGetPostsListQuery({ limit: limit });

  useEffect(() => {
    setLimit(
      (prevLimit) => prevLimit + constantsMap.shared.config.limitIncrease
    );
  }, [inView]);

  const postsList = data ? (
    <ul className="posts-list">
      {data.map((post) => {
        const isLastPost = Number(post.id) === limit;
        return (
          <li
            className="posts-list__item"
            key={post.id}
            ref={isLastPost ? ref : null}
          >
            <Post {...post} />
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <section className="posts-section">
      <div className="container">
        {postsList}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading data.</p>}
      </div>
    </section>
  );
};
