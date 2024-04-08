import { lazy, memo } from 'react';
import styled from 'styled-components';

const LazyImage = lazy(() => import('@components/common/Image/LazyImage'));

const MovieCardImage = memo(
  ({ poster_path, title }: { poster_path: string; title: string }) => {
    return (
      <StyledList>
        <StyledCard>
          <LazyImage src={poster_path} alt={title} />
        </StyledCard>
      </StyledList>
    );
  },
);

MovieCardImage.displayName = 'MovieCardImage';

const StyledList = styled.li`
  flex: 1;
  position: relative;
  max-width: 300px;
  max-height: 420px;
  box-sizing: border-box;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export default MovieCardImage;
