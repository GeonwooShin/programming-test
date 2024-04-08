import useDropdown from '@hooks/useDropdown';
import { Dispatch, memo } from 'react';
import styled from 'styled-components';
import upArrow from '@assets/icons/arrow_up.svg';
import downArrow from '@assets/icons/arrow_down.svg';
import { DROPDOWN_OPTIONS } from '@constants/genres';

const Dropdown = memo(
  ({
    sortType,
    setSortType,
  }: {
    sortType: string;
    setSortType: Dispatch<React.SetStateAction<string>>;
  }) => {
    const { isOpen, dropdownRef, toggleDropdown } = useDropdown();

    const currentSortType = (sortType: string) => {
      return DROPDOWN_OPTIONS.find((option) => option.id === sortType)?.name;
    };

    const handleSortType = (selectedType: string) => {
      setSortType(selectedType);
      toggleDropdown();
    };

    return (
      <StyledWrapper ref={dropdownRef}>
        <StyledDropdownBtn onClick={toggleDropdown}>
          <StyledSortOption>{currentSortType(sortType)}</StyledSortOption>
          <StyledArrow alt="arrow" src={isOpen ? upArrow : downArrow} />
        </StyledDropdownBtn>
        {isOpen && (
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({ id, name }) => (
              <DropdownOption key={id} onClick={() => handleSortType(id)}>
                {name}
              </DropdownOption>
            ))}
          </DropdownMenu>
        )}
      </StyledWrapper>
    );
  },
);

Dropdown.displayName = 'Dropdown';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0 12px;
  width: 180px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid var(--gray-5);
`;
const StyledDropdownBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyledSortOption = styled.div``;

const StyledArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  border: 1px solid var(--gray-5);
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
  background-color: var(--white);
`;

const DropdownOption = styled.li`
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--gray-6);
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export default Dropdown;
