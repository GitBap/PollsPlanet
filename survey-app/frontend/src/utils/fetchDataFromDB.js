import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

// Surveys and survey info
export const getQuestions = async (setIsLoading, setQuestions) => {
  try {
    setIsLoading(true);
    const fetchQuestions = await fetch(
      "http://localhost:3001/api/participant/ans"
    );
    const questions = await fetchQuestions.json();

    setQuestions(questions);
  } catch (err) {
    console.error(err.message);
  } finally {
    setIsLoading(false);
  }
};

export const getSurveys = async (setSurveys) => {
  try {
    const fetchQuestions = await fetch("http://localhost:3001/api/surveys");
    const questions = await fetchQuestions.json();

    setSurveys(questions);
  } catch (err) {
    console.error(err.message);
  }
};

export const postAnswers = async (userAnswers) => {
  try {
    const sendAnswers = await fetch("http://localhost:3001/api/participant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userAnswers),
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteSurvey = async (id) => {
  try {
    const deleteSurvey = await fetch(
      `http://localhost:3001/api/surveys/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

export const createSurvey = async (survey) => {
  try {
    const newSurvey = await fetch(
      "http://localhost:3001/api/surveys/new-survey",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(survey),
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

export const editSurvey = async (surveyId, newSurvey) => {
  try {
    const survey = await fetch(
      `http://localhost:3001/api/surveys/${surveyId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSurvey),
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

export const surveysCounter = async (setSurveysCount, id) => {
  try {
    const getAllSurvey = await fetch(
      "http://localhost:3001/api/surveys/countsurveys"
    );
    const surveysCount = await getAllSurvey.json();

    const surveyPerUser = surveysCount.find(
      (survey) => Number(survey.user_id) === Number(27)
    );

    setSurveysCount(surveyPerUser.survey_count);
  } catch (err) {
    console.error(err.message);
  }
};

// Admins and admin info

export const getUsers = async (setUsers) => {
  try {
    const allUsers = await fetch("http://localhost:3001/api/admin");
    const users = await allUsers.json();

    // trying to get cookie from response - something to work on later
    // const headers = allUsers.headers;
    // console.log(headers);

    // const responseHeaders = allUsers.headers;
    // console.log(responseHeaders);

    // // Display keys and values for headers
    // for (const [key, value] of headers.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    // // send cookies to the browser
    // headers.forEach((value, name) => {
    //   document.cookie = `${name}=${value};`;
    // });

    setUsers(users);
  } catch (err) {
    console.error(err.message);
  }
};

export const createUser = async (userData) => {
  try {
    const newUser = await fetch("http://localhost:3001/api/admin/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const loginUser = async (userData, setIsAuthenticated, navigate) => {
  try {
    const logUser = await fetch("http://localhost:3001/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (logUser) {
      Cookies.set("login-session", `${uuidv4()}`);
      setIsAuthenticated((prev) => !prev);
      navigate("/surveys");
    }
  } catch (err) {
    console.error(err.message);
  }
};
