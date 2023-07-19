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
