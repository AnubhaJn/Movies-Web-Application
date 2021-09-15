import React from 'react';
import MoviesTableRow from '../moviesTableRow/moviesTableRow';
import './moviesTable.css';

class MoviesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
        let data = this.props.data;
        let header ={
            name:"Movie Name",
            genre:"Genre",
            rating:"Rating"
        }

        let row =[];
        let j = parseInt(this.props.serialNumber);
        //let j = 1;
        for(let i of data){
            row.push(<MoviesTableRow key={i.sno} sno={j} data={i}/>);
            j = j+1;
        }

		return <div className="movies-table">
            <MoviesTableRow data = {header} sno={"S.No."} header={true}/>
            {row}
        </div>;
	}
}

export default MoviesTable;
