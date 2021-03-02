import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardLink,
  CardTitle, CardText,  } from 'reactstrap';

// Styles
import './BookCard.css';

export default function BookCard(props){
	return (
			<div className="my-4">
      <Card className="book-card my-4 text-wrap">
        <CardHeader>
         <img src={props.image} alt={props.title} className="card-img-top img-thumbnail "/>         
        </CardHeader>
        <CardBody>
          <CardTitle className="" tag="h5">{props.title} ({props.year})</CardTitle>
          <CardTitle tag="h6">Author: {props.author}</CardTitle>
            <CardText>Language: {props.language}</CardText>
            <CardText>Pages: {props.pages}</CardText>
            <CardText>Country: {props.country}</CardText>
          <CardLink href={props.link} target="_blank">More.</CardLink>
        </CardBody>
        <CardFooter className="text-center">
            <Button className="btn-info">Add to Bookshelf</Button>
        </CardFooter>
      </Card>
    </div>
		)
}