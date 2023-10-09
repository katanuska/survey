import { useLoaderData } from "react-router-dom";
import { Survey } from "./survey.model";
import * as SurvayService from "./survey.service";
import DOMPurify from "dompurify";

export async function loadSurvey(): Promise<Survey> {
  return SurvayService.getSurvey();
}

export default function SurveyForm() {
  const survey = useLoaderData() as Survey;

  return (
    <>
      <h1>{survey.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(survey.description),
        }}
      />
      <form id="survey-form">
        <input></input>
      </form>
    </>
  );
}
