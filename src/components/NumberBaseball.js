import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import ResultList from "./ResultList";
import NumberForm from "./NumberForm";
import Modal from "./Modal";

const NumberBaseballContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled.h2`
  display: inline-block;
  font-size: 50px;
  font-family: "Acme", sans-serif;
`;

const ResultListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 50%;
  background-color: #00a36c;
  border: 3px solid #cd7f32;
  list-style: none;
`;

// const CountNumber = styled.div``;

export default function NumberBaseball() {
  const [result, setResult] = useState("Hint");
  const [value, setValue] = useState("");
  const [answers, setAnswers] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const getNumbers = () => {
    const candidateNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumberArr = [];

    for (let i = 0; i < 3; i++) {
      const chosenNumber = candidateNumbers.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      randomNumberArr.push(chosenNumber);
    }

    return randomNumberArr;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const onSubmitForm = (event) => {
      event.preventDefault();

      if (value === answers.join("")) {
        setResult("Home run!!");
        setTries((prev) => {
          return [...prev, { try: value, result: "Home run!!" }];
        });
        setValue("");
        setAnswers(getNumbers());
        setTries([]);

        // return <Modal />
      } else {
      }
    };
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <NumberBaseballContainer>
      <h1>{"<Number Guessing Game>"}</h1>
      <ResultText>{result}</ResultText>
      {/* <Chance>{answer.length < 5 ? "남은 횟수:" 5 - answer.length : "게임 오버 !"}</Chance> */}
      <NumberForm
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
        value={value}
      />
      <ResultListContainer>
        {answers.map((answer) => {
          return <ResultList key={uuidv4()} result={result} answer={answer} />;
        })}
      </ResultListContainer>
    </NumberBaseballContainer>
  );
}
