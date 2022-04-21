import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import EmailAndPasswordForm from "../components/EmailAndPasswordForm";
import {
	AdminMenu,
	Button,
	HouseIcon,
	LoginContainer,
	PagesIcon
} from "../styles/Admin.Styles";

const handleSubmit = (evt:any): void =>  {
	alert('hello');

}

function Users() {
	const navigate = useNavigate();
	return (
		<div style={{position: 'absolute', width:"100%"}}>

			<AdminMenu>
				<Button onClick={() => navigate('/admin')}
					type="button"
				>
					{' '}
					<span>
            <HouseIcon /> Properties
          </span>
				</Button>
				<Button>
          <span>
            <PagesIcon /> Pages
          </span>
				</Button>
				<Button onClick={() => navigate('/users')} >
					Users
				</Button>
				<Button>
					Logout
				</Button>
			</AdminMenu>



<LoginContainer>
			<EmailAndPasswordForm heading="Update user"  buttonLabel='Update'  emailLabel="New email"  handleSubmit={handleSubmit}  passwordLabel="New password"/>
</LoginContainer>

		</div>
	);
}

export default Users;