import React from 'react';
import NavBar from '../../components/navBar/navBar';
import SideBar from '../../components/sideBar/sideBar';
import MoviesTable from '../../components/moviesTable/moviesTable';
import Pagenation from '../../components/pagenation/pagenation';
import Loader from '../../components/loader/loader';
import './moviesList.css';
import { HandleGetMovies } from './dataManager';
import {connect} from 'react-redux';


class MoviesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchVariable: "",
			pageNumber: 1,
			serialNumber: 1,
			rating : "all",
			genre:"all",
			data : [],
             loader: true
		};
	}

	async componentDidMount(){
		let data = await HandleGetMovies();
		this.setState({
			loader :false,
			data : data
		});

		this.props.updateMovies(data);
	}

	changeSearch = (e) => {
		this.setState({
			pageNumber : 1,
			serialNumber : 1,
			searchVariable: e.target.value,
		});
	};

	changeRating = (e)=>{
        this.setState({
			pageNumber: 1,
			serialNumber : 1,
            rating : e.target.value === "all" ? "all" : parseInt(e.target.value)
		});
	};
	changeGenre = (e)=>{
        this.setState({
			pageNumber: 1,
			serialNumber : 1,
            genre : e.target.value === "all" ? "all" : e.target.value 
		});
		console.log(e.target.value);
	};

	changePage = (PageNumber)=>{
		this.setState({
			pageNumber : PageNumber,
			serialNumber : 1 +  (PageNumber - 1)* 8
		});
	}

	next = ()=>{
		let pageNum = this.state.pageNumber;
		if(pageNum + 1 <= 3){
           this.setState({
			   serialNumber : 1 +  ( pageNum )* 8,
			   pageNumber: pageNum + 1,
		   })
		}
	}

	previous = ()=>{
		let pageNum = this.state.pageNumber;
		if(pageNum - 1 > 0){
           this.setState({
			   pageNumber: pageNum - 1,
			   serialNumber : 1 +  (pageNum - 2)* 8 
		   })
		}
	}

	render() {

		let data = this.state.data;

		let filteredData = data.filter((movie) => {
			if(this.state.rating !== "all"){
				return movie.rating === this.state.rating;
			}
			return true;
		});

		filteredData = filteredData.filter((movie)=>{
			if(this.state.genre !== "all"){
				return movie.genre === this.state.genre;
			}
			return true;
		});

		filteredData = filteredData.filter((movie) => {
			let movieName = movie.name.toLowerCase();
			let search = this.state.searchVariable.toLowerCase();
			return movieName.includes(search);
		});

		let finalData = [];

		for (let i = (this.state.pageNumber - 1) * 8; i < this.state.pageNumber * 8 && i < filteredData.length ; i++) {
			finalData.push(filteredData[i]);
		}

		return (
			<div className="main-container">
			{this.state.loader ? <Loader /> : ''}
				<NavBar />
				<SideBar />
				<div className="movie-table-container">
				<div className="filters">
				<input
						value={this.state.searchVariable}
						className="search-bar"
						type="text"
						placeholder="Search your Movie.."
						onChange={this.changeSearch}
					></input>
					<img src="https://img.icons8.com/plumpy/40/000000/google-web-search.png" alt="glass"></img>
					<select className="genre-dropdown" name ="rating" onChange={this.changeGenre}>
					    <option value={"all"}>All Genres</option>
						<option value={"Comedy"}>Comedy</option>
						<option value={"Drama"}>Drama</option>
						<option value={"Fictional"}>Fictional</option>
						<option value={"Emotional"}>Emotional</option>
						<option value={"Action"}>Action</option>
						<option value={"Romantic"}>Romantic</option>
						<option value={"Dance"}>Dance</option>

					</select>
                    <select className="rating-dropdown" name ="rating" onChange={this.changeRating}>
					    <option value={"all"}>All Ratings</option>
						<option value={0}>0 Rating</option>
						<option value={1}>1 Rating</option>
						<option value={2}>2 Rating</option>
						<option value={3}>3 Rating</option>
						<option value={4}>4 Rating</option>
						<option value={5}>5 Rating</option>

					</select>
					
				</div>
					
					<MoviesTable data={finalData} serialNumber={this.state.serialNumber}/>
					<Pagenation totalMovies={filteredData.length} changePage={this.changePage} previous={this.previous} next={this.next} />
				</div>
			</div>
		);
	}
}


const mapStateToProps = state =>{
	return {
		data : state.data
	}
}

const mapActionsToProps = dispatch =>{
	return{
		updateMovies : (data) => dispatch({type:"updateMovies", data:data}) 
	}
}

export default connect(mapStateToProps,mapActionsToProps)(MoviesList);
