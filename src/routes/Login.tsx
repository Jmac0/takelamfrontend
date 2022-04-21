import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EmilandPasswordFormStyles } from '../styles/FormStyles';
import { LoginContainer } from '../styles/Admin.Styles';
import useAuth from '../components/auth/useAuth';
import EmailAndPasswordForm from "../components/EmailAndPasswordForm";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  console.log(auth)
  // @ts-ignore
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    auth.signIn(email, password, () => {
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
    <LoginContainer >
		<EmailAndPasswordForm heading="Login"  buttonLabel='Login'  emailLabel="Email"  handleSubmit={handleSubmit}  passwordLabel="Password"/>

	</LoginContainer>
  );
}

export default Login;
