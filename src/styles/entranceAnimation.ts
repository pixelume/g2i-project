import { keyframes } from '@emotion/react'

export const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
`
export const fadeShadow = keyframes`
  100% {
    opacity: 0;
  }
`

const animateEntranceSx = (delay: number): any => {
  return {
    animation: `${fadeUp} 0.7s ease-out both`,
    animationDelay: `${delay}s`,
    '&::after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      display: 'block',
      content: "''",
      boxShadow: '8px 6px 32px 0px rgba(0,0,0,0.75)',
      animation: `${fadeShadow} 1.8s ease-out both`,
      animationDelay: `${delay}s`,
      borderRadius: '16px',
      pointerEvents: 'none'
    }
  }
}

export default  animateEntranceSx
