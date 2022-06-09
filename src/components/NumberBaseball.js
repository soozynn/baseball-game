import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import ResultList from "./ResultList";
import NumberForm from "./NumberForm";


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
  const [result, setResult] = useState("");
  const [value, setValue] = useState(undefined);
  const [answers, setAnswers] = useState([]);

  const getNumbers = () => {};

  const onSubmitForm = () => {};

  const onChangeInput = () => {};

  return (
    <NumberBaseballContainer>
      <h1>{"<Number Guessing Game>"}</h1>
      <ResultText>{result}</ResultText>
      {/* <CountNumber>{answer.length < 5 ? "남은 횟수:" 5 - answer.length : "게임 오버 !"}</CountNumber> */}
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
