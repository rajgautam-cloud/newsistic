import React from "react";

import NewsCard from "../NewsCard/NewsCard.component";

const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => {
        <NewsCard />;
      })}
    </div>
  );
};
export default NewsCards;
