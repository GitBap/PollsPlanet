export const serveysDB = {
  surveys: [
    {
      id: 1,
      title: "About #1",
      questions: [
        {
          id: 1,
          description: "What your favorite language?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 2,
          description: "What your favorite language to speak?",
          answers: ["English", "Franch", "Ukrainian"],
          type: "radio",
        },
        {
          id: 3,
          description: "What your favorite language?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 4,
          description: "What your favorite language?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
      ],
    },
    {
      id: 2,
      title: "About #2",
      questions: [
        {
          id: 1,
          description: "What your favorite language2?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 2,
          description: "What your favorite language2?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 3,
          description: "What your favorite language2?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 4,
          description: "What your favorite language2?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
      ],
    },
  ],
};

console.log(serveysDB.surveys[1].questions[0]);
