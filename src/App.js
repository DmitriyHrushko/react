import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { initializeApp } from './redux/app-reducer.ts';
import { connect } from 'react-redux';
import Preloader from './Components/preloader/Preloader';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


//import DialogsContainer from './Components/Dialogs/DialogsContainer';

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
export default connect(mapStateToProps, { initializeApp })(App)

