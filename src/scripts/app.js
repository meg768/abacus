import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, hashHistory, Router, Route} from 'react-router';


require('../less/styles.less');

export class App extends React.Component {

  render() {
    return (
		<div className='app'>
			{this.props.children}
    	</div>
    );
  }
};


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={require('../pages/home/home.js')} />
			<Route path="home"          component={require('../pages/home/home.js')} />
			<Route path="about"         component={require('../pages/about/about.js')} />
		</Route>
	</Router>
), document.getElementById('app'))
