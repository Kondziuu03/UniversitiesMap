import "./List.css";

import ListItem from "./ListItem";
import { University } from "./mock/universities";

interface ListProps {
  universities: University[];
}

export default function List(props: ListProps) {
  const { universities } = props;

  return (
    <div className="list">
      <h2>Universities</h2>
      {universities.map((university) => (
        <ListItem key={university.id} university={university} />
      ))}
    </div>
  );
}
