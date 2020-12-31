import React, { Component  } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BookCard from './BookCard';

const API = `http://localhost:8000/api/catalog`;

class Catalog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			isLoading: false,
			error: null,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(API)
 			.then(response => response.json())
 			.then(data => this.setState({ books: data, isLoading: false }))
 			.catch(error => this.setState({ error, isLoading: false}));
	}

	render(){
		const { books, isLoading } = this.state;

		if(isLoading) {
			return (<div>Loading...</div>);
		}	
		return(
			<div className="row">
				<div className="col-sm-3">
				<Form>
					<FormGroup>
						<Input type="text" placeholder="Type your search here"></Input>
						<Button>Search</Button>
					</FormGroup>
				</Form>
				</div>
				<div className="col-8">
					<div className="row">
						<div className="card-group">
						{books.map((book, index) => (
						<BookCard 
							image={'../' + book.imageLink} 
							title={book.title}
							year={book.year} 
							author={book.author} 
							language={book.language}
							pages={book.pages}
							country={book.country}
							link={book.link}
						/>
						))}
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Catalog;