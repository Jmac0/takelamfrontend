import React, { useEffect } from 'react';
import {useLocation, Navigate, useNavigate} from "react-router-dom";
import useAuth from "./useAuth";

function RequireAuth({ children }: { children: any }) {
	const auth = useAuth();
	const location = useLocation();
const nav = useNavigate()
	if (!auth.user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{from: location}} replace/>;
	}
/*
useEffect(() => {

	nav('/login')
}, [auth.user])

	}
*/

	return children;
}

export default RequireAuth