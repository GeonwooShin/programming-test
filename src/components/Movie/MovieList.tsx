import { useGetAllMovies } from '@hooks/useGetQueries';
import { memo, useState } from 'react';
import MovieCard from '@components/Movie/MovieCard';
import Pagination from '@components/common/Pagination';
import styled from 'styled-components';
import { media } from '@styles/media';

const MovieList = memo(({ sortType }: { sortType: string }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: movies } = useGetAllMovies(currentPage, sortType);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <StyledUl>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} {...movie}></MovieCard>
        ))}
      </StyledUl>
      <Pagination
        currentPage={movies.page}
        totalPages={movies.total_pages}
        onPageChange={handlePageChange}
      />
    </>
  );
});

MovieList.displayName = 'MoviePosts';

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

export default MovieList;
