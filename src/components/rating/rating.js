import React from 'react';
import './rating.css';

class Rating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
        let ratingNum = this.props.ratingNum;

        let noOfStars=[];

        for(let i = 0; i < 5;i++){
            noOfStars.push(<img className="star" src="https://img.icons8.com/color/35/000000/star--v1.png" alt="star-unfilled"></img>)
        }

        for(let i= 0; i< ratingNum ; i++){
                  noOfStars[i]= <img className="star" src="https://img.icons8.com/color/35/000000/filled-star--v1.png" alt="star-filled"></img>
        }
		return( 
           <div className="rating">
              {/* <img className="star" src="https://img.icons8.com/color/40/000000/filled-star--v1.png" alt="star-filled"></img>
              <img className="star" src="https://img.icons8.com/color/40/000000/star--v1.png" alt="star-unfilled"></img> */}
              {noOfStars}
           </div> 
        )
	}
}

export default Rating;