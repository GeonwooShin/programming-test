import { useState } from 'react';
import ReviewItem from '@components/common/Review/ReviewItem';
import styled from 'styled-components';
import { useGetMovieReviews } from '@hooks/useGetQueries';

const MovieReview = ({ movieId }: { movieId: string }) => {
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const { data: reviews } = useGetMovieReviews(movieId);
  const review = reviews.results;

  return (
    <StyledReviewContainer>
      <StyledTitleContainer>
        <h1>Reviews</h1>
        <StyledUnderline />
      </StyledTitleContainer>
      {review.length > 0 ? (
        <>
          <ReviewItem key={review[0].id} {...review[0]} />
          {review.length > 1 && !showAllReviews && (
            <StyledButtonContainer>
              <StyledReadAllButton onClick={() => setShowAllReviews(true)}>
                Read All Reviews
              </StyledReadAllButton>
            </StyledButtonContainer>
          )}
          {showAllReviews &&
            review
              .slice(1)
              .map((reviewItem) => (
                <ReviewItem key={reviewItem.id} {...reviewItem} />
              ))}
        </>
      ) : (
        <StyledNoneReviewBox>
          <p>No Reviews Yet</p>
        </StyledNoneReviewBox>
      )}
    </StyledReviewContainer>
  );
};

MovieReview.displayName = 'MovieReview';

const StyledReviewContainer = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledReadAllButton = styled.button`
  color: var(--gray-3);
  font-size: 14px;
  border-bottom: 1px solid var(--gray-3);
  padding: 0;
`;

const StyledNoneReviewBox = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  padding: 12px;
  border: 1px solid var(--gray-4);
  border-radius: 8px;
  color: var(--gray-3);
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MovieReview;
