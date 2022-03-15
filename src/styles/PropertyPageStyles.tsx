import styled from 'styled-components';
import colors from './colors';

const PropertyList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  flex-direction: row;
  width: 1fr;

  // price
  & > div {


    &:nth-child(1) {
      grid-column: 1/3;
      width: 100%;
    }
    
    &:nth-child(2) {
      grid-column: 1/3;
      font-size: 1.5rem;
      width: 100%;
      border-bottom: 1px solid;
    }
// ownership 
    &:nth-child(7) {
      margin-top: 2rem;
      grid-column: 1/3;
      width: 100%;
      padding-bottom: 1rem;
      border-bottom: 1px solid;
    }
    // description
    &:nth-child(8) {
      grid-column: 1/3;
      width: 100%;
      padding-bottom: 1rem;
      border-bottom: 1px solid;
    }
    margin: 1.2rem 0 0 0;
    width: 100%;
    color: ${colors.grey};
  }
`;

const something = styled.div``;

export { PropertyList, something };
