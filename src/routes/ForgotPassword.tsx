import React, { useRef } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import ButtonLoading from '../components/ButtonLoading';
import { LoginContainer } from '../styles/Admin.Styles';
import useHttp from '../hooks/useHttp';
import {NavElement} from "../styles/Container.styles";
import UserMessage from '../components/UserMessage';


function ForgotPassword() {
  // callback that receives data in useHttp hook
  const { loading, setLoading, message, setMessage, sendRequest } = useHttp(
    { url: 'users/forgotpassword', method: 'POST', withCredentials: false }
  );
  // destructure states and function from useHttp hook
  // get value of email field
  const emailField: any = useRef<HTMLInputElement>(null);
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    setLoading(true);
    sendRequest({ email });
    emailField.current.value = '';
  };
  return (
    <LoginContainer>
		<div style={{ marginTop: '3rem' }}>

			<FontAwesomeIcon style={{color: 'grey', marginBottom: '2px'}} icon={faHouse} className="icon" />
			<NavElement to="/">HOME</NavElement></div>
      <EmilandPasswordFormStyles onSubmit={handleSubmit}>
        <h1>Send reset link to email</h1>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            ref={emailField}
            required
            placeholder="Enter your email address"
            id="email"
            name="email"
            type="email"
            autoComplete="on"
          />
        </div>
        <ButtonLoading loading={loading} completedActionText="SENT">
          Send
        </ButtonLoading>
        <UserMessage showUserMessage={message.showUserMessage} isErrorMessage={message.isErrorMessage} message={message.message} />
      </EmilandPasswordFormStyles>
    </LoginContainer>
  );
}

export default ForgotPassword;
