import React from 'react';
import Rating from '../rating/rating';
import './moviesTableRow.css';

class MoviesTableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
        let {name,genre,rating} = this.props.data; 
		return (
			<div className="movies-table-row" style={this.props.header?{fontSize:"25px",fontWeight:"bold", borderBottom:'2px solid gray'}:{}}>
				<div className="column serial-number">{this.props.sno}</div>
				<div className="column movie-name">{name}</div>
				<div className="column genre">{genre}</div>
				<div className="column rating">{this.props.header ? rating: <Rating ratingNum = {rating}/>}</div>
			</div>
		)
	}
}

export default MoviesTableRow;
