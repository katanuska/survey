import { createServer, Response } from "miragejs";
import { Survey } from "../form/survey.model";
import { ApiResponse } from "../apiResponse.model";

const survey: ApiResponse<Survey> = {
  type: "surveys",
  id: "2660dd24-e2db-42c1-8093-284b1df2664c",
  attributes: {
    title: "Film feedback form",
    description:
      "<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>",
    questions: [
      {
        questionId: "film",
        questionType: "text",
        label: "What film did you watch?",
        required: true,
        attributes: null,
      },
      {
        questionId: "review",
        questionType: "rating",
        label: "How would you rate the film? (1 - Very bad, 5 - Very good)",
        required: true,
        attributes: {
          min: 1,
          max: 5,
        },
      },
    ],
  },
};

const surveyError = {
  errors: [
    {
      title: "Internal Server Error",
      detail: "Something went wrong. We're working on it!",
    },
  ],
};

const surveyAnswer = {
  type: "surveyAnswers",
  id: "9c7160a4-e9ad-499e-92f6-07d7cdb0382c",
  attributes: {
    answers: [
      {
        questionId: "film",
        answer: "Rocky Horror Picture Show",
      },
      {
        questionId: "review",
        answer: 5,
      },
    ],
  },
  relationships: {
    survey: {
      data: {
        type: "surveys",
        id: "2660dd24-e2db-42c1-8093-284b1df2664c",
      },
    },
  },
};

const surveyAnswerError = {
  errors: [
    {
      source: { pointer: "data/attributes/answers/film" },
      detail: "The value is required",
    },
    {
      source: { pointer: "data/attributes/answers/review" },
      detail: "The value is required",
    },
  ],
};

export function makeServer({ environment = "develop" }) {
  return createServer({
    environment,
    routes() {
      this.namespace = "/api/v1";

      this.get("/survey", () => ({ data: survey }));

      this.post(
        "/survey/:id/answers",
        () => () => new Response(200, undefined, { data: surveyAnswer })
      );

      //this.get("/survey", () => new Response(500, undefined, surveyError));

      // this.post(
      //   "/survey/:id/answers",
      //   () => new Response(422, undefined, surveyAnswerError)
      // );
    },
  });
}
