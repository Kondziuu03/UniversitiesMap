import "./AddForm.css";

import React from "react";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { University } from "../mock/universities";
import { createUniversity } from "./service";
import UserContext from "./UserContext";

interface AddFormProps {
  location: { x: number | undefined; y: number | undefined };
  setLocation: (location: {
    x: number | undefined;
    y: number | undefined;
  }) => void;
  setMarker: (marker: boolean) => void;
  setUniversities: (universities: University[]) => void;
}

function isJsonString(str: any) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default function AddForm(props: AddFormProps) {
  const { location, setMarker, setLocation, setUniversities } = props;
  const [status, setStatus] = React.useState("");
  const [message, setMessage] = React.useState("");
  const user = React.useContext(UserContext);
  console.log(user);
  React.useEffect(() => {
    setStatus("");
    setMessage("");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setStatus("error");
      setMessage("You need to be logged in!");
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 5000);
      return;
    }
    const convertedObject = {};

    new FormData(e.target).forEach((value, key) => {
      convertedObject[key] = isJsonString(value) ? JSON.parse(value) : value;
    });
    const data = { ...convertedObject };
    convertedObject["address"] = {
      city: convertedObject["city"],
      street: convertedObject["street"],
      postalCode: convertedObject["postalCode"].toString(),
    };
    delete convertedObject["city"];
    delete convertedObject["street"];
    delete convertedObject["postalCode"];

    convertedObject["phoneNumber"] = convertedObject["phoneNumber"].toString();

    createUniversity(convertedObject).then((res) => {
      console.log(res.status);
      if (res.status === 201) {
        setUniversities((prev: University[]) => [...prev, convertedObject]);
        setLocation({ x: undefined, y: undefined });
        setMarker(false);
        setStatus("success");
        setMessage("University added!");
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Error!");
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 5000);
      }
    });
  };
  const renderStatus = () => {
    switch (status) {
      case "error":
        return (
          <>
            <div>Error!</div>
            <div>{message}</div>
          </>
        );
      case "loading":
        return <div className="loading">Loading...</div>;
      case "success":
        return (
          <>
            <div>Thank you!</div>
            <div>{message}</div>
          </>
        );
      default:
        return user ? (
          <button type="submit">Add</button>
        ) : (
          <div>Please login to add</div>
        );
    }
  };

  return (
    <div className="form">
      <h2>Add university</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <h4>Details</h4>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
          </div>
          <div>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              name="latitude"
              id="latitude"
              value={location.x || ""}
            />
          </div>
          <div className="coords">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              value={location.y || ""}
            />
            <span className="reset">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => {
                  setMarker(false);
                  setLocation({ x: undefined, y: undefined });
                }}
              />
            </span>
          </div>
        </div>
        <h4>Info</h4>
        <div>
          <div>
            <label htmlFor="website">Website</label>
            <input type="text" name="websiteUrl" id="website" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phoneNumber" id="phone" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="0">Techniczna</option>
              <option value="1">Uniwersytet</option>
              <option value="2">Medyczna</option>
              <option value="3">Ekonomiczna</option>
              <option value="4">Wojskowa</option>
            </select>
          </div>
        </div>
        <h4>Address</h4>
        <div>
          <div>
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <input type="text" name="postalCode" id="zip" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" value="Poland" disabled />
          </div>
        </div>

        {renderStatus()}
      </form>
    </div>
  );
}
