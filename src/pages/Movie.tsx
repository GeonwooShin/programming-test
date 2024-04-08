import MovieDetail from '@components/Movie/MovieDetail';
import Fallback from '@components/common/Fallback';
import Layout from '@components/common/Layout';
import { Suspense } from 'react';

const Movie = () => {
  return (
    <Layout>
      <Suspense fallback={<Fallback />}>
        <MovieDetail />
      </Suspense>
    </Layout>
  );
};

export default Movie;
