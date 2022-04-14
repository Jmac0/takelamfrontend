import React from "react";

interface VoidFunction {
	(): void;
}
interface AuthContextType {
	user: any;
	signIn: (_user: string, _callback: VoidFunction) => void;
	signOut: (_callback: VoidFunction) => void;
}


const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext