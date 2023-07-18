import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>Polls Planet</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Polls Planet is a website where you can create and participate in polls."
      />
      <meta
        name="keywords"
        content="polls, survey, surveys, poll, survey app, polls app, market research, industry research, census"
      />
    </Helmet>
  );
};

export default SEO;
