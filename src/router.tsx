import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import RootPage from '@pages/RootPage';
import Movie from '@pages/Movie';
import Favorite from '@pages/Favorite';

type routeElement = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children: { path: string; element: ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'movie-list',
        element: <Home />,
      },
      {
        path: 'movie-list/favorite',
        element: <Favorite />,
      },
      {
        path: 'movie-detail/:movieId',
        element: <Movie />,
      },
    ],
  },
];

const router = createBrowserRouter(
  routes.map((route) => {
    const childs = route.children?.map((childRoute) => {
      return {
        path: childRoute.path,
        element: childRoute.element,
      };
    });
    return {
      ...route,
      children: childs,
    };
  }),
);

export default router;
