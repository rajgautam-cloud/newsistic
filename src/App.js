import React, { useState, useEffect } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards.component";

const alanKey =
  "6cf38ce81e77c99e2a979fc63459bfa32e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};
export default App;
