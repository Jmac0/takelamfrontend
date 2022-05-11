import React from 'react';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import ButtonLoading from './ButtonLoading';
import useAuth from './auth/useAuth';
import { NavElementDark } from '../styles/Container.styles';
import UserMessage from "./UserMessage";

interface FormProps {
  heading: string;
  emailLabel: string;
  passwordLabel: string;
  buttonLabel: string;
  handleSubmit: (_evt: React.FormEvent<HTMLFormElement>) => void;
}

function EmailAndPasswordForm({
  heading,
  emailLabel,
  passwordLabel,
  buttonLabel,
  handleSubmit,
}: FormProps) {
  const auth = useAuth();
  return (
    <EmilandPasswordFormStyles onSubmit={handleSubmit}>
      <h1>{heading}</h1>
      <div className="inputs">
        <label htmlFor="email">{emailLabel}</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          autoComplete="on"
        />
      </div>
      <div className="inputs">
        <label htmlFor="password">{passwordLabel}</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          autoComplete="on"
        />
      </div>
      <ButtonLoading loading={auth.loading} completedActionText="LOGIN">
        {buttonLabel}
      </ButtonLoading>
      <UserMessage showUserMessage={auth.loginError.showUserMessage} isErrorMessage={auth.loginError.showUserMessage} message={auth.loginError.message}/>
{/*
      <p style={{ color: 'indianred' }}>Message</p>
*/}
      <NavElementDark to="/admin/reset">Forgot password</NavElementDark>
    </EmilandPasswordFormStyles>
  );
}

export default EmailAndPasswordForm;
