import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 300px;
  height: 42px;
  background-color: tomato;
  border: 3px solid black;
  border-radius: 5px;
  text-align: center;
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

  &:hover {
    background-color: #0096ff;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }
`;

export default function NumberForm(props) {
  const { onSubmitForm, onChangeInput, value } = props;

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        name="number"
        maxLength={3}
        placeholder="3자리 숫자를 입력해주세요"
        value={value}
        onChange={onChangeInput}
      />
      <SubmitButton
        type="submit"
        onClick={onSubmitForm}
        disabled={value.length === 3 ? false : true}
      >
        Send
      </SubmitButton>
    </Form>
  );
}

NumberForm.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangeInput: PropTypes.func,
  value: PropTypes.string,
};
