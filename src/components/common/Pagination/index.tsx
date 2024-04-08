import React from 'react';
import styled from 'styled-components';
import arrow_double_left from '@assets/icons/arrow_double_left.svg';
import arrow_double_right from '@assets/icons/arrow_double_right.svg';
import arrow_left from '@assets/icons/arrow_left.svg';
import arrow_right from '@assets/icons/arrow_right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(500, startPage + 4);
  const pageNumbers = Array.from(
    { length: endPage + 1 - startPage },
    (_, i) => startPage + i,
  );

  return (
    <StyledPageUl>
      {currentPage !== 1 && (
        <li>
          <StyledButtonContainer>
            <StyledButton
              src={arrow_double_left}
              alt="처음으로"
              onClick={() => onPageChange(1)}
            />
            <StyledButton
              src={arrow_left}
              alt="이전"
              onClick={() => onPageChange(currentPage - 1)}
            />
          </StyledButtonContainer>
        </li>
      )}
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <StyledNumber
            $isActive={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </StyledNumber>
        </li>
      ))}
      {currentPage !== totalPages && (
        <li>
          <StyledButtonContainer>
            <StyledButton
              src={arrow_right}
              alt="다음으로"
              onClick={() => onPageChange(currentPage + 1)}
            />
            <StyledButton
              src={arrow_double_right}
              alt="맨뒤로"
              onClick={() => onPageChange(500)}
            />
          </StyledButtonContainer>
        </li>
      )}
    </StyledPageUl>
  );
};

const StyledPageUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const StyledNumber = styled.button<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? 'var(--gray-1)' : 'var(--gray-3)')};
`;

export default Pagination;
