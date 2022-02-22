import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: inherit;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  font-size: 2rem;
  color: var(--theme-ui-colors-heading);
  margin-top: 0.2rem;
  margin-bottom: 2rem;
`;

const PageDivided = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export { Section, Title, PageDivided };
