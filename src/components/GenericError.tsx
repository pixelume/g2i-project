/* eslint-disable react/require-default-props */
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import sx from 'mui-sx';
import animateEntranceSx from '../styles/entranceAnimation';

interface GenericErrorProps {
  error?: Error;
}

const GenericError: React.FC<GenericErrorProps> = ({ error }) => (
  <>
    {error && (
      <Paper
        elevation={0}
        sx={sx(
          {
            border: '1px solid lightgrey',
            textAlign: 'center',
            p: 5,
            mt: 5,
            borderRadius: '9.6px',
          },
          animateEntranceSx(0)
        )}
      >
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            mb: '16px',
          }}
        >
          <ErrorOutlineIcon color='error' fontSize='large'/>
        </Box>
        <Typography variant="h5">There seems to be an error</Typography>
        <Typography variant="body1">
          {`Error message: ${error.message}`}
        </Typography>
      </Paper>
    )}
  </>
);

export default GenericError;
