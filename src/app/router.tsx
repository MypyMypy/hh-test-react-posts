import { Route, Routes } from 'react-router-dom';
import { navigationMap } from '@/shared/model';
import { HomePage } from '@/pages/home';
import { PostPage } from '@/pages/post';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={navigationMap.home} element={<HomePage />} />
      <Route path={navigationMap.post} element={<PostPage />} />
      <Route path={navigationMap.notFound} element={<>404 page</>} />
    </Routes>
  );
};
