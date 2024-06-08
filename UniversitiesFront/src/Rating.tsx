import "./Rating.css";

import React from "react";

import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createRate, Rate } from "./service";
import UserContext from "./UserContext";

const MAX_RATING = 5;

interface StarsProps {
  isHovered: boolean;
}

const Stars = React.forwardRef((props: StarsProps, ref) => {
  const { isHovered } = props;
  const [rating, setRating] = React.useState(Array(MAX_RATING).fill(false));
  const [final, setFinal] = React.useState(-1);
  const { user } = React.useContext(UserContext);

  if (!user) {
    return "Please login to rate";
  }

  return (
    <div className="stars" ref={ref}>
      {rating.map((_, i) => {
        return (
          <div className="star">
            {rating.lastIndexOf(true) >= i ? (
              <FontAwesomeIcon
                icon={faStar}
                className="rating__icon selected"
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
      })}
    </div>
  );
});

interface RatingProps {
  universityId: number;
  setRates: React.Dispatch<React.SetStateAction<Rate[]>>;
}

export default function Rating(props: RatingProps) {
  const { universityId, setRates } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const { user } = React.useContext(UserContext);
  const starsRef = React.useRef<HTMLDivElement>(document.createElement("div"));
  const commentRef = React.useRef<HTMLInputElement>(
    document.createElement("input")
  );
  if (!user) {
    return "Please login to rate";
  }

  return (
    <div
      className="rating"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stars isHovered={isHovered} ref={starsRef} />
      <input
        type="text"
        name="comment"
        placeholder="Comment"
        ref={commentRef}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();

          const stars = starsRef.current.querySelectorAll(".selected").length;
          const comment = commentRef.current.value;
          const rate = {
            rateValue: stars,
            comment,
            userId: user.id,
            universityId,
          };
          const response = await createRate(rate, user.token);
          setRates((prev) => [...prev, rate]);
        }}
      >
        Rate
      </button>
    </div>
  );
}
