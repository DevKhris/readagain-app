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

export default function StatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Current Status</CardTitle>
      </CardHeader>
      <CardBody>
        <ul>
          <li>
            <CardLink>All ()</CardLink>
          </li>
          <li>
            <CardLink>To Read ()</CardLink>
          </li>
          <li>
            <CardLink>Reading ()</CardLink>
          </li>
          <li>
            <CardLink>Completed ()</CardLink>
          </li>
          <li>
            <CardLink>Left ()</CardLink>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
