import { memo } from 'react';
import styled from 'styled-components';
import { ModalProps } from 'src/@types/modal';

const DeleteModal = memo(({ title, onSubmit, onAbort }: ModalProps) => {
  const handleOutside = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    onAbort?.(new Error());
  };
  return (
    <StyledWrapper onClick={handleOutside}>
      <StyledContainer>
        <StyledFlexContainer>
          <StyledMovieTitle>{title}</StyledMovieTitle>
          <StyledSpan>
            선택한 영화가 My Favorite List에서 제거되었습니다.
          </StyledSpan>
          <StyledButtonContainer>
            <StyledButton onClick={() => onSubmit?.(true)}>닫기</StyledButton>
          </StyledButtonContainer>
        </StyledFlexContainer>
      </StyledContainer>
    </StyledWrapper>
  );
});

DeleteModal.displayName = 'DeleteModal';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 19, 30, 0.37);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledContainer = styled.article`
  width: 560px;
  height: 273px;
  margin: auto;
  padding: 24px;
  background-color: var(--white);
  border-radius: 8px;
  text-align: center;
`;

const StyledFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledMovieTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: var(--gray-1);
`;

const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--gray-4);
  color: var(--white);
  border-radius: 8px;
`;

export default DeleteModal;
