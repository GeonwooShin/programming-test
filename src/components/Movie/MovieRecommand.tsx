import Carousel from '@components/common/Carousel';
import { useGetRecommendation } from '@hooks/useGetQueries';
import styled from 'styled-components';

const MovieRecommand = ({ movieId }: { movieId: string }) => {
  const { data: recommands } = useGetRecommendation(movieId);
  return (
    <StyledWrapper>
      <StyledTitleContainer>
        <h1>More Like This</h1>
        <StyledUnderline />
      </StyledTitleContainer>
      <Carousel movies={recommands} />
    </StyledWrapper>
  );
};

MovieRecommand.displayName = 'MovieRecommand';

const StyledWrapper = styled.div`
  margin-top: 20px;
  padding: 0 8px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 8px;
`;

const StyledUnderline = styled.div`
  width: 64px;
  height: 1px;
  background-color: var(--gray-4);
`;

export default MovieRecommand;
