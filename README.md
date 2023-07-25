# PollsPlanet

<img src="./documentation/logo1.svg" alt="PollsPlanet" align="right" width="100%" height="100%">

PollsPlanet is an evolving web application empowering organizations to design and distribute surveys to enable data-driven decision-making. In its current incarnation, the platform allows the creation of multiple choice questions, distributing them via email, and visualizing the results in real time.

There are two distinct types of users within the platform: admins and participants. Admin users have the ability to create surveys and view the compiled data. Participant users, on the other hand, can only access and respond to the surveys they have been invited to via a unique link or token.

In future versions, we aim to enhance the admin's ability to interact with the data, including robust export options for detailed analysis.

Additionally, we envision expanding PollsPlanet beyond the confines of multiple-choice responses. Our goal is to integrate more complex input types like text and to continue refining data analysis capabilities. We also aim to make the platform appealing for casual users seeking to make group decisions or connect with their communities in a fun and interactive way.

Experience the current iteration of PollsPlanet by visiting [our website](https://somewhere.com).

## Installation (local development)

### Backend

#### Database Setup

Once logged in to psql shell, enter this command:

```SQL
\i <abs_path_to_database.sql_file>
```

This will run the `database.sql` script and create the database and tables.

#### Server Setup

```bash
cd PollsPlanet/survey-app/backend
npm install
npm run dev
```

this will start the backend server on `localhost:3001` with (inspect) nodemon

API documentation can be found [here](./survey-app/backend/openAPI.yml) \
Paste the contents of the file into [Swagger Editor](https://editor.swagger.io/) to view the documentation.

### Frontend

```bash
cd PollsPlanet/survey-app/frontend
npm install
npm run start
```

this will start the React-app on `localhost:3000`

## Goals and Mission

Our mission is to create a versatile platform that facilitates informed decision-making at different scales, from shaping organizational strategies to planning group outings. We are committed to developing PollsPlanet into an invaluable tool for gathering, analyzing, and acting upon collective insights.

## Ethical Considerations

At PollsPlanet, we uphold the highest ethical standards. User privacy and data confidentiality are at the heart of our operations. The unique links or tokens distributed to participant users only grant access to specific surveys and cannot be traced back to individuals. As we move forward in enhancing the functionality of our platform, our commitment to these principles remains unwavering.

## Founding Team

Our project was initiated and brought to life by the following individuals:

[Yevhen Khreptun](https://github.com/khreptunyevhen) \
[Woldy Jean](https://github.com/woldyj) \
[Ke Qi](https://github.com/Shellaqi) \
[Olivier Baptiste](https://github.com/GitBap) \
[Paolo Junior Angeloni](https://github.com/PaoloJr90)

They contributed their time, effort, and expertise to lay the foundation for what PollsPlanet has become and what it will evolve into in the future.

### Contributing

PollsPlanet is the result of a dedicated team working hard as part of a Full Stack Development Capstone project. As we continue to evolve and refine the platform, we are excited about the prospect of welcoming external contributors who share our passion and vision.

Once we reach a certain stage of development, we'll be opening up for contributions from the developer community. If you're a developer who is passionate about data-driven decision-making, enhancing communication, and building inclusive communities, we'd love to hear from you.

If you're interested in contributing, here are some ways you can do so:

- **Bug reporting**: If you've discovered a bug on PollsPlanet, let us know! Open an issue on our GitHub repository explaining the problem and we'll look into it.

- **Feature suggestions**: Have an idea that could make PollsPlanet even better? We're all ears! Feel free to open an issue on our GitHub repository describing your feature suggestion.

- **Code contributions**: Once we open up for external contributions, you'll be able to directly contribute to our codebase. Stay tuned for more information on how to get involved.

As we work towards opening up PollsPlanet for contributions, we encourage potential collaborators to familiarize themselves with our mission, goals, and ethical considerations. We believe that a shared understanding of these principles will foster a collaborative and productive community.

Together, we can make PollsPlanet the go-to platform for informed decision-making, community engagement, and more...
