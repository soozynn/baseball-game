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
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (value === answer.join("")) {
      setResult("Home Run!!");
      setIsOpenModal(true);
    } else {
      const answersArray = value.split("").map((val) => {
        return parseInt(val);
      });
      let strikeCount = 0;
      let ballCount = 0;

      if (tries.length >= 4) {
        setResult(`Lose.. 정답은 ${answer.join(",")}입니다.`);
        setIsOpenModal(true);
      } else {
        for (let i = 0; i < 3; i++) {
          if (answersArray[i] === answer[i]) {
            strikeCount += 1;
          } else if (answer.includes(answersArray[i])) {
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

  const restartGame = () => {
    setValue("");
    setAnswer(getNumbers());
    setTries([]);
    setResult("");
    setIsOpenModal(!isOpenModal);
  };

  return (
    <NumberBaseballContainer>
      {isOpenModal ? (
        <Modal
          result={result}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          restartGame={restartGame}
        />
      ) : null}
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
