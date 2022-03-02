import styled from 'styled-components';
import colors from 'styles/colors';

const AdminContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100%;
  background-color: gainsboro;
`;

const PageItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin: 3rem;
  padding: 0;
  width: 200px;
  height: 50px;
  background-color: ${colors.blue};
  border: 5px solid ${colors.tan};
`;

const EditButton = styled.button`
  width: 30%;
  margin: 1rem;
  border: none;
  border-radius: 10rem;
  color: white;
  text-align: center;
  text-decoration: none;
  height: 1rem;
  background-color: ${colors.tan};
  
  &:hover{
    background-color: black;
  }
`;

export { AdminContainer, PageItem, EditButton };
