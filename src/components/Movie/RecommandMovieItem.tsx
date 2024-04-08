import { MovieProps } from 'src/@types/movie';
import MovieCardImage from '@components/Movie/MovieCardImage';
import styled from 'styled-components';
import StarRate from '@components/common/StarRate';
import rightArrow from '@assets/icons/arrow_right_black.svg';
import { useNavigate } from 'react-router-dom';
import { textEllipsisStyle } from '@styles/styleConstants';

const RecommandMovieItem = ({
  id,
  title,
  poster_path,
  vote_average,
  overview,
}: MovieProps) => {
  const navigate = useNavigate();
  return (
    <StyledLayout>
      <StyledInfoContainer>
        <MovieCardImage poster_path={poster_path} title={title} />
        <StyledInfo>
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledFirstLineBox>
              <StyledLineBox>
                <StarRate rate={vote_average} color={true} />
                <StyledRateNumber>{vote_average.toFixed(2)}</StyledRateNumber>
              </StyledLineBox>
            </StyledFirstLineBox>
            <StyledOverviewBox>{overview}</StyledOverviewBox>
          </div>
          <StyledButtonWrapper onClick={() => navigate(`/movie-detail/${id}`)}>
            <StyledText>View Details</StyledText>
            <StyledArrow alt="arrow" src={rightArrow} />
          </StyledButtonWrapper>
        </StyledInfo>
      </StyledInfoContainer>
    </StyledLayout>
  );
};

RecommandMovieItem.displayName = 'RecommandMovieItem';

const StyledLayout = styled.div`
  margin: 40px 0;
  padding: 12px;
  background-color: var(--gray-7);
  border-radius: 8px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  padding: 16px 0;
`;

const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-1);
  margin-bottom: 4px;
`;

const StyledFirstLineBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const StyledLineBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: var(--gray-1);
  gap: 4px;
`;

const StyledRateNumber = styled.span`
  font-size: 12px;
  color: var(--gray-3);
`;

const StyledOverviewBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 4px 0;
  ${textEllipsisStyle}
  -webkit-line-clamp: 10;
  line-height: 16px;
`;

const StyledButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;

const StyledText = styled.div`
  color: var(--gray-1);
  font-size: 12px;
  line-height: 19px;
  height: 18px;
`;

const StyledArrow = styled.img`
  width: 18px;
  height: 18px;
`;

export default RecommandMovieItem;
