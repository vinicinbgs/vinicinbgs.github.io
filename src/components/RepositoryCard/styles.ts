import styled from 'styled-components';

const Card = styled.div`
  height: 100%;
  width: 32%;
  padding: 0.3em 1em 1em;
  margin-bottom: 15px;
  box-shadow: 0 0 2px var(--theme-ui-colors-text);
  border-radius: 10px;
  word-wrap: break-word;
  height: 200px;
  overflow: auto;

  @media (max-width: 800px) {
    display: block;
    width: 48%;
    font-size: 13px;
    height: 150px;
    padding: 0 10px 10px 10px;
  }
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
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    font-size: 1em;
  }
`;

const Title = styled.h4`
  font-weight: bold;
  margin-top: 10px;
  font-size: 19px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const CardHeader = styled.div`
  background-color: var(--theme-ui-colors-secondary);
  color: white;
  border-radius: 2px;
`;

export { Card, Link, Description, Title, CardHeader };
