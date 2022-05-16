import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { LoginContainer } from '../styles/Admin.Styles';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import UserMessage from '../components/UserMessage';
import ButtonLoading from '../components/ButtonLoading';
import useHttp from '../hooks/useHttp';
import {NavElement} from "../styles/Container.styles";

function ResetPassword() {



	const urlParams = useParams();
	// Property id from url param object
	// const {token} = urlToken.token as UrlToken
	const { loading, setLoading, message, setMessage, sendRequest } = useHttp({
    url: `users/resetpassword/${urlParams.token}`,
    method: 'PATCH',
    withCredentials: false,
  });

  const [form, setForm] = useState({
    password: '',
    passwordConfirm: '',
  });
  const [passwordsMatch, setPasswordsMatch] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
	  setPasswordsMatch('');
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
	  if(form.password !== form.passwordConfirm) {
		  setPasswordsMatch('Passwords do not match')
		  setLoading(false);
	  }else if(form.password === form.passwordConfirm) {
     sendRequest(form);

	  }
  };
  return (
    <LoginContainer>

		<div style={{ marginTop: '3rem' }}>

			<FontAwesomeIcon style={{color: 'grey', marginBottom: '2px'}} icon={faHouse} className="icon" />
			<NavElement to="/">HOME</NavElement></div>
      <EmilandPasswordFormStyles onSubmit={handleSubmit}>
        <h1>Choose new password </h1>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={form.password}
            required
            placeholder="Enter your new password"
            id="password"
            name="password"
            type="password"
            autoComplete="on"
          />
		</div>
		  <div className="inputs">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            onChange={handleChange}
            value={form.passwordConfirm}
            required
            placeholder="Confirm your new password"
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="on"
          />
        </div>

        <p style={{height: "1rem"}}>{passwordsMatch}</p>
        <ButtonLoading loading={loading} completedActionText="SENT">
          Send
        </ButtonLoading>
        <UserMessage  isErrorMessage={message.isErrorMessage} message={message.message} showUserMessage={message.showUserMessage}/>
      </EmilandPasswordFormStyles>
    </LoginContainer>
  );
}

export default ResetPassword;
