import { lazy, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieProps } from 'src/@types/movie';
import useHover from '@hooks/useHover';
import styled from 'styled-components';
import rightArrow from '@assets/icons/arrow_right_white.svg';
import { getGenreNameById } from '@constants/genres';
import { textEllipsisStyle, slideInAnimation } from '@styles/styleConstants';
import StarRate from '@components/common/StarRate';

const LazyImage = lazy(() => import('@components/common/Image/LazyImage'));

const MovieCard = memo(
  ({
    id,
    title,
    genre_ids,
    poster_path,
    release_date,
    overview,
    vote_average,
  }: MovieProps) => {
    const [isHover, hoverRef] = useHover<HTMLLIElement>();
    const navigate = useNavigate();
    return (
      <StyledList ref={hoverRef}>
        <StyledCard $isHover={isHover}>
          <LazyImage src={poster_path} alt={title} />
          {isHover && (
            <StyledInfoContainer>
              <StyledInfo>
                <StyledTitleSection>
                  <StyledTitle>{title}</StyledTitle>
                  <StyledDate>({release_date.slice(0, 4)})</StyledDate>
                </StyledTitleSection>
                <div>
                  <StyledRate>
                    <StyledRateNumber>
                      {vote_average.toFixed(2)}
                    </StyledRateNumber>
                    <StarRate rate={vote_average} />
                  </StyledRate>
                  <StyledGenre>
                    genres:
                    {genre_ids.slice(0, 2).map((genreId) => (
                      <StyledGenreItem key={genreId}>
                        {getGenreNameById(genreId)}
                      </StyledGenreItem>
                    ))}
                  </StyledGenre>

                  <StyledOverview>{overview}</StyledOverview>
                  <StyledButtonWrapper
                    onClick={() => navigate(`/movie-detail/${id}`)}
                  >
                    <StyledText>View Details</StyledText>
                    <StyledArrow alt="arrow" src={rightArrow} />
                  </StyledButtonWrapper>
                </div>
              </StyledInfo>
            </StyledInfoContainer>
          )}
        </StyledCard>
      </StyledList>
    );
  },
);

MovieCard.displayName = 'MovieCard';

const StyledList = styled.li`
  position: relative;
  max-width: 300px;
  max-height: 420px;
  box-sizing: border-box;
`;

const StyledCard = styled.div<{ $isHover: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: ${({ $isHover }) => ($isHover ? '1px solid var(--orange)' : 'none')};
`;

const StyledInfoContainer = styled.div`
  animation: ${slideInAnimation} 0.3s 1;
  height: 100%;
  position: absolute;
  border-radius: 8px;
  padding: 12px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--white);
  font-size: 14px;
`;

const StyledInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin: 4px 0;
  ${textEllipsisStyle}
  -webkit-line-clamp: 1;
`;

const StyledDate = styled.p`
  font-size: 12px;
  text-align: center;
  margin-bottom: 4px;
`;

const StyledRate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledRateNumber = styled.span`
  height: 18px;
  line-height: 20px;
`;

const StyledGenre = styled.div`
  margin: 12px 0;
  ${textEllipsisStyle}
  -webkit-line-clamp: 1;
  line-height: 18px;
`;

const StyledGenreItem = styled.span`
  word-wrap: break-word;
  padding: 2px;
`;

const StyledOverview = styled.div`
  ${textEllipsisStyle}
  -webkit-line-clamp: 5;
  line-height: 18px;
`;

const StyledButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;

const StyledText = styled.div`
  color: var(--white);
  font-size: 12px;
  line-height: 19px;
  height: 18px;
`;

const StyledArrow = styled.img`
  width: 18px;
  height: 18px;
`;

export default MovieCard;
