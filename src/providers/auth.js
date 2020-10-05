import React, { useState, useEffect } from 'react'
import Axios from "axios";

export const AuthContext = React.createContext({})

export default function Auth({ children }) {

	const [user, setUser] = useState(null)
	const [isLoading, setisLoading] = useState(true)

	useEffect(() => {

			let storagedUser = localStorage.getItem('user');
			const storagedToken = localStorage.getItem('jwtToken');
			

			if(storagedToken){					
				setUser(JSON.parse(storagedUser));
			}else{
				setUser(null)
			}

			setisLoading(false); 


	}, [setisLoading]);

	function logout(){

			setUser(null);
			localStorage.removeItem('user', null)
			localStorage.removeItem('jwtToken', null)
	}

	function login({user, token}){
			setUser(user);
			
			localStorage.setItem('user', JSON.stringify(user))
			localStorage.setItem('jwtToken', token)
	}

	return (
			<AuthContext.Provider value={{ isAuthenticated: Boolean(user), user, isLoading, login, logout }}>
					{children}
			</AuthContext.Provider>
	)
}