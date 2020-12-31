import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardLink,
  CardTitle, CardText,  } from 'reactstrap';
  
export default function BookCard(props){
	return (
			<div>
      <Card className="my-2 mx-2">
        <CardHeader>
         <img src={props.image} width="128"/>         
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.title} ({props.year})</CardTitle>
          <CardTitle tag="h6">Author: {props.author}</CardTitle>
            <CardText>Language: {props.language}</CardText>
            <CardText>Pages: {props.pages}</CardText>
            <CardText>Country: {props.country}</CardText>
          <CardLink href={props.link}>More.</CardLink>
        </CardBody>
        <CardFooter>
            <Button className="btn-info">Add to Bookshelf</Button>
        </CardFooter>
      </Card>
    </div>
		)
}