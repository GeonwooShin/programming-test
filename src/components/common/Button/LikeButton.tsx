import { memo, useContext } from 'react';
import styled from 'styled-components';
import likeIcon from '@assets/icons/like.svg';
import ActivelikeIcon from '@assets/icons/like-active.svg';
import { useGetMovieState } from '@hooks/useGetQueries';
import { usePostLike } from '@hooks/usePostMutations';
import { ModalContext } from '@context/ModalContext';
import AddModal from '@components/common/Modal/AddModal';
import DeleteModal from '@components/common/Modal/DeleteModal';
import { useNavigate } from 'react-router-dom';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  id: string;
  title: string;
};

const LikeButton = memo(({ id, title }: ButtonProps) => {
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);
  const { data: movieState } = useGetMovieState(id);
  const { mutate: like } = usePostLike();

  const onLike = async () => {
    if (movieState.favorite) {
      like({ media_id: id, favorite: false });
      openModal(<DeleteModal title={title} />).catch(() => false);
    } else {
      like({ media_id: id, favorite: true });
      const flag = await openModal(<AddModal title={title} />).catch(
        () => false,
      );
      if (flag) navigate(`/movie-list/favorite`);
    }
  };

  return (
    <StyledButton type="button" onClick={onLike}>
      <StyledLogo
        alt="like"
        src={movieState.favorite ? ActivelikeIcon : likeIcon}
      />
    </StyledButton>
  );
});

LikeButton.displayName = 'LikeButton';

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border: none;
  gap: 4px;
`;

const StyledLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export default LikeButton;
