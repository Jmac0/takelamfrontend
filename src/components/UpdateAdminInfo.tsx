import React, { useState } from 'react';
import { LoginContainer } from '../styles/Admin.Styles';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import ButtonLoading from './ButtonLoading';
import UserMessage from './UserMessage';
import useHttp from '../hooks/useHttp';
import useAuth from './auth/useAuth';

function UpdateAdminInfo() {
  const {
    user: { token }
  } = useAuth();

  const {setUser} = useAuth();
  const { loading, setLoading, message, setMessage, sendRequest } = useHttp({
    url: `users/update`,
    method: 'PATCH',
    withCredentials: true,
    token,
  });
  const emptyForm = {
    passwordCurrent: '',
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
      sendRequest(form, (data: any) => {
        // create new user object
        const user = {email: data.email, password: '', token:data.token};
        // set new token in local storage
        localStorage.setItem('_Tuser', JSON.stringify(data.token));
        // log user back in
        setUser(user)


      });
      setForm(emptyForm);
    }
  };
  return (
    <LoginContainer>
      <EmilandPasswordFormStyles onSubmit={handleSubmit}>
        <h1>Update your info</h1>
        <div className="inputs">
          <label htmlFor="passwordCurrent">Current Password</label>
          <input
            onChange={handleChange}
            value={form.passwordCurrent}
            required
            placeholder="Enter your password to make changes"
            id="passwordCurrent"
            name="passwordCurrent"
            type="password"
            autoComplete="on"
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">New Password</label>
          <input
            onChange={handleChange}
            value={form.password}
            placeholder="Enter your new password"
            id="password"
            name="password"
            type="password"
            autoComplete="on"
          />
        </div>
        <div className="inputs">
          <label htmlFor="confirmPassword">Confirm new password</label>
          <input
            onChange={handleChange}
            value={form.passwordConfirm}
            placeholder="Confirm your new password"
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="on"
          />
        </div>
        <div className="inputs">
          <label htmlFor="confirmPassword">Update email</label>
          <input
            onChange={handleChange}
            value={form.email}
            placeholder="Change your email"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
          />
        </div>
        <ButtonLoading loading={loading} completedActionText="SENT">
          Send
        </ButtonLoading>
        <p style={{ height: '.5rem' }}>{passwordsMatch}</p>
        <UserMessage  isErrorMessage={message.isErrorMessage} message={message.message} showUserMessage={message.showUserMessage}/>
      </EmilandPasswordFormStyles>
    </LoginContainer>
  );
}

export default UpdateAdminInfo;
