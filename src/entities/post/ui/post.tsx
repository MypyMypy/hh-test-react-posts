import { Link, useNavigate } from 'react-router-dom';
import type { PostProps } from '../model/types';
import './post.scss';

export const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  details,
}) => {
  const navigate = useNavigate();
  const postClass = 'post-card';
  const classes = [postClass];
  let backButton = null;

  if (details) {
    classes.push('post-card--details');
    backButton = (
      <button
        onClick={() => navigate(-1)}
        className={postClass + '__link-back'}
      >
        Назад
      </button>
    );
  }

  return (
    <article className={classes.join(' ')}>
      <span className={postClass + '__number'}>{id}</span>
      <h3 className={postClass + '__title'}>{title}</h3>
      <p className={postClass + '__description'}>{description}</p>
      <Link to={`posts/${id}`} className={postClass + '__link'}>
        Просмотр
      </Link>
      {backButton}
    </article>
  );
};
