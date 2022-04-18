export interface QuizResponse {
  response_code: number;
  results:       Result[];
}

export interface Result {
  category:          string;
  type:              Type;
  difficulty:        Difficulty;
  question:          string;
  correct_answer:    CorrectAnswer;
  incorrect_answers: CorrectAnswer[];
}

export enum CorrectAnswer {
  False = "False",
  True = "True",
}

export enum Difficulty {
  Hard = "hard",
}

export enum Type {
  Boolean = "boolean",
}
