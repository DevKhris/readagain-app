import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardLink,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
} from "reactstrap";

// Styles
import "./BookCard.css";

export default function BookCard(props) {
  return (
    <div className="text-wrap text-break">
      <Card className="book-card my-4">
        <CardHeader>
          <CardImg
            src={props.image}
            alt={props.title}
            className="card-img-top"
          />
        </CardHeader>
        <CardBody>
          <CardTitle className="text-wrap text-break" tag="h5">
            {props.title}
          </CardTitle>
          <CardSubtitle>({props.year})</CardSubtitle>
          <CardText>Author: {props.author}</CardText>
          <CardText>Language: {props.language}</CardText>
          <CardText>Pages: {props.pages}</CardText>
          <CardText>Country: {props.country}</CardText>
          <CardLink href={props.link} target="_blank">
            More.
          </CardLink>
        </CardBody>
        <CardFooter className="text-center">
          <Button className="btn-info">Add to Bookshelf</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
