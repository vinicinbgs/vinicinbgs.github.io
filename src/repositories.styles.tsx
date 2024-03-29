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
  color: var(--theme-ui-colors-text);
  background-color: var(--theme-ui-colors-background);
  display: inline-flex;
  align-items: center;
  font-weight: 600;

  &:hover {
    filter: invert(0.15);
  }
`;

const PreviousButton = styled(Button)`
  margin-right: 5px;
`;

const NextButton = styled(Button)`
  margin-left: 5px;
`;

const NotFoundRepositories = styled.p`
  font-size: 28px;
  font-weight: 620;
  color: #5e5e5e;
`;

export { Toolbar, PreviousButton, NextButton, NotFoundRepositories };
