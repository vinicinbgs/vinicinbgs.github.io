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

const SkeletonText = styled.div`
  width: 100%;
  min-width: 100px;
  height: 0.7rem;
  margin-top: 10px;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  animation: placeholderShimmer 4s linear infinite forwards;
  background: linear-gradient(to right,
    var(--theme-ui-colors-gray-1) 0%,
    var(--theme-ui-colors-gray-2) 50%,
    var(--theme-ui-colors-gray-3) 70%,
    var(--theme-ui-colors-gray-4) 100% 
  );
  
  @keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
}
`;

export { Section, Title, PageDivided, SkeletonText };
