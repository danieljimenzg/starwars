import React, { Component } from 'react';
import CardList from '../components/CardList';
import { starwars } from '../starwars';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			starwars: starwars,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { starwars, searchfield } = this.state;
		const filteredStarwars = starwars.filter(character =>{
			return character.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<video autoPlay loop muted id='bgvideo'>
					<source src='https://giant.gfycat.com/SpicyNeedyFantail.mp4' type='video/mp4'></source>
				</video>
				<h1 className='f1'>StarWars</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll id='scroll'>
					<CardList starwars={filteredStarwars}/>
				</Scroll>
			</div>
		);
	}
}

export default App;