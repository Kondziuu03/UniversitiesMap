import "./List.css";

import { University } from "../mock/universities";
import ListItem from "./ListItem";

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
