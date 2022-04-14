import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from '../styles/FormStyles';
import { LoginContainer } from '../styles/Admin.Styles';
import ButtonLoading from '../components/ButtonLoading';
import useAuth from '../components/auth/useAuth';

/*
function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();

	// @ts-ignore
	const from = location.state?.from?.pathname || '/';
	console.log(from)

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get('username') as string;

		auth.signIn(username, () => {
			// Send them back to the page they tried to visit when they were
			// redirected to the login page. Use { replace: true } so we don't create
			// another entry in the history stack for the login page.  This means that
			// when they get to the protected page and click the back button, they
			// won't end up back on the login page, which is also really nice for the
			// user experience.
			navigate(from, { replace: true });
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Username: <input name="username" type="text" />
				</label>{' '}
				<button type="submit">Login</button>
			</form>
		</div>
	);
}


*/









function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  // @ts-ignore
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    auth.signIn(email, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            autoComplete="on"
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            autoComplete="on"
          />
        </div>
        <ButtonLoading loading={!false} completedActionText="OK">
          LOGIN
        </ButtonLoading>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
