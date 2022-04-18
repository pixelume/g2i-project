import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography
} from '@mui/material';
import he from 'he';
import sx from 'mui-sx';
import { useEffect, useState } from 'react';
import { useQuizContext } from '../App';
import cardSx from '../styles/cardSx';
import animateEntranceSx from '../styles/entranceAnimation';
import GenericError from './GenericError';

interface QuestionBlockProps {
  question: string;
  animate: boolean
  setAnimate: (arg: boolean) => void
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ question, setAnimate, animate }) => {

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false)
      }, 1850);
    }
  }, [animate, setAnimate])

  return (
    <Paper
      sx={sx(
        { p: 3, backgroundColor: 'secondary.light', border: '1px solid #ff6090' },
        {condition: animate, sx: animateEntranceSx(0)}
      )}
    >
      <Typography
        variant="body1"
        sx={{ color: 'primary.dark', fontWeight: '600' }}
      >
        {question}
      </Typography>
    </Paper>
  );
};

const QuestionCard: React.FC = () => {
  const { data, setAnswers, setQuestionsDone } = useQuizContext();
  const NR_OF_QUESTIONS = data?.data?.results.length ?? 0;
  const fetchError = data?.error;
  const questions = data?.data?.results;
  const [idxOfCurrQuestion, setIdxOfCurrQuestion] = useState(0);
  const currentQuestion = questions ? questions[idxOfCurrQuestion] : undefined;
  const [animate, setAnimate] = useState(true)

  const handleAnswer = (answer: 'True' | 'False') => {
    setAnswers((answers) => [...answers].concat([answer]));
    setAnimate(true)
    if (idxOfCurrQuestion + 1 < NR_OF_QUESTIONS) {
      setIdxOfCurrQuestion((currIdx) => currIdx + 1);
    } else {
      setQuestionsDone(true);
    }
  };

  return (
    <Paper sx={sx(cardSx as any, animateEntranceSx(0))}>
      {fetchError ? (
        <GenericError error={data.error}/>
      ) : (
        <>
          {currentQuestion && (
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              sx={{ height: '100%' }}
            >
              <Grid item>
                <Typography variant="h5">{currentQuestion.category}</Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ mb: 2, fontStyle: 'italic', fontWeight: '600' }}
                  variant="body1"
                >
                  {`Question ${idxOfCurrQuestion + 1}`}
                </Typography>
                <QuestionBlock animate={animate} setAnimate={setAnimate} question={he.decode(currentQuestion.question)} />
                <Typography
                  sx={{ mt: 5, fontStyle: 'italic', fontWeight: '600' }}
                  variant="body1"
                >
                  {`${idxOfCurrQuestion + 1} of ${NR_OF_QUESTIONS}`}
                </Typography>
              </Grid>
              <Grid item>
                <ButtonGroup>
                  <Button
                    color="success"
                    variant="contained"
                    onClick={() => handleAnswer('True')}
                  >
                    True
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => handleAnswer('False')}
                  >
                    False
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Paper>
  );
};

export default QuestionCard;
