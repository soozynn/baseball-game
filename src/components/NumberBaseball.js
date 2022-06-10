import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import ResultList from "./Try";
import NumberForm from "./NumberForm";
import Modal from "./Modal";

const NumberBaseballContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TryCount = styled.h2`
  display: inline-block;
  color: #f00;
  font-size: 50px;
  font-family: "Acme", sans-serif;
`;

const ResultListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 50%;
  padding-right: 35px;
  background-color: #00a36c;
  border: 3px solid #cd7f32;
  list-style: none;
`;

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumberArr = [];

  for (let i = 0; i < 3; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    randomNumberArr.push(chosen);
  }

  return randomNumberArr;
}

export default function NumberBaseball() {
  const [value, setValue] = useState("");
  const [answers, setAnswers] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (value === answers.join("")) {
      setValue("");
      setAnswers(getNumbers());
      setTries([]);

      // return <Modal resultText={"Home run!!} setIsOpenModal={setIsOpenModal} />
    } else {
      const answersArray = value.split("").map((answer) => {
        return parseInt(answer);
      });
      let strikeCount = 0;
      let ballCount = 0;

      if (tries.length >= 4) {
        setValue("");
        setAnswers(getNumbers());
        setTries([]);
        // return <Modal resultText={`5번 넘게 틀려서 실패! 답은 ${answers.join(",")}이었습니다!`} setIsOpenModal={setIsOpenModal} />;
      } else {
        for (let i = 0; i < 4; i++) {
          if (answersArray[i] === answers[i]) {
            strikeCount += 1;
          } else if (answers.includes(answersArray[i])) {
            ballCount += 1;
          }
        }

        setTries((prev) => {
          return [
            ...prev,
            {
              value,
              result: `${strikeCount} Strike, ${ballCount} Ball`,
            },
          ];
        });
        setValue("");
      }
    }
  };

  const onChangeInput = (event) => {
    const { value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");

    setValue(onlyNumber);
  };

  return (
    <NumberBaseballContainer>
      {isOpenModal ? <Modal /> : null}
      <h1>{"<Number Guessing Game>"}</h1>
      <TryCount>{`Life: ${5 - tries.length}`}</TryCount>
      <NumberForm
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
        value={value}
      />
      <ResultListContainer>
        {tries.map((tryList) => {
          return <ResultList key={uuidv4()} tryList={tryList} />;
        })}
      </ResultListContainer>
    </NumberBaseballContainer>
  );
}
