import React from "react";
import UNIVERSITIES from "../mock/universities";
import "./App.css";
import GoogleMap from "./Map";
import { SearchInput } from "./Search";
import AddForm from "./AddForm";
import { getUniversities } from "./service";

function App() {
  const [text, setText] = React.useState("");
  const [universities, setUniversities] = React.useState(UNIVERSITIES);
  const filteredUniversities = React.useMemo(() => {
    return universities.filter(
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
      <GoogleMap
        universities={filteredUniversities}
        location={location}
        setLocation={setLocation}
        marker={marker}
        setMarker={setMarker}
      />
      <AddForm
        endpoint="https://google.com"
        location={location}
        setLocation={setLocation}
        setMarker={setMarker}
      />
    </>
  );
}

export default App;
