import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>Polls Planet</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/site.webmanifest" />
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
