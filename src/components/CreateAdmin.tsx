import React, { useState } from 'react';
import { LoginContainer } from '../styles/Admin.Styles';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import ButtonLoading from './ButtonLoading';
import UserMessage from './UserMessage';
import useHttp from '../hooks/useHttp';
import useAuth from './auth/useAuth';

function UpdateAdminInfo() {
  const {
    user: { token },
  } = useAuth();

  const { loading, setLoading, message, setMessage, sendRequest } = useHttp({
    url: `users/create`,
    method: 'POST',
    withCredentials: true,
    token,
  });
  const emptyForm = {
    password: '',
    passwordConfirm: '',
    email: '',
  };
  const [form, setForm] = useState(emptyForm);
  const [passwordsMatch, setPasswordsMatch] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordsMatch('');
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
    if (form.password !== form.passwordConfirm) {
      // alert for user if changing passwords and new passwords don't match
      setPasswordsMatch('Passwords do not match');
      setLoading(false);
    } else if (form.password === form.passwordConfirm) {
      // send http request with callback that sets a new user in Auth
      // using the new token from the server.
      sendRequest(form);
      setForm(emptyForm);
    }
  };
  return (
    <LoginContainer>
      <EmilandPasswordFormStyles onSubmit={handleSubmit}>
        <h1>Create New Administrator</h1>
        <div className="inputs">
          <label htmlFor="confirmPassword">Email</label>
          <input
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={form.password}
            placeholder="Create password"
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
            placeholder="Confirm password"
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="on"
          />
        </div>
        <ButtonLoading loading={loading} completedActionText="SENT">
          Send
        </ButtonLoading>
        <p style={{ height: '.5rem' }}>{passwordsMatch}</p>
        <UserMessage
          isErrorMessage={message.isErrorMessage}
          message={message.message}
          showUserMessage={message.showUserMessage}
        />
      </EmilandPasswordFormStyles>
    </LoginContainer>
  );
}

export default UpdateAdminInfo;
