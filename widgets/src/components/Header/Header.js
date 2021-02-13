import React from 'react';

const Header = ({ setRoute }) => {
	const onRouteChange = (route, e) => {
		e.preventDefault();
		//Change the url when click a element on navigation
		// but pushState isn't the state in App commponent, so it doesn't rerender the App
		window.history.pushState({}, '', route)
		// purpose to rerender
		setRoute(route)
		
	}

	return (
		<div className="ui secondary pointing menu">
			<a 
				href="/" 
				onClick={(e) => onRouteChange('/', e)} 
				className="item"
			>
				Accordion
			</a>

			<a href="/list" onClick={(e) => onRouteChange('list', e)} className="item">Search</a>
			<a href="/dropdown" onClick={(e) => onRouteChange('dropdown', e)} className="item">Dropdown</a>
			<a href="/translate" onClick={(e) => onRouteChange('translate', e)} className="item">Translate</a>
		</div>
	)
};

export default Header;