export interface QuestionAttribute {
  min: number;
  max: number;
}

export interface Question {
  questionId: string;
  questionType: "text" | "rating";
  label: string;
  required: boolean;
  attributes: QuestionAttribute | null;
}

export interface Survey {
  title: string;
  description: string;
  questions: Question[];
}
