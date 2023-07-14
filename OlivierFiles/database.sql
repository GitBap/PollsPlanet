/* Stores info about users*/
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  fullname VARCHAR (255),
  username VARCHAR (255) UNIQUE,
  password VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
);

/* Stores info about each surveys */
CREATE TABLE Surveys ( 
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) UNIQUE,
  surveytitle VARCHAR(255) UNIQUE,
  description TEXT,
  startdate TIMESTAMP,
  enddate TIMESTAMP,
  status INT,
  
);

/* Represents each questions about the survey */
CREATE TABLE Questions (
  id SERIAL PRIMARY KEY,
  surved_id INT,
  questiontype VARCHAR(255),
  FOREIGN KEY (surveyid) REFERENCES Surveys(id)
);

/* Stores participant's answers */
CREATE TABLE Answers (
  id SERIAL PRIMARY KEY,
  question_id VARCHAR(255) UNIQUE,
  user_id VARCHAR (255),
  answer VARCHAR (255),
  FOREIGN KEY (survey_id) REFERENCES Surveys(id),
  FOREIGN KEY (question_id) REFERENCES Questions(id)
);

/* To track users */
CREATE TABLE UsersTracking (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR (255),
    token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255)
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

/* To track user's 
CREATE TABLE Responses (
  id SERIAL PRIMARY KEY,
  question_id VARCHAR(255) UNIQUE,
  user_id VARCHAR (255),
  answer VARCHAR (255),
  FOREIGN KEY (survey_id) REFERENCES Surveys(id),
  FOREIGN KEY (question_id) REFERENCES Questions(id)
);


