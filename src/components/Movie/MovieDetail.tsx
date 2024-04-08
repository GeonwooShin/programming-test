import assert from 'assert';
import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieInfo from '@components/Movie/MovieInfo';
import MovieReview from '@components/Movie/MovieReview';
import MovieRecommand from '@components/Movie/MovieRecommand';
import styled from 'styled-components';

const MovieDetail = memo(() => {
  const { movieId } = useParams();
  assert(movieId);
  const navigate = useNavigate();
  return (
    <div>
      <MovieInfo movieId={movieId} />
      <MovieReview movieId={movieId} />
      <MovieRecommand movieId={movieId} />
      <StyledButtonWrapper>
        <StyledButton onClick={() => navigate('/movie-list')}>
          Back to List
        </StyledButton>
      </StyledButtonWrapper>
    </div>
  );
});

MovieDetail.displayName = 'MovieDetail';

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1.2rem;
  background-color: var(--gray-4);
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  color: var(--white);
`;

export default MovieDetail;
