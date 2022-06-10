import React from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";

const DescriptionContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 4px;

      span {
        margin: 10px;
      }
    }
  }
`;

const Text = styled.div`
  display: none;
`;

export default function GameDescription() {
  return (
    <DescriptionContainer>
      <FaQuestion color="red" size={"40px"} />
      <Text className="text">
        5번의 주어진 기회 안에 1부터 9까지의 숫자 중 3자리 숫자를 맞추는
        게임입니다.
        <br />
        <span>1. 3자리 숫자와 위치가 모두 맞아야 성공입니다.</span>
        <span>
          2. 숫자는 1~9까지 구성되어 있으며, 각 숫자는 한번 씩만 사용
          가능합니다.
        </span>
        <span>
          3. 입력한 숫자에 따라 컴퓨터는 Hint를 알려줍니다. 숫자와 자리의 위치가
          맞으면 Strike, 숫자만 맞으면 Ball 입니다.
        </span>
        <span>4. 숫자가 하나도 맞지 않을 경우 Nothing 으로 표시됩니다.</span>
        <span>5. 5번의 기회에 숫자를 맞추지 못할 경우 게임은 지게됩니다.</span>
      </Text>
    </DescriptionContainer>
  );
}
