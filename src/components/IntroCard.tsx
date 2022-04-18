import { Button, Grid, Paper, Typography } from '@mui/material';
import cardSx from '../styles/cardSx';
import { useQuizContext } from '../App';
import animateEntranceSx from '../styles/entranceAnimation';

const IntroCard: React.FC = () => {
  const {setStartQuiz} = useQuizContext()
  return (
    <Paper sx={{...cardSx, ...animateEntranceSx(0)}}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: '100%' }}
      >
        <Grid item>
          <Typography variant="h4">Welcome to the Trivia Challenge</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            You will be presented with 10 True or False questions
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Can you score 100%?</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => setStartQuiz(true)}>Begin</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IntroCard;
