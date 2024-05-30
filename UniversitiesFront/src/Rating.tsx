import "./Rating.css";

import React from "react";

import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserContext from "./UserContext";

const MAX_RATING = 5;

interface StarsProps {
  isHovered: boolean;
}

function Stars(props: StarsProps) {
  const { isHovered } = props;
  const [rating, setRating] = React.useState(Array(MAX_RATING).fill(false));
  const [final, setFinal] = React.useState(-1);
  const { user } = React.useContext(UserContext);

  if (!user) {
    return "Please login to rate";
  }

  return rating.map((_, i) => {
    return (
      <div className="star">
        {rating.lastIndexOf(true) >= i ? (
          <FontAwesomeIcon
            icon={faStar}
            className="rating__icon"
            onMouseEnter={() =>
              setRating((prev) => {
                prev.fill(false);
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
            onMouseDown={() => {
              setFinal(i);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faStarOutline}
            className="rating__icon"
            onMouseEnter={() =>
              setRating((prev) => {
                prev.fill(false);
                prev[i] = true;
                return [...prev];
              })
            }
            onMouseLeave={() =>
              setRating((prev) => {
                prev[i] = false;
                if (final !== -1 && !isHovered) {
                  prev[final] = true;
                }
                return [...prev];
              })
            }
            onMouseDown={() => {
              setFinal(i);
            }}
          />
        )}
      </div>
    );
  });
}

export default function Rating() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className="rating"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stars isHovered={isHovered} />
    </div>
  );
}
