import React from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";

const DescriptionContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 50px;
  padding: 10px;
  border: 3px solid #ffff00;
  z-index: 100;

  &:hover {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transform: scale(1.3);
    border: none;
    cursor: pointer;

    .text {
      display: flex;

      span {
        margin: 10px;
      }
    }
  }
`;

const Title = styled.h2`
  color: #f00;
  font-size: 25px;
`;

const Text = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
  font-size: 15px;
`;

export default function GameDescription() {
  return (
    <DescriptionContainer>
      <FaQuestion color="red" size={"40px"} />
      <Text className="text" data-testid="descriptrion-text">
        <Title>HOW?</Title>
        5번의 주어진 기회 안에 1부터 9까지의 숫자 중 3자리 숫자를 맞추는
        게임입니다.
        <br />
        <span>- 3자리 숫자와 위치가 모두 맞아야 성공입니다.</span>
        <span>
          - 숫자는 1~9까지 구성되어 있으며, 각 숫자는 한번 씩만 사용 가능합니다.
        </span>
        <span>
          - 입력한 숫자에 따라 컴퓨터가 아래와 같이 Hint를 알려줍니다. <br />
          숫자와 자리의 위치가 맞으면 Strike, 숫자는 맞으나 위치가 맞지 않으면
          Ball 로 표시됩니다.
        </span>
        <span>- 일치하는 숫자가 없을 시 Nothing 으로 표시됩니다.</span>
        <span>- 5번의 기회 안에 숫자를 맞추지 못할 경우 Game over.</span>
      </Text>
    </DescriptionContainer>
  );
}
