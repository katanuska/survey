import { useLoaderData } from "react-router-dom";
import { Survey } from "./survey.model";
import * as SurvayService from "./survey.service";
import DOMPurify from "dompurify";
import Question from "./Question";

export async function loadSurvey(): Promise<Survey> {
  return SurvayService.getSurvey();
}

export default function SurveyForm() {
  const survey = useLoaderData() as Survey;

  return (
    <>
      <h1 className="m-6">{survey.title}</h1>
      <div
        className="m-6"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(survey.description),
        }}
      />
      <form id="survey-form">
        {survey.questions.map((question, index) => {
          if (question.questionType === "text") {
            return (
              <Question index={index} label={question.label}>
                <input
                  className="bg-slate-50 w-full p-2 focus:outline focus:outline-1 outline-slate-400 "
                  type="text"
                  name={question.questionId}
                  required={question.required}
                />
              </Question>
            );
          } else if (question.questionType === "rating") {
            return <Question index={index} label={question.label}></Question>;
          }
        })}
      </form>
    </>
  );
}
