import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      searchfield: 'cats',
	  limit: 24
    }
  }

  componentDidMount() {

	this.fetchGifs();
	
  }

  onSearchChange = (event) => {
	  
    this.setState({ searchfield: event.target.value } , () => {
		this.fetchGifs();
	});

	event.preventDefault();
  }
  
  async fetchGifs()
  {

	if(this.state.searchfield !== undefined && this.state.searchfield !== null && this.state.searchfield !== '')	
	{
		try{
			const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=<api_key>&q=${this.state.searchfield}&limit=${this.state.limit}`);
			const fetchedGifs = await response.json();
			this.setState(() => ({ gifs: fetchedGifs.data })); 
		}catch(e)
		{
			console.error(e);
		}
	}
  }

  render() {
    const { gifs } = this.state;
    return !gifs.length ?
	  (
        <div className='tc'>
			<header className='header'>
			  <h1 className='f1'>Go-GIFted</h1>
			  <SearchBox searchChange={this.onSearchChange}/>
			</header> 
			<section className='section'>
				<h1 className='f1'>Loading...</h1>
			</section>
        </div>
	  )	:
      (
        <div className='tc'>
			<header className='header'>
			  <h1 className='f1'>GO-GIFted</h1>
			  <SearchBox searchChange={this.onSearchChange}/>
			</header>  
			<section className='section'>
				<CardList gifs={gifs} />
			</section>
        </div>
      );
  }
}

export default App;
