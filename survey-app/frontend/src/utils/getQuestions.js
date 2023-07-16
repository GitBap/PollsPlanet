export const getQuestions = async (setIsLoading, setQuestions) => {
  try {
    setIsLoading(true);
    const fetchQuestions = await fetch("http://localhost:3001/participant");

    const questions = await fetchQuestions.json();

    setQuestions(questions);
  } catch (err) {
    console.error(err.message);
  } finally {
    setIsLoading(false);
  }
};
