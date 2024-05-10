import "./Rating.css";

import React from "react";

import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserContext from "./UserContext";

const MAX_RATING = 5;

function Stars() {
  const [rating, setRating] = React.useState(Array(MAX_RATING).fill(false));
  const [final, setFinal] = React.useState(-1);
  const user = React.useContext(UserContext);

  if (!user) {
    return <div className="rating">Please login to rate</div>;
  }

  return rating.map((_, i) => {
    return (
      <div className="rating">
        <div className="star">
          {rating.indexOf(true) >= i ? (
            <FontAwesomeIcon
              icon={faStar}
              className="rating__icon"
              onMouseEnter={() =>
                setRating((prev) => {
                  prev[i] = true;
                  return [...prev];
                })
              }
              onMouseLeave={() =>
                setRating((prev) => {
                  prev[i] = false;
                  if (final !== -1) {
                    prev[final] = true;
                  }
                  return [...prev];
                })
              }
              onMouseDown={() => setFinal(i)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStarOutline}
              className="rating__icon"
              onMouseEnter={() =>
                setRating((prev) => {
                  prev[i] = true;
                  return [...prev];
                })
              }
              onMouseLeave={() =>
                setRating((prev) => {
                  prev[i] = false;
                  if (final !== -1) {
                    prev[final] = true;
                  }
                  return [...prev];
                })
              }
              onMouseDown={() => setFinal(i)}
            />
          )}
        </div>
      </div>
    );
  });
}

export default function Rating() {
  return (
    <div className="rating">
      <Stars />
    </div>
  );
}
