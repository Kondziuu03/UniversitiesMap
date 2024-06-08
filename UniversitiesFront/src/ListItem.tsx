import React from "react";
import "./ListItem.css";

import { University } from "./mock/universities";
import Rates from "./Rates";
import Rating from "./Rating";
import { getRates, Rate } from "./service";
import UserContext from "./UserContext";

interface ListProps {
  university: University;
}

export default function ListItem(props: ListProps) {
  const { university } = props;
  const [rates, setRates] = React.useState<Rate[]>([]);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    getRates(university.id, user?.token).then((response) => {
      setRates(response.data);
    });
  }, [university.id, user]);

  return (
    <div key={university.id} className="list__item">
      <h2>{university.name}</h2>
      <p>{university.description}</p>
      <p>
        {university.address.street}, {university.address.city}
      </p>
      <p>{university.phoneNumber}</p>
      <p>{university.email}</p>
      <Rating universityId={university.id} setRates={setRates} />
      {user && <Rates rates={rates} />}
    </div>
  );
}
