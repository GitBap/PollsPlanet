DROP DATABASE IF EXISTS polls_planet;
CREATE DATABASE polls_planet;

\c polls_planet;

-- this is a first-draft of the database schema for the survey app

-- to use uuid in various tables
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
    id SERIAL PRIMARY KEY,
    -- tenant_id VARCHAR(255) NOT NULL UNIQUE, -- organization name
    name VARCHAR(255) NOT NULL,
    -- first_name VARCHAR(255) NOT NULL,
    -- middle_name VARCHAR(255),
    -- last_name VARCHAR(255) NOT NULL,
    -- user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
    -- role VARCHAR(32) NOT NULL, -- admin, participant
    -- address VARCHAR(255) NOT NULL,
    -- city VARCHAR(64) NOT NULL,
    -- state_province VARCHAR(64) NOT NULL,
    -- zip_postal VARCHAR(64) NOT NULL,
    -- country VARCHAR(64) NOT NULL,
    -- phone_number VARCHAR(64) NOT NULL,
    -- created_at TIMESTAMP NOT NULL DEFAULT NOW()
    -- CHECK (role IN ('admin', 'participant'))
    -- CHECK (IF role = 'participant' THEN user_name IS NULL ENDIF)
);

--     user sessions; something to work on later
-- DROP TABLE IF EXISTS USER_SESSIONS;
CREATE TABLE USER_SESSIONS (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) REFERENCES USERS(email),
    session_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMP NOT NULL
--     FOREIGN KEY (session_id) REFERENCES USERS(id)
);

-- DROP TABLE IF EXISTS SURVEYS;
CREATE TABLE SURVEYS (
    id SERIAL PRIMARY KEY,
    -- tenant_id VARCHAR(255) NOT NULL UNIQUE, -- organization name
    user_id INT NOT NULL,
    uuid uuid NOT NULL DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    -- description TEXT NOT NULL,
    -- category VARCHAR(255) NOT NULL, -- programming, education, etc
    -- language VARCHAR(10) NOT NULL, -- english, french
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id) REFERENCES USERS(id)
);

-- DROP TABLE IF EXISTS QUESTIONS;
CREATE TABLE QUESTIONS (
    id SERIAL PRIMARY KEY,
    -- tenant_id VARCHAR(255) NOT NULL UNIQUE,
    survey_id INT NOT NULL,
    -- question_id INT NOT NULL UNIQUE,
    question TEXT NOT NULL,
    -- type VARCHAR(255) NOT NULL, -- boolean, multiple_choice, text
    -- language VARCHAR(10) NOT NULL, -- english, french
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (survey_id) REFERENCES SURVEYS(id)
);

-- CREATE TABLE USERS_SURVEYS_LINK (
--     id SERIAL PRIMARY KEY,
--     tenant_id INT NOT NULL,
--     user_name INT NOT NULL,
--     FOREIGN KEY (tenant_id) REFERENCES SURVEYS(tenant_id),
--     FOREIGN KEY (user_name) REFERENCES USERS(user_name)
-- );

-- CREATE TABLE OFFERED_RESPONSES (
--     id SERIAL PRIMARY KEY,
--     question_id INT NOT NULL,
--     answer VARCHAR(255) NOT NULL,
--     type VARCHAR(255) NOT NULL, -- boolean, multiple_choice, integer
--     language VARCHAR(10) NOT NULL, -- english, french
--     FOREIGN KEY (question_id) REFERENCES QUESTIONS(id)
-- );

-- DROP TABLE IF EXISTS ANSWERS;
CREATE TABLE ANSWERS (
    id SERIAL PRIMARY KEY,
    -- tenant_id VARCHAR(255) NOT NULL UNIQUE, -- organization name
    survey_id INT NOT NULL,
    question_id INT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (survey_id) REFERENCES SURVEYS(id),
    FOREIGN KEY (question_id) REFERENCES QUESTIONS(id)
);


-- INSERT for users
INSERT INTO users (name, email, password)
VALUES ('Paolo', 'test@test.com', 'password');
INSERT INTO users (name, email, password)
VALUES ('Yevhen','test1@test.com', 'password1');
INSERT INTO users (name, email, password)
VALUES ('Woldy', 'test2@test.com', 'password2');
INSERT INTO users (name, email, password)
VALUES ('Olivier', 'test3@test.com', 'password3');
INSERT INTO users (name, email, password)
VALUES ('Ke','test4@test.com', 'password4');

-- INSERT for surveys
INSERT INTO surveys (user_id,title)
VALUES (2,'First Survey');
INSERT INTO surveys (user_id,title)
VALUES (2,'Second Survey');
INSERT INTO surveys (user_id,title)
VALUES (2,'Third Survey');

-- INSERT for questions
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, what is your level happiness?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how hungry are you?' );
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10,how rich are you?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how much do you like surveys?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how much do you know programming?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how much do you like studying?' );
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how likely would recommend this survey to your friend?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how thirsty are you?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how willing are you learn about programming?');
INSERT INTO questions (survey_id, question)
VALUES (1, 'On a scale of 1-10, how much do you like to eat?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'what is your level happiness?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how hungry are you?' );
INSERT INTO questions (survey_id, question)
VALUES (2, 'how rich are you?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how much do you like surveys?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how much do you know programming?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how much do you like studying?' );
INSERT INTO questions (survey_id, question)
VALUES (2, 'how likely would recommend this survey to your friend?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how thirsty are you?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how willing are you learn about programming?');
INSERT INTO questions (survey_id, question)
VALUES (2, 'how much do you like to eat?');