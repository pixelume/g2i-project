import { keyframes } from '@emotion/react';

const slideInTopKeyFrame = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInTop = (reverse = false) =>
  `${slideInTopKeyFrame} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${
    reverse ? 'reverse' : ''
  } both`;

export default slideInTop;
