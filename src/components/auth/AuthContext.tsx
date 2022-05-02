import React from "react";

interface VoidFunction {
	(): void;
}
interface AuthContextType {
	loading: boolean;
	user: string;
	password: string,
	email: string;
	signIn: (
		_password: string, _email: string,
		_callback: VoidFunction
	) => void;
	signOut: (_callback: VoidFunction) => void;
	loginError: string
	setLoginError: (_arg: string) => void;
}


const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext