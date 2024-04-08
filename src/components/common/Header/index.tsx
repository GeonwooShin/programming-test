import styled from 'styled-components';

const Header = () => {
  return (
    <StyledContainer>
      <StyledContent>프론트엔드 구현 과제 (신건우)</StyledContent>
    </StyledContainer>
  );
};

Header.displayName = 'Header';

const StyledContainer = styled.header`
  z-index: 9;
  position: sticky;
  top: 0;
  display: flex;
  border-bottom: 1px solid var(--gray-6);
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 72px;
  margin: 0 auto;
  padding: 0 32px;
  background-color: var(--white);
`;

const StyledContent = styled.span`
  font-weight: 500;
  color: var(--primary);
  font-size: 18px;
`;

export default Header;
