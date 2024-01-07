import { APIProvider, Map as GMap, Marker } from "@vis.gl/react-google-maps";
import { GOOGLE_API_KEY } from "../env";
import tech from "./assets/icons/tech.png";
import uni from "./assets/icons/uni.png";
import medic from "./assets/icons/medic.png";
import eco from "./assets/icons/eco.png";
import military from "./assets/icons/military.png";
import universities, { UniversityType } from "../mock/universities";

function renderIcon(type: string) {
  switch (type) {
    case UniversityType.Politechnika:
      return tech;
    case UniversityType.Uniwersytet:
      return uni;
    case UniversityType.Medyczna:
      return medic;
    case UniversityType.Ekonomiczna:
      return eco;
    case UniversityType.Wojskowa:
      return military;
    default:
      return uni;
  }
}

export default function GoogleMap() {
  return <APIProvider apiKey={GOOGLE_API_KEY}>
    <GMap
      zoom={7}
      center={{ lat: 52.0102156, lng: 18.7701287 }}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {universities.map((u, i) => <Marker
        key={i}
        position={{lat: u.latitude, lng: u.longitude}}
        icon={renderIcon(u.type)}
        onClick={() => alert(u.name)}
      />
      )}
    </GMap>
  </APIProvider>;
}
