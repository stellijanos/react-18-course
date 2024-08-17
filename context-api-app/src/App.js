import logo from './logo.svg';
import './App.css';

import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';

import {ThemeProvider} from "./context/ThemeProvider"
import ContentComponent from "./components/Content"

export default function App() {
	const userInfo = {
		username: "Admin", isAdmin: true
	};


	return (

		<ThemeProvider>
			<ContentComponent></ContentComponent>
		</ThemeProvider>

);
}

/* <UserInfoContext.Provider value={userInfo}>
		<BlogPage></BlogPage>
	</UserInfoContext.Provider> */