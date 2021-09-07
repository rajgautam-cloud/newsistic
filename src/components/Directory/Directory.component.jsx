import React, { useState, useEffect, useCallback } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import NewsCards from "../NewsCards/NewsCards.component";
import { useHistory } from "react-router-dom";
const alanKey =
  "6cf38ce81e77c99e2a979fc63459bfa32e956eca572e1d8b807a3e2338fdd0dc/stage";

const COMMANDS = {
  New_Headlines: "newHeadlines",
  Highlight: "highlight",
  Open: "Open",
};

const Directory = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [alanInstance, setAlanInstance] = useState();
  const history = useHistory();

  const newHeadlines = useCallback(({ articles }) => {
    if (window.location === "/") {
      setNewsArticles(articles);
      setActiveArticle(-1);
    } else {
      history.push("/");
      setNewsArticles(articles);
      setActiveArticle(-1);
    }
  });
  const highlight = useCallback(() => {
    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
  });
  const Open = useCallback(
    ({ articles, number }) => {
      const parsedNumber =
        number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
      const article = articles[parsedNumber - 1];

      if (parsedNumber > articles.length) {
        alanInstance.playText("Please try that again...");
      } else if (article) {
        window.open(article.url, "_blank");
        alanInstance.playText("Opening...");
      } else {
        alanInstance.playText("Please try that again...");
      }
    },
    [alanInstance]
  );
  useEffect(() => {
    window.addEventListener(COMMANDS.New_Headlines, newHeadlines);
    window.addEventListener(COMMANDS.Highlight, highlight);
    window.addEventListener(COMMANDS.Open, Open);

    return () => {
      window.removeEventListener(COMMANDS.New_Headlines, newHeadlines);
      window.removeEventListener(COMMANDS.Highlight, highlight);
      window.removeEventListener(COMMANDS.Open, Open);
    };
  }, [newHeadlines, highlight, Open]);
  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          window.dispatchEvent(new CustomEvent(command, articles, number));
        },
      })
    );
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
export default Directory;
