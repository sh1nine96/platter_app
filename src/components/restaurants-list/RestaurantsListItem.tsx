import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "../common/Rating";

import IRestaurant from "../../models/IRestaurant";
type Props = {
  restaurant: IRestaurant;
};
const RestaurantsListItem = ({ restaurant }: Props) => {
  const { name, description, rating, numRatings, imageUrl } = restaurant;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between ">
          <div>
            {name}
            <div className="text-xs">
              <Rating value={rating} className="me-2" />
              {rating} ({numRatings} rating)
              {rating}
            </div>
          </div>
          <a href="/" className="btn btn-primary btn-sm">
            <FontAwesomeIcon icon={faCoffee} className="me-2" />
            Menu
          </a>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantsListItem;
