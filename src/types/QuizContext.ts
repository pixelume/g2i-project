import { QuizResponse } from './TriviaResponse';

export interface QuizContextInterface {
  data: {data: QuizResponse | undefined, error: Error | undefined} | undefined
  setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>
  answers: ('True' | 'False')[]
  setAnswers: React.Dispatch<React.SetStateAction<("True" | "False")[]>>
  setQuestionsDone: React.Dispatch<React.SetStateAction<boolean>>
}
