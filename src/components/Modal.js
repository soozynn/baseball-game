import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  top: 63%;
  left: 67%;
  transform: translate(-50%, -50%);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  padding: 40px;

  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  font-size: 30px;
  transform: translateX(-50%) translateY(-50%);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 20px;

  &:hover {
    background-color: #87ceeb;
    border: none;
    cursor: pointer;
  }
`;

export default function Modal(props) {
  const { result, setIsOpenModal, isOpenModal, restartGame } = props;

  const handleClickCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <ModalContainer>
      <ModalBody>
        <div>{result}</div>
        <ButtonContainer>
          <Button onClick={restartGame}>Restart</Button>
          <Button onClick={handleClickCloseModal}>Close the game</Button>
        </ButtonContainer>
      </ModalBody>
    </ModalContainer>
  );
}

Modal.propTypes = {
  resultText: PropTypes.string,
  setIsOpenModal: PropTypes.func,
  isOpenModal: PropTypes.bool,
  restartGame: PropTypes.func,
};
