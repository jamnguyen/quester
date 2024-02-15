import { Question } from './question';

export type Topic = {
  id: string;
  title: string;
  questions: Question[];
};
