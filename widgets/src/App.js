import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import Translate from './components/Translate/Translate';
import Header from './components/Header/Header'

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
];

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'A Shade of Blue',
		value: 'blue'
	}
]

/*		<div>
			<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
			{showDropdown 
				? <Dropdown 
					selected={selected}
					onSelectedChange={setSelected}
					options={options} 
				/>
				: null
			}
		</div>*/

/*When we provide one jsx inside of another jsx tag, that inner element
is provided as a prop called {children}*/


const App = () => {
	const [selected, setSelected] = useState(options[0]);
	const [route, setRoute] = useState('')
	// const [showDropdown, setShowDropdown] = useState(true);
	const path = window.location.pathname
	return (
		<div>
			<Header setRoute={setRoute} />
			{
				(path==="/") ? <Accordion items={items} />
				: (path==="/list") ? <Search />
				: (path==="/dropdown") ? 
					<Dropdown
						label="Select a color"
						options={options}
						selected={selected}
						onSelectedChange={setSelected}
					/>
				: (path==="/translate") ? <Translate />
				: <h1>"Please enter correct the url"</h1>
			}
		</div>
	)
};

export default App;