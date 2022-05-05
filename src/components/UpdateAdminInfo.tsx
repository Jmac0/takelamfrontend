import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { LoginContainer } from '../styles/Admin.Styles';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import ButtonLoading from './ButtonLoading';
import useHttp from '../hooks/useHttp';
import { NavElement } from '../styles/Container.styles';

function UpdateAdminInfo() {
  // Property id from url param object
  // const {token} = urlToken.token as UrlToken
  const { loading, setLoading, message, setMessage, sendRequest } = useHttp({
    url: `users/update`,
    method: 'PATCH',
    withCredentials: true,
  });
const emptyForm = {
	passwordCurrent: '',
	password: '',
	passwordConfirm: '',
	email: '',
}
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
      setPasswordsMatch('Passwords do not match');
      setLoading(false);
    } else if (form.password === form.passwordConfirm) {
  // send http request
      sendRequest(form);
	  setForm(emptyForm)
    }
  };
  return (
    <LoginContainer>
      <EmilandPasswordFormStyles onSubmit={handleSubmit}>
        <h1>Update you info</h1>
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
		  <p style={{ height: '1rem' }}>{passwordsMatch}</p>
		  <ButtonLoading loading={loading} completedActionText="SENT">
          Send
        </ButtonLoading>
        <p style={{ color: 'indianred', height: '1rem' }}>{message}</p>
      </EmilandPasswordFormStyles>
    </LoginContainer>
  );
}

export default UpdateAdminInfo;
