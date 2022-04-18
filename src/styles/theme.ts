import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(","),
    h4: {
      fontWeight: 600,
      color: '#b0003a'
    }
  },
  palette: {
    primary: {
      main: '#e91e63',
      light: '#ff6090',
      dark: '#b0003a',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffccbc',
      light: '#ffffee',
      dark: '#cb9b8c',
      contrastText: '#fff'
    }
  },
  components: {
    // Name of the component
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '16px',
          border: '1px solid #cb9b8c',
        },
      },
    },
  },
});

export default theme
