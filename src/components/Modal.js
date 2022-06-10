import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Modal(props) {
  const { resultText, setIsOpenModal } = props;

  return (
    <ModalContainer>
      <div>{resultText}</div>
      {/* <button onClick={}>재시작</button> */}
      <button onClick={setIsOpenModal}>종료</button>
    </ModalContainer>
  );
}

Modal.propTypes = {
  resultText: PropTypes.string,
  setIsOpenModal: PropTypes.func,
};
