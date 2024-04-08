import { memo } from 'react';
import styled from 'styled-components';

const Tag = memo(({ text }: { text: string }) => {
  return (
    <StyledList>
      <StyledSpan>
        <span>#</span>
        <span>{text}</span>
      </StyledSpan>
    </StyledList>
  );
});

Tag.displayName = 'Tag';

const StyledList = styled.li`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  line-height: 1px;
  background-color: var(--gray-6);
  padding: 12px 8px;
  border-radius: 30px;
  font-size: 14px;
  word-wrap: break-word;
`;

const StyledSpan = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  color: var(--gray-3);
`;

export default Tag;
