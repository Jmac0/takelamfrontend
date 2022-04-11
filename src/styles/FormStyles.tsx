import styled from 'styled-components';
import { Cross } from '@styled-icons/entypo';
import colors from './colors';
import Logo from '../images/admin_logo.png';

interface Props {
  showPropertyForm?: boolean;
  onSubmit?: any;
  showPropertiesOrPages?: string;
}

const PropertyFormList = styled.form<Props>`
  z-index: 10;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  width: 100%;
  padding-bottom: 9rem;
  top: 0;
  left: 0;
overflow-x: hidden;
  background-color: ${colors.tan};

  h1 {
    color: ${colors.blue};
    align-self: center;
  }

   > .inputs {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 90vw;
  }
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
      font-family: 'lato', sans-serif;
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

    // the actual file input element button
    .custom-file-input::file-selector-button {
      overflow: hidden;
      display: none;
      position: absolute;
      z-index: -1;
    }

    // custom element to hide ugly button
    .custom-file-input::before {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      width: 12rem;
      content: 'select images';
      visibility: visible;
      border: 2px solid ${colors.blue};
      text-transform: uppercase;
      background: ${colors.white};
      color: ${colors.blue};
      font-weight: 300;
      font-family: sans-serif;
      letter-spacing: 0.1em;
      margin: 5px 0 0 0;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.5s;
    }
    // selected images list
    > #images.custom-file-input {
      color: ${colors.blue};
    }
    .custom-file-input:hover::before {
      background-color: ${colors.blue};
      color: ${colors.white};
    }
    .custom-file-input:active::before {
      background: ${colors.grey}
    }

    input[type='file']::file-selector-button:hover {
      background: ${colors.blue};
      color: ${colors.white};
    }

    input[type='file'] {
      left: 50%;
      outline: none;
      border: none;
      background-color: ${colors.tan};
    }

    textarea {
      padding: 5px;
      border-radius: 10px;
      flex-grow: 1;
      height: 12rem;
      min-width: 20rem;
      justify-self: center;
      resize: none;
      font-size: 1rem;
      font-family: 'lato', sans-serif;
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

const PageEditor = styled.div<Props>`
  z-index: 100;
  display: flex;
  overflow-y: visible;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  background: url(${Logo}),
  linear-gradient(to top, ${colors.blue} 100%, white 0%);
  background-blend-mode: overlay;
  background-color: ${colors.tan};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 160%;
  
  h1 {
	color: white;
  }
`;

const WYSIWYGForm = styled.form`
  
  @media screen and (min-width: 650px) {
    width: 90%;
  }
  @media screen and (min-width: 850px) {
    width: 75%;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
  }
  
`;

/* close popup icon */
const XIcon = styled(Cross)`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  margin-top: 1rem;
  color: ${colors.blue};
  width: 60px;

  &:hover {
    color: red;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  align-self: center;
  flex-direction: row;
  justify-content: start;

  margin-top: 6rem;
  @media screen and (min-width: 650px) {
	align-self: flex-start;
    margin-left: 5rem;
    margin-top: 3rem;
    justify-content: center;
  }
  @media screen and (min-width: 850px) {
    justify-content: center;
	margin-top: 1rem;
  }
  @media screen and (min-width: 1400px) {

    justify-content: center;
  }
`;

export {
  WYSIWYGForm,
  PageEditor,
  PropertyFormList,
  XIcon,
  FormButtonContainer,
};
