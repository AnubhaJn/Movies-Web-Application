import React from 'react';
import './pagenation.css';

class Pagenation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let numberOfButtons = Math.ceil(this.props.totalMovies / 8);

		let paginationButtons = [];
		for (let i = 0; i < numberOfButtons; i++) {
			paginationButtons.push(
				<div
					className="pagination-button"
					onClick={() => {
						this.props.changePage(i + 1);
					}}
				>
					{i + 1}
				</div>
			);
		}
		return <div className="pagination">
        <img className="left" src="https://img.icons8.com/ios-glyphs/30/000000/less-than.png" onClick={()=>{this.props.previous()}} alt="back"></img>
        {paginationButtons};
        <img src="https://img.icons8.com/ios-glyphs/30/000000/more-than.png" onClick={()=>{this.props.next()}} alt='forward'></img>

  </div>;
	}
}

export default Pagenation;
