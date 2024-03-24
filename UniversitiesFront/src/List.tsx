import "./List.css";

import { University } from "../mock/universities";

interface ListProps {
  universities: University[];
}

export default function List(props: ListProps) {
  const { universities } = props;

  return (
    <div className="list">
      {universities.map((university) => (
        <div key={university.id} className="list__item">
          <h2>{university.name}</h2>
          <p>{university.description}</p>
          <p>
            {university.address.street}, {university.address.city}
          </p>
          <p>{university.phoneNumber}</p>
          <p>{university.email}</p>
        </div>
      ))}
    </div>
  );
}
