import React, { useState } from "react";

import questionJSON from "../data/questions.json";
import Farewell from "./Farewell";

const Survey = () => {
  const [finished, setFinished] = useState(false);

  const handleSubmit = () => {
    setFinished(true);
  };
  return (
    <div>
      {finished ? (
        <Farewell />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="survey-container">
            {questionJSON.map((question) => {
              return (
                <div key={question.ID} className="question-container">
                  {question.QuestionType === "MULTISINGLE" && (
                    <div className="question">
                      <p className="question-header">{question.Question}</p>
                      {question.Options.map((item) => (
                        <div
                          key={`${question.ID} ${item.ID}`}
                          className="options"
                        >
                          <input
                            id={item.Text}
                            type="radio"
                            name={question.ID}
                            value={item.ID}
                          />
                          <span className="options-label">{item.Text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {question.QuestionType === "MULTIMULTI" && (
                    <div className="question">
                      <p className="question-header">{question.Question}</p>
                      {question.Options.map((item) => (
                        <div
                          key={`${question.ID} ${item.ID}`}
                          className="options"
                        >
                          <input
                            id={item.Text}
                            type="checkbox"
                            name={question.ID}
                            value={item.ID}
                          />
                          <span className="options-label">{item.Text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="question-container">
              <button className="button" type="submit">
                Onayla
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default Survey;
