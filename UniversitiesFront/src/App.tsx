import React from "react";
import universities from "../mock/universities";
import "./App.css";
import GoogleMap from "./Map";
import { SearchInput } from "./Search";

function App() {
  const [text, setText] = React.useState("");
  const filteredUniversities = React.useMemo(() => {
    return universities.filter((university) =>
      university.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [text]);
  return (
    <>
      <SearchInput setText={setText} />
      <GoogleMap universities={filteredUniversities} />
    </>
  );
}

export default App;
