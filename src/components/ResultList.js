import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Result = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #e5e5e5;
  font-size: 20px;
`;

const HintText = styled.div`
  margin: 5px;
  color: #0000ff;
`;

export default function ResultList(props) {
  const { answer, result } = props;

  return (
    <Result>
      <div># Number entered: {answer}</div>
      <HintText>{result}</HintText>
    </Result>
  );
}

ResultList.propTypes = {
  answer: PropTypes.string,
  result: PropTypes.string,
};
