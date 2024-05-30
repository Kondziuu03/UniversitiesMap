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
      {universities.map((university) => (
        <ListItem key={university.id} university={university} />
      ))}
    </div>
  );
}
