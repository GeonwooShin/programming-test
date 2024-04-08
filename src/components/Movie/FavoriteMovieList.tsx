import { useGetLikedMovies } from '@hooks/useGetQueries';
import { memo } from 'react';
import MovieCard from '@components/Movie/MovieCard';
import styled from 'styled-components';
import { media } from '@styles/media';

const FavoriteMovieList = memo(() => {
  const { data: movies } = useGetLikedMovies();
  return (
    <StyledUl>
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} {...movie}></MovieCard>
      ))}
    </StyledUl>
  );
});

FavoriteMovieList.displayName = 'FavoriteMovieList';

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  `}
  ${media.phone`
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  `}
`;

export default FavoriteMovieList;
