import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	faHouse,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { LoginContainer } from '../styles/Admin.Styles';
import useAuth from '../components/auth/useAuth';
import EmailAndPasswordForm from "../components/EmailAndPasswordForm";
import {NavElement} from "../styles/Container.styles";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  useEffect(() => {
	  auth.setLoginError('')
  },[])

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
		<div style={{ marginTop: '3rem' }}>

			<FontAwesomeIcon style={{color: 'grey', marginBottom: '2px'}} icon={faHouse} className="icon" />
			<NavElement to="/">HOME</NavElement></div>
		<EmailAndPasswordForm heading="Login"  buttonLabel='Login'  emailLabel="Email"  handleSubmit={handleSubmit}  passwordLabel="Password"/>

	</LoginContainer>
  );
}

export default Login;