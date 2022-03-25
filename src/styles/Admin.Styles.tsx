import styled from 'styled-components';
import colors from 'styles/colors';
import { Cross } from '@styled-icons/entypo/';

interface Props {
  showPropertyForm: boolean;
}
const AdminContainer = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
`;
/* List in admin, an item component for each page of
 site */
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
/* List item in admin, for each property in the DB */
const PropertyItem = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 1rem;
  width: 20rem;
  height: 13rem;
  background-color: ${colors.blue};
  border: 5px solid ${colors.tan};

  h1 {
    color: white;
  }
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

  &:hover {
    background-color: black;
  }
`;

const PropertyFormList = styled.form<Props>`
  z-index: 10;
  display: ${(props) => (props.showPropertyForm ? 'flex' : 'none')};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 30px;
  border: 5px solid ${colors.blue};
  height: auto;
  width: 80vw;
  position: absolute;
  top: 0;
  left: 0;
  align-self: center;
  justify-self: center;
  padding: 3rem;
  background-color: ${colors.tan};

  h1 {
    color: ${colors.blue};
    align-self: center;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 80vw;

    label {
      font-weight: 300;
      color: ${colors.blue};
      font-size: 1.2rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      min-width: 120px;
      justify-self: end;
      padding-right: 30px;
    }
    input {
      padding: 5px;
      width: 25rem;
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      height: 2.5rem;
      max-width: 90%;
      justify-self: center;
    }

    input:active,
    input:focus {
      outline: none;
      border: 2px solid ${colors.blue};
      border-radius: 6px;
      background-color: #f3f3f1;
    }
    /*Styles for image upload button*/
    input[type='file']::file-selector-button {
      width: 10rem;
      text-transform: uppercase;
      font-weight: 300;
      color: ${colors.blue};
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      border-radius: 6px;
      height: 40px;
      border: 1px solid #d0c6b7;
      background: white;
      transition: 0.5s;
    }

    input[type='file']::file-selector-button:hover {
      background: ${colors.blue};
      color: ${colors.white};
    }

    textarea {
      padding: 5px;
      border-radius: 10px;
      flex-grow: 1;
      height: 12rem;
      min-width: 20rem;
      max-width: 90%;
      justify-self: center;
      resize: none;
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
    }

    textarea:focus,
    textarea:active {
      outline: none;
      background-color: #f3f3f1;
      border: 2px solid ${colors.blue};
    }
  }
`;
/* close popup icon */
const XIcon = styled(Cross)`
  position: absolute;
  top: 1.5rem;
  left: 3rem;
  margin-top: 1rem;
  color: ${colors.blue};
  width: 60px;

  &:hover {
    color: red;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.blue};
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.1em;
  border-radius: 6px;
  width: 100px;
  height: 40px;
  margin: 5px 0 0 0;
  border: 1px solid #d0c6b7;
  background: white;

  transition: 1s;
  &:hover {
    background: ${colors.blue};
    color: ${colors.white};
  }

  &:disabled {
    background-color: gray;
    color: lightgrey;
  }
`;
export {
  AdminContainer,
  PageItem,
  EditButton,
  PropertyFormList,
  Button,
  XIcon,
  PropertyItem,
};
