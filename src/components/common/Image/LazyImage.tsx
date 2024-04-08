import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import placeholderImage from '@assets/images/vertical-placeholder-image.jpeg';

type LazyImageProps = {
  src: string | null;
  alt: string;
};

const LazyImage = ({ src, alt }: LazyImageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const getImageUrl = (size = 400): string => {
    return `https://image.tmdb.org/t/p/w${size}${src}`;
  };

  const onIntersect = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (entry.isIntersecting && !isVisible) {
        observer.unobserve(entry.target);
        setIsVisible(true);
        observer.observe(entry.target);
      }
    },
    [isVisible],
  );

  const { target } = useIntersectionObserver({
    onIntersect,
  });

  return (
    <StyledImgContainer ref={target}>
      <StyledImage
        alt={alt}
        src={isVisible && getImageUrl() ? getImageUrl() : placeholderImage}
        $isVisible={isVisible}
      />
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 3 / 4.2;
`;

const StyledImage = styled.img<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default LazyImage;
