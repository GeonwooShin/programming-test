import MovieCardImage from './MovieCardImage';
import styled from 'styled-components';
import StarRate from '@components/common/StarRate';
import LikeButton from '@components/common/Button/LikeButton';
import Tag from '@components/common/Tag';
import { useGetMovieDetail } from '@hooks/useGetQueries';

const MovieInfo = ({ movieId }: { movieId: string }) => {
  const { data: movie } = useGetMovieDetail(movieId);
  return (
    <StyledLayout>
      <StyledTitleContainer>
        <h1>{movie.title}</h1>
        <StyledUnderline />
      </StyledTitleContainer>
      <StyledInfoContainer>
        <MovieCardImage poster_path={movie.poster_path} title={movie.title} />
        <StyledInfo>
          <StyledFirstLineBox>
            <StyledLineBox>
              <span>Rate.</span>
              <StyledRateNumber>
                ({movie.vote_average.toFixed(2)})
              </StyledRateNumber>
              <StarRate rate={movie.vote_average} color={true} />
            </StyledLineBox>
            <LikeButton title={movie.title} id={movie.id} />
          </StyledFirstLineBox>
          <StyledDateBox>
            <span>Release Date.</span>
            <StyledDate>{movie.release_date.split('-').join('.')}</StyledDate>
          </StyledDateBox>
          <StyledGenreBox>
            {movie.genres.map((genre) => (
              <Tag key={genre.id} text={genre.name} />
            ))}
          </StyledGenreBox>
          <StyledOverviewBox>{movie.overview}</StyledOverviewBox>
        </StyledInfo>
      </StyledInfoContainer>
    </StyledLayout>
  );
};

MovieInfo.displayName = 'MovieInfo';

const StyledLayout = styled.div`
  margin: 40px 0;
  padding: 0 8px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 40px;
`;

const StyledUnderline = styled.div`
  width: 50px;
  height: 1px;
  background-color: var(--primary);
`;

const StyledInfoContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledInfo = styled.div`
  flex: 2;
  border: 1px solid var(--gray-4);
  border-radius: 8px;
  padding: 16px;
`;

const StyledFirstLineBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLineBox = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: var(--gray-1);
  gap: 4px;
`;

const StyledDateBox = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: var(--gray-1);
  gap: 4px;
  margin: 8px 0;
`;

const StyledDate = styled.span`
  color: var(--primary);
`;

const StyledRateNumber = styled.span`
  color: var(--gray-3);
`;

const StyledGenreBox = styled.ul`
  margin: 20px 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const StyledOverviewBox = styled.div`
  padding: 4px 0;
`;

export default MovieInfo;
