import styled from 'styled-components';
import whiteStar from '@assets/icons/star_filled_white.svg';
import coloredStar from '@assets/icons/star_filled_primary.svg';

type StarRateProps = {
  rate: number;
  color?: boolean;
};

const StarRate = ({ rate, color = false }: StarRateProps) => {
  const numStars = Math.round(rate / 2);

  const renderStars = () => {
    return Array.from({ length: numStars }, (_, index) => (
      <StyledStar
        key={index}
        src={color ? coloredStar : whiteStar}
        alt="star"
      />
    ));
  };

  return <StyledContainer>{renderStars()}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
`;

const StyledStar = styled.img`
  width: 18px;
  height: 18px;
`;

export default StarRate;
