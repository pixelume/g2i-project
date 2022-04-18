import {
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CrossIcon from '@mui/icons-material/Close';
import he from 'he';
import sx from 'mui-sx';
import cardSx from '../styles/cardSx';
import { useQuizContext } from '../App';
import scrollBarsStyle from '../styles/scrollBarsStyle';
import animateEntranceSx from '../styles/entranceAnimation';

const ResultsCard: React.FC = () => {
  const { data, answers } = useQuizContext();
  const questions = data?.data?.results;
  let score = 0
  questions?.forEach((question, i) => {
    const answeredCorrect = question.correct_answer === answers[i]
    if (answeredCorrect) {
      score += 1
    }
  })

  return (
    <Paper
      sx={sx(
        { ...(cardSx as any), pr: 1 },
        { condition: true, sx: animateEntranceSx(0) }
      )}
    >
      <Box
        sx={sx(
          { pr: 2, height: '100%', overflowX: 'hidden', overflowY: 'auto' },
          scrollBarsStyle
        )}
      >
        <Typography variant="h5" sx={{mb: 2, fontWeight: '600'}}>
          {`You scored ${score} / ${questions?.length}`}
        </Typography>
        <List>
          {questions &&
            questions.map((question, i) => {
              const answeredCorrect = question.correct_answer === answers[i];
              return (
                <ListItem
                  key={question.question}
                  divider={i < questions.length - 1}
                >
                  <ListItemIcon>
                    {answeredCorrect ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CrossIcon color="error" />
                    )}
                  </ListItemIcon>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={9}>
                      <ListItemText
                        sx={{ '& .MuiTypography-root': { fontSize: '14px' } }}
                        primary={he.decode(question.question)}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justifyContent="space-between"
                      item
                      xs={3}
                      sx={{ textAlign: 'center' }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontSize: '10px', color: 'success.main', fontWeight: '600', mb: 1 }}
                      >
                        Correct&nbsp;answer:
                      </Typography>
                      <Chip size="small" label={question.correct_answer} />
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
        </List>
        <Button variant='text' onClick={() => window.location.reload()} >Play again ?</Button>
      </Box>
    </Paper>
  );
};

export default ResultsCard;
