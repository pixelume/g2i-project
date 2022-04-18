import { Container, Grid, ThemeProvider } from '@mui/material';
import { createContext, useContext, useState } from 'react';
import { useFetch } from 'usehooks-ts';
import QUIZ_URL from './apiEndpoints';
import './App.css';
import IntroCard from './components/IntroCard';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import theme from './styles/theme';
import { QuizContextInterface } from './types/QuizContext';
import { QuizResponse } from './types/TriviaResponse';

export const QuizContext = createContext<QuizContextInterface>({
  data: undefined,
  setStartQuiz: () => {},
  answers: [],
  setAnswers: () => {},
  setQuestionsDone: () => {},
});
export const useQuizContext = (): QuizContextInterface => useContext(QuizContext);

const App = (): JSX.Element => {
  const { data, error } = useFetch<QuizResponse>(QUIZ_URL);
  const [startQuiz, setStartQuiz] = useState(false);
  const [answers, setAnswers] = useState<('True' | 'False')[]>([]);
  const [questionsDone, setQuestionsDone] = useState(false);

  const getContent = () => {
    if (questionsDone) {
      return <ResultsCard />;
    }
    if (startQuiz) {
      return <QuestionCard />;
    }
    return <IntroCard />;
  };

  return (
    <ThemeProvider theme={theme}>
      <QuizContext.Provider
        value={{
          data: { data, error },
          setStartQuiz,
          answers,
          setAnswers,
          setQuestionsDone,
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Grid
            container
            justifyContent="center"
            sx={{
              minHeight: '100vh',
              background:
                'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, #cb9b8c 100%)',
            }}
          >
            <Grid item margin="auto">
              {getContent()}
            </Grid>
          </Grid>
        </Container>
      </QuizContext.Provider>
    </ThemeProvider>
  );
};

export default App;
