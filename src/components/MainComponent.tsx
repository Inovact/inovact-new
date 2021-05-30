// This is the component we can inport in App.tsx so that we dont have to
// set up routing in App.tsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from './Auth/Login';
import MyProfile from './Feed/MyProfile/MyProfile';
import FeedPage from '../pages/Feed';
import FollowUp from './Form/Form';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
	palette: {
	  primary:{
		main:'#020652',
	  },
	 secondary:{
		main:'#FFA500',
	  },
  
	},
  });
const MainComponent: React.FunctionComponent = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>

		<div>

			<Router>
				<Route exact path='/' component={Landing} />
				<Route path='/' component={Login} />
				<Route path="/feed" component={FeedPage}/>
				<Route path="/myprofile" component={MyProfile} />
				<Route path="/followUp" component={FollowUp}/>
			</Router>
		</div>
	
		</ThemeProvider>
	);
};

export default MainComponent;
