import React from 'react';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './Components/preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized)
			return <Preloader />
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/dialogs" element={<DialogsContainer />} />
						<Route path="/profile/:userId" element={<ProfileContainer />} />
						<Route path="/profile/*" element={<ProfileContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		);
	}
};
let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
let AppContainer = connect(mapStateToProps, { initializeApp })(App)

const SamuraiJSApp = (props) => {
	return <React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
}
export default SamuraiJSApp;
