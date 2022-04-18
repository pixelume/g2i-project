import { SxProps, Theme } from '@mui/material';
import sx from 'mui-sx';

const cardSx: SxProps<Theme> = sx(
  {
    width: '500px',
    height: '80vh',
    '@media screen and (max-width: 500px)': {
      width: '95vw',
      height: '95vh',
      boxSizing: 'border-box',
    },
    p: 3,
    textAlign: 'center',
    // overflow: 'hidden'
  },
);

export default cardSx;
