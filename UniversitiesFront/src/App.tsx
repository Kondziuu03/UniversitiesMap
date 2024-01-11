import React from "react";
import universities from "../mock/universities";
import "./App.css";
import GoogleMap from "./Map";
import { SearchInput } from "./Search";
import AddForm from "./AddForm";

function App() {
  const [text, setText] = React.useState("");
  const filteredUniversities = React.useMemo(() => {
    return universities.filter(
      (university) =>
        university.name.toLowerCase().includes(text.toLowerCase()) ||
        university.description.toLowerCase().includes(text.toLowerCase())
    );
  }, [text]);
  return (
    <>
      <SearchInput setText={setText} />
      <GoogleMap universities={filteredUniversities} />
      <AddForm endpoint="https://google.com" />
    </>
  );
}

export default App;
