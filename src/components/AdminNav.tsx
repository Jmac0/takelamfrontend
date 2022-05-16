import React from 'react';
import {useNavigate} from "react-router-dom";

import useAuth from "./auth/useAuth";
import {
	AdminMenu,
	Button,
	HouseIcon,
	PagesIcon
} from "../styles/Admin.Styles";

interface Props {

	setShowPropertiesOrPages: (_arg: string) => void;

}

// Todo fix mobile layout  
function AdminNav({setShowPropertiesOrPages }: Props) {
const navigate = useNavigate();
	const auth = useAuth();
	return (
		<AdminMenu>
			<Button
				type="button"
				onClick={() => {setShowPropertiesOrPages('properties'); navigate('/admin') }}

			>
				{' '}
				<span>
            <HouseIcon /> Properties
          </span>
			</Button>
			<Button type="button" onClick={() => { setShowPropertiesOrPages('pages'); navigate('/admin') }}>
          <span>
            <PagesIcon /> Pages
          </span>
			</Button>
			<Button onClick={() => navigate('/users/update-me')} >
				Users
			</Button>
			<Button type="button" onClick={auth.signOut}>
				Logout
			</Button>
		</AdminMenu>
	);
}

export default AdminNav;