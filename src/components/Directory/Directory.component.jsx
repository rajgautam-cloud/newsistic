import React, { useState, useEffect, useRef } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import NewsCards from "../NewsCards/NewsCards.component";
import { useHistory } from "react-router-dom";
const alanKey = process.env.REACT_APP_ALANKEY;

const Directory = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const alanBtnInstance = useRef(null);
  const history = useHistory();
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          if (command === "newHeadlines") {
            if (window.location === "/") {
              setNewsArticles(articles);
              setActiveArticle(-1);
            } else {
              history.push("/");
              setNewsArticles(articles);
              setActiveArticle(-1);
            }
          } else if (command === "highlight") {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === "open") {
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            const article = articles[parsedNumber - 1];

            if (parsedNumber > articles.length) {
              alanBtn().playText("Please try that again...");
            } else if (article) {
              window.open(article.url, "_blank");
              alanBtn().playText("Opening...");
            } else {
              alanBtn().playText("Please try that again...");
            }
          }
        },
      });
    }
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
export default Directory;
