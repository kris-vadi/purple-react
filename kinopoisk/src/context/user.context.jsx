import { createContext, useState } from 'react';

export const userInitialState = {
	name: '',
	isLogined: false
};

export const UserContext = createContext(userInitialState);

export const UserContextProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(userInitialState);

	return <UserContext.Provider value={ {currentUser, setCurrentUser} }>
		{children}
	</UserContext.Provider>;
};
