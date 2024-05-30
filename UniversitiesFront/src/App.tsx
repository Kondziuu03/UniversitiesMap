import "./App.css";

import React from "react";

import AddForm from "./AddForm";
import List from "./List";
import GoogleMap from "./Map";
import UNIVERSITIES, { University } from "./mock/universities";
import { MOCK_USER } from "./mock/user";
import { SearchInput } from "./Search";
import { getUniversities } from "./service";
import UserButton from "./UserButton";
import UserContext, { User } from "./UserContext";

function App() {
  const [user, setUser] = React.useState<User | undefined>(MOCK_USER);
  const [text, setText] = React.useState("");
  const [universities, setUniversities] = React.useState([]);
  const filteredUniversities = React.useMemo(() => {
    return universities.filter(
      (university: University) =>
        university.name.toLowerCase().includes(text.toLowerCase()) ||
        university.description.toLowerCase().includes(text.toLowerCase())
    );
  }, [text, universities]);
  React.useEffect(() => {
    getUniversities()
      .then((res) => {
        const data = res.data;
        setUniversities(data);
      })
      .catch((e) => {
        console.error("Error", e);
        setUniversities(UNIVERSITIES);
      });
  }, []);

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
    <UserContext.Provider value={{ user, setUser }}>
      <UserButton />
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
    </UserContext.Provider>
  );
}

export default App;
