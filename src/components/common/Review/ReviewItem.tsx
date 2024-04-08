import { memo, useState, useRef } from 'react';
import { Review } from 'src/@types/review';
import styled from 'styled-components';
import StarRate from '@components/common/StarRate';
import useContentHeight from '@hooks/useContentHeight';

const ReviewItem = memo(
  ({ author, author_details, content, created_at }: Review) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const contentHeight = useContentHeight({ contentRef });

    const toggleExpanded = () => {
      setExpanded((prev) => !prev);
    };

    return (
      <StyledReviewItem $expanded={expanded}>
        <StyledReviewInfo>
          <StyledRateBox>
            <StyledText>Rate.</StyledText>
            <StarRate rate={author_details.rating} color={true} />
          </StyledRateBox>
          <StyledAuthorBox>
            <div>{author}</div>
            <StyledDate>
              {created_at.slice(0, 10).split('-').join('.')}
            </StyledDate>
          </StyledAuthorBox>
        </StyledReviewInfo>
        <StyledContent
          ref={contentRef}
          $expanded={expanded}
          $contentHeight={contentHeight}
        >
          {content}
        </StyledContent>
        {contentHeight && contentHeight >= 120 && !expanded && (
          <StyledReadMore onClick={toggleExpanded}>Read more</StyledReadMore>
        )}
      </StyledReviewItem>
    );
  },
);

ReviewItem.displayName = 'ReviewItem';

const StyledReviewItem = styled.li<{ $expanded: boolean }>`
  width: 100%;
  min-height: 200px;
  max-height: ${({ $expanded }) => ($expanded ? 'auto' : '200px')};
  overflow: hidden;
  position: relative;
  padding: 12px;
  border: 1px solid var(--gray-4);
  border-radius: 8px;
`;

const StyledReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-1);
  margin-bottom: 12px;
`;

const StyledRateBox = styled.div`
  display: flex;
  gap: 2px;
`;

const StyledText = styled.span`
  line-height: 20px;
`;

const StyledAuthorBox = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledDate = styled.span`
  color: var(--gray-3);
`;

const StyledContent = styled.div<{
  $expanded: boolean;
  $contentHeight: number | null;
}>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 'unset' : '6')};
  -webkit-box-orient: vertical;
  line-height: 20px;
`;

const StyledReadMore = styled.button`
  color: var(--gray-3);
  font-size: 12px;
  border-bottom: 1px solid var(--gray-3);
  margin: 4px 0;
  padding: 0;
`;

export default ReviewItem;
