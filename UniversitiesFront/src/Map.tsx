import { APIProvider, Map as GMap, Marker, useMarkerRef } from "@vis.gl/react-google-maps";
import { GOOGLE_API_KEY } from "../env";
import React from "react";

export default function GoogleMap() {
  const [markerRef, marker] = useMarkerRef();
  React.useEffect(() => {
    if (!marker) {
      return;
    }
    marker.addListener("click", () => {
      alert("Marker clicked!")
    });
  }, [marker]);
  return <APIProvider apiKey={GOOGLE_API_KEY}>
    <GMap
      zoom={7}
      center={{ lat: 52.0102156, lng: 18.7701287 }}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <Marker ref={markerRef} position={{lat: 54.37175007030255, lng: 18.616306239885557}} />
    </GMap>
  </APIProvider>;
}
