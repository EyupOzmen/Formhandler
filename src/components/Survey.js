import React, { useEffect, useState } from "react";

import questionJSON from "../data/questions.json";
import Farewell from "./Farewell";

const Survey = () => {
  const [brand, setBrand] = useState([]);
  const [categories, setCategories] = useState([]);
  const [finished, setFinished] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    console.log("change", name, value);
    setBrand([{ name: value }]);
  };
  const handleCheckChange = (e) => {
    const { name, value } = e.target;
    console.log("change", name, value);
    let uniqueArray = [...new Set([...categories, `${name}:${value}`])];
    setCategories(uniqueArray);
  };
  console.log("brand", brand);
  console.log("categories", categories);

  const validate = () => {
    if (brand.length < 1) {
      setIsRequired(true);
      setFinished(false);
    } else {
      setIsRequired(false);
      setDisabled(false);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFinished(true);
  };
  useEffect(() => {
    validate();
  }, [handleRadioChange, handleCheckChange]);
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
                    <div
                      className={`${
                        isRequired ? "question isRequired" : "question"
                      }`}
                    >
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
                            onChange={handleRadioChange}
                          />
                          <span className="options-label">{item.Text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {question.QuestionType === "MULTIMULTI" && (
                    <div
                      className={`${
                        question.isRequired ? "question isRequired" : "question"
                      }`}
                    >
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
                            onChange={handleCheckChange}
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
              <button disabled={disabled} className="button" type="submit">
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
