import React, { useState } from "react";
import styled from "styled-components";

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

const NumberForm = styled.form`
  display: flex;
`;

const NumberInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: tomato;
  border: 3px solid black;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: gold;
  border: 3px solid black;
  border-radius: 5px;
  font-family: "Acme", sans-serif;
  font-size: 20px;
  cursor: pointer;
`;

export default function NumberBaseball() {
  const [result, setResult] = useState("Hint");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");

  const getNumbers = () => {};
  const onSubmitForm = () => {};
  const onChangeInput = () => {};

  return (
    <NumberBaseballContainer>
      <h1>{"<Number Guessing Game>"}</h1>
      <ResultText>{result}</ResultText>

      <NumberForm onSubmit={onSubmitForm}>
        <NumberInput
          type="submit"
          name="number"
          maxLength={3}
          placeholder="3자리 숫자를 입력해주세요"
          value={value}
          onChange={onChangeInput}
        />
        <SubmitButton type="submit" onClick={onSubmitForm}>
          Send
        </SubmitButton>
      </NumberForm>
    </NumberBaseballContainer>
  );
}
