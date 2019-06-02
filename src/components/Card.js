import React from 'react';
import './css/Card.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Card extends React.Component {
    constructor(props){
        super();
		this.id = props.id;
		this.url = props.url;
		this.image = props.image;	
        this.state = {
           play: false
        }
    }

    playPause(){
       this.setState({play: !this.state.play})
    }

    render(){
        let div_class = this.state.play ? "centered play" : "centered pause";

        return (
            <div className='card tc grow br3 pa2 ma3 dib bw2 shadow-5 img_container' onClick={this.playPause.bind(this)}>
			  <LazyLoadImage alt='gifs' src={this.state.play ? (this.url || this.image) : (this.image || this.url)} />
			  <div className={div_class}>
				<div className="triangle triangle-1"></div>
			  </div>
			</div>
        )
    }
}


export default Card;
