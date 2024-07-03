import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  width: 32%;
  padding: 0.3em 1em 1em;
  margin-bottom: 15px;
  box-shadow: 0 0 2px var(--ifm-color-primary-dark);
  border-radius: 10px;
  word-wrap: break-word;
  max-height: 130px;
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
    color: var(--ifm-color-primary-lightest);
  }
`;

const Description = styled.p`
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    font-size: 0%.8;
  }

  font-size: 0.8em;
`;

const Title = styled.h4`
  font-weight: bold;
  margin-top: 5px;
  font-size: 14px;
  text-decoration: underline;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

type CardHeaderProps = {
  backgroundColor?: string;
};

const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  justify-content: space-between;
  color: var(--ifm-color-primary);
`;

export { Card, Link, Description, Title, CardHeader };
