const serveysDB = {
  surveys: [
    {
      title: "About programm",
      questions: [
        {
          id: 1,
          description: "What your favorite language?",
          answers: ["JavaScript", "Java", "C++", "C#"],
          type: "radio",
        },
        {
          id: 2,
          description: "What your favorite language?",
          answers: ["JavaScript", "Java", "C++", "C#"],
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
      title: "About programm2",
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
