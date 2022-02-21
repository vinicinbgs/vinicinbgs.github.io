import styled from 'styled-components';

const Card = styled.div`
  height: 100%;
  width: 70%;
  padding: 0.3em 1em 1em;
  margin-bottom: 15px;
  box-shadow: 0 0 2px var(--theme-ui-colors-text);
  border-radius: 10px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;

  &:focus {
    color: inherit;
  }

  &:hover {
    color: var(--theme-ui-colors-primary);
  }
`;

const Description = styled.p`
  word-break: break-all;
`;

export { Card, Link, Description };
