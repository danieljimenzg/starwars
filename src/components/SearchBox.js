import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input
				className='pa3 yellow ba b--yellow bg-transparent'
				type='search'
				placeholder='Search a character!'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;