import React from 'react';
import './SearchPage.css';
import Button from '@material-ui/core/Button';


function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p> 62 days - 26 August to 30 august - 2 quest</p>
				<h1> Stays Nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of Place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and Beds</Button>
				<Button variant="outlined">More Filters</Button>
			</div>
		</div>
	);
}

export default SearchPage;
