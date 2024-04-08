import { useState } from 'react';
import { MovieProps } from 'src/@types/movie';
import styled from 'styled-components';
import RecommandMovieItem from '@components/Movie/RecommandMovieItem';
import arrow_right from '@assets/icons/arrow_right_primary.svg';
import arrow_left from '@assets/icons/arrow_left_primary.svg';

const Carousel = ({ movies }: { movies: MovieProps[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === movies.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? movies.length - 1 : prevSlide - 1,
    );
  };

  return (
    <StyledCarouselWrapper>
      {movies.length ? (
        <>
          <StyledButton onClick={prevSlide}>
            <StyledArrow src={arrow_left} alt="arrow" />
          </StyledButton>
          <StyledCarouselContainer>
            {movies.map((movie, index) => (
              <Slide key={index} $isActive={index === currentSlide}>
                <RecommandMovieItem {...movie} />
              </Slide>
            ))}
          </StyledCarouselContainer>
          <StyledButton onClick={nextSlide}>
            <StyledArrow src={arrow_right} alt="arrow" />
          </StyledButton>
        </>
      ) : (
        <StyledNoneResultBox>No Recommand Movies</StyledNoneResultBox>
      )}
    </StyledCarouselWrapper>
  );
};

Carousel.displayName = 'Carousel';

const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledCarouselContainer = styled.div`
  diplay: flex;
  width: 636px;
  overflow: hidden;
`;

const Slide = styled.div<{ $isActive: boolean }>`
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledArrow = styled.img`
  width: 16px;
  height; 16px;
`;

const StyledNoneResultBox = styled.div`
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

export default Carousel;
