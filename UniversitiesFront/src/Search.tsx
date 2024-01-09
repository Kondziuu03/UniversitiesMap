import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchProps {
  setText: (text: string) => void;
}

export function SearchInput(props: SearchProps) {
  const { setText } = props;
  return (
    <>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Szukaj uczelni"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
      </div>
    </>
  );
}
