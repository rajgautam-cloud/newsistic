import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "3d3fad30ca9c981b2a979fc63459bfa32e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>News Application</h1>
    </div>
  );
};
export default App;
