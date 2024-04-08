import { css, keyframes } from 'styled-components';

export const textEllipsisStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const slideInAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;
