import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";

interface SearchProps {
  setText: (text: string) => void;
}

export function SearchInput(props: SearchProps) {
  const { setText } = props;
  return (
    <>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
        <input
          className="search__input"
          type="text"
          placeholder="Szukaj uczelni"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
