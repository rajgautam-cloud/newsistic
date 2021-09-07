import React, { useState } from "react";

import NewsCards from "../NewsCards/NewsCards.component";

const Directory = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
export default Directory;
