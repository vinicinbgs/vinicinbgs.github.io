import styled from 'styled-components';

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px #3e31b0 solid;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  color: black;
  background-color: white;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
`;

const PreviousButton = styled(Button)`
  margin-right: 5px;
`;

const NextButton = styled(Button)`
  margin-left: 5px;
`;

export { Toolbar, PreviousButton, NextButton };
