import styled from 'styled-components';
import colors from 'styles/colors';
import { Cross } from '@styled-icons/entypo/';
import { Warning } from '@styled-icons/fluentui-system-filled/Warning';

interface Props {
  showPropertyForm: boolean;
  onSubmit: any;
}
const AdminContainer = styled.div`
  //position: relative;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
  margin: 0;
  /* mobile viewport bug fix */
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
  justify-content: center;
  min-height: -webkit-fill-available;

`;

const AdminMenu = styled.div`
  display: grid;
  position: relative;
  padding: 0 2rem 0 2rem;
  grid-template-areas: 
"logo nav side";
  grid-template-columns: repeat(1fr);
  align-items:center;
  border-bottom: 3px solid ${colors.tan};
  background-color: ${colors.blue};
  
  .logo {
    grid-area: logo;
    color: ${colors.tan};
  }
  
  h1{ grid-area: nav;
    color: ${colors.tan};
    transition: all 0.5s;
    &:hover {
      
      color: white;
    }
  }
  
`;
/* List in admin, an item component for each page of
 site */
const PageItem = styled.div`
  display: none;
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
  width: .7fr;
  height: 13rem;
  background-color: ${colors.blue};
  border: 5px solid ${colors.tan}
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
  height: auto;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  align-self: center;
  justify-self: center;
  padding: 1rem;
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
  top: .5rem;
  left: 1rem;
  margin-top: 1rem;
  color: ${colors.blue};
  width: 60px;

  &:hover {
    color: red;
  }
`;

const WarningIcon = styled(Warning)`
  height: 1.5rem;
  margin-right: 0.5rem;
  color: ${colors.tan};
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 0 1rem 0 1rem ;
  font-weight: 300;
  color: ${colors.blue};
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.1em;
  border-radius: 6px;
  width: auto;
  height: 40px;
  margin: 5px 0 0 0;
  border: 1px solid #d0c6b7;
  background: white;

  transition: .5s;
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
  WarningIcon,
  AdminMenu,
};
