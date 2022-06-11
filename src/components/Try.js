import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TryContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #e5e5e5;
  font-size: 20px;
`;

const Number = styled.span`
  margin-left: 10px;
  color: #0000ff;
`;

const HintText = styled.div`
  margin: 5px;
  color: #f00;
`;

function Try(props) {
  if (!props.tryList) {
    return null;
  }

  const { tryList } = props;
  const { value, result } = tryList;

  return (
    <TryContainer data-testid="try-number">
      <div>
        # Number entered: <Number>{value}</Number>
      </div>
      <HintText>{result}</HintText>
    </TryContainer>
  );
}

Try.propTypes = {
  tryList: PropTypes.shape({
    value: PropTypes.string,
    result: PropTypes.string,
  }),
};

export default React.memo(Try);
