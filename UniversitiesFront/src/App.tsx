import "./App.css";

import React from "react";

import UNIVERSITIES from "../mock/universities";
import AddForm from "./AddForm";
import List from "./List";
import GoogleMap from "./Map";
import { SearchInput } from "./Search";
import { getUniversities } from "./service";

function App() {
  const [text, setText] = React.useState("");
  const [universities, setUniversities] = React.useState([]);
  const filteredUniversities = React.useMemo(() => {
    return UNIVERSITIES.filter(
      // universities
      (university) =>
        university.name.toLowerCase().includes(text.toLowerCase()) ||
        university.description.toLowerCase().includes(text.toLowerCase())
    );
  }, [text, universities]);
  const [location, setLocation] = React.useState({
    x: undefined,
    y: undefined,
  });
  const [marker, setMarker] = React.useState(false);
  React.useEffect(() => {
    getUniversities().then((res) => {
      const data = res.data;
      setUniversities(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <SearchInput setText={setText} />
      <List universities={filteredUniversities} />
      <GoogleMap
        universities={filteredUniversities}
        location={location}
        setLocation={setLocation}
        marker={marker}
        setMarker={setMarker}
      />
      <AddForm
        location={location}
        setLocation={setLocation}
        setMarker={setMarker}
        setUniversities={setUniversities}
      />
    </>
  );
}

export default App;
