import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Convert = ({language, text}) => {
	const [translated, setTranslated] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	/*We discourage use this useEffect because sometimes 2 element [language, text] 
	update at the same time, causing fetch data api twice in the sametime
	
	useEffect(() => {
		const doTranslation = async () => {
			const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
				params: {
					q: text,
					target: language.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
				}
			}); 
			setTranslated(data.data.translations[0].translatedText)
		}
		const timeoutID = setTimeout(() => {
			doTranslation()
		}, 800)
		
		return () => {
			clearTimeout(timeoutID)
		};

	}, [language, text])*/


	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 800)

		return () => {
			clearTimeout(timerId);
		}

	}, [text])

	/*useEffect(() => {
		const doTranslation = async () => {
			const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
				params: {
					q: debouncedText,
					target: language.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
				}
			});
			setTranslated(data.data.translations[0].translatedText)
		}

		doTranslation();
	}, [language, debouncedText])*/

	useEffect(() => {
		fetch('https://git.heroku.com/widget-server.git', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				text: debouncedText,
				language: language.value
			})
		})
		.then(response => response.json())
		.then(({translation}) => setTranslated(translation))

	}, [language, debouncedText])



	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	)
};

export default Convert;