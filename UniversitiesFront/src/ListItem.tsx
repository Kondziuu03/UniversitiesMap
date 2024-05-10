import "./ListItem.css";

import { University } from "../mock/universities";
import Rating from "./Rating";

interface ListProps {
  university: University;
}

export default function ListItem(props: ListProps) {
  const { university } = props;

  return (
    <div key={university.id} className="list__item">
      <h2>{university.name}</h2>
      <p>{university.description}</p>
      <p>
        {university.address.street}, {university.address.city}
      </p>
      <p>{university.phoneNumber}</p>
      <p>{university.email}</p>
      <Rating />
    </div>
  );
}
