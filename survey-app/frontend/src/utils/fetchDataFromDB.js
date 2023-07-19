// Surveys and survey info
export const getQuestions = async (setIsLoading, setQuestions) => {
  try {
    setIsLoading(true);
    const fetchQuestions = await fetch("http://localhost:3001/api/participant");
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

// Users and user info

export const getUsers = async (setUsers) => {
  try {
    const allUsers = await fetch("http://localhost:3001/api/users");
    const users = await allUsers.json();

    setUsers(users);
  } catch (err) {
    console.error(err.message);
  }
};
