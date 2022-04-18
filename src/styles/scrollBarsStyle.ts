import { SxProps} from '@mui/material';

const scrollBarsStyle: SxProps = {
  '::-webkit-scrollbar': {
    width: '3px',
    height: '3px',
  },
  '::-webkit-scrollbar-button': {
    width: '0px',
    height: '0px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'secondary.dark',
    border: '0px none #ffffff',
    borderRadius: '50px',
  },
  '::-webkit-scrollbar-thumb-hover': {
    backgroundColor: 'secondary.dark'
  },
  '::-webkit-scrollbar-thumb-active': {
    backgroundColor: 'secondary.dark'
  },
  '::-webkit-scrollbar-track': {
    background: '#e1e1e1',
    border: '0px none #ffffff',
    borderRadius: '50px',
  },
  '::-webkit-scrollbar-track:hover': {
    background: '#e1e1e1'
  },
  '::-webkit-scrollbar-track:active': {
    background: '#e1e1e1'
  },
  '::-webkit-scrollbar-corner': {
    background: 'transparent'
  }
}

export default scrollBarsStyle
