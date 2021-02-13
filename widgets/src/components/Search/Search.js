import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [searchField, setSearchField] = useState('');
	const [results, setResults] = useState([]);

	const onSearchChange = (event) => {
		setSearchField(event.target.value)
	};


	useEffect(() => {
		const search = async () => {
			const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					format: 'json',
					origin: '*',
					srsearch: searchField
				}
			})
			setResults(data.query.search)
		};

		const timeoutID = setTimeout(() => {
			if (searchField) {
				search()
			}
		}, 1000);

		return () => {
			clearTimeout(timeoutID)
		};
	}, [searchField]);

	const renderedResults = results.map(result => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a 
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>
				</div>
			</div>
		)
	})

	return(
		<div>
			<div className="ui action input">
				<input 
					onChange={onSearchChange} 
					type="text" 
					placeholder="Search..."
					value={searchField}
				/>
				<button className="ui icon button">
					<i className="search icon"></i>
				</button>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	)
};

export default Search;