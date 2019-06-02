import React from 'react';
import './css/SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
	<form>
		<div className='pa2'>
		  <input
			className='search'
			type='search'
			placeholder='Search for GIFs...'
			onChange={searchChange}
		  />
		<button type="submit" id="submit" onClick={searchChange} className='dark-gray pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1' >
			  Search
		</button>
		</div>
    </form>
  );
}

export default SearchBox;