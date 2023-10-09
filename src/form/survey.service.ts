import { ApiResponse } from "../apiResponse.model";
import { Survey } from "./survey.model";

export async function getSurvey(): Promise<Survey> {
  const response = await fetch("/api/v1/survey");
  const responseJson = await response.json();
  const surveyApiResponse: ApiResponse<Survey> = responseJson.data;
  return surveyApiResponse.attributes;
}
