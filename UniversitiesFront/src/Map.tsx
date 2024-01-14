import React from "react";
import {
  APIProvider,
  Map as GMap,
  InfoWindow,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { GOOGLE_API_KEY } from "../env";
import tech from "./assets/icons/tech.png";
import uni from "./assets/icons/uni.png";
import medic from "./assets/icons/medic.png";
import eco from "./assets/icons/eco.png";
import military from "./assets/icons/military.png";
import { University, UniversityType } from "../mock/universities";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faGlobe,
  faGraduationCap,
  faLocationDot,
  faMicrochip,
  faPencil,
  faPersonMilitaryRifle,
  faPhone,
  faSackDollar,
  faStaffSnake,
} from "@fortawesome/free-solid-svg-icons";

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

function renderFAIcon(type: string) {
  switch (type) {
    case UniversityType.Politechnika:
      return faMicrochip;
    case UniversityType.Uniwersytet:
      return faGraduationCap;
    case UniversityType.Medyczna:
      return faStaffSnake;
    case UniversityType.Ekonomiczna:
      return faSackDollar;
    case UniversityType.Wojskowa:
      return faPersonMilitaryRifle;
    default:
      return faGraduationCap;
  }
}

function renderTooltip(
  university: University,
  position: { x: number; y: number }
) {
  const tooltip = document.createElement("div");
  tooltip.id = university.name;
  tooltip.className = "tooltip";
  tooltip.style.left = `${position.x}px`;
  tooltip.style.top = `${position.y}px`;
  tooltip.innerText = `${university.name} (${
    Math.round(university.latitude * 1000) / 1000
  }, ${Math.round(university.longitude * 1000) / 1000})`;
  document.body.append(tooltip);
}

interface MapMarkerProps {
  university: University;
  index: number;
  universities: University[];
  setUniversities: (universities: []) => void;
}

function MapMarker(props: MapMarkerProps) {
  const { university, index, universities, setUniversities } = props;
  const [tooltip, setTooltip] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const [markerRef, marker] = useMarkerRef();
  const [edit, setEdit] = React.useState(false);
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const websiteUrlRef = React.useRef<HTMLInputElement>(null);
  const phoneNumberRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Marker
        ref={markerRef}
        onMouseOver={(e) => {
          if (!tooltip && !popup) {
            setTooltip(true);
            renderTooltip(university, {
              x: e.domEvent.x,
              y: e.domEvent.y,
            });
          }
        }}
        onMouseOut={() => {
          setTooltip(false);
          document.getElementById(university.name)?.remove();
        }}
        position={{ lat: university.latitude, lng: university.longitude }}
        icon={renderIcon(university.type)}
        key={index}
        onClick={() => setPopup(true)}
      />
      {popup && (
        <InfoWindow anchor={marker} onCloseClick={() => setPopup(false)}>
          <div className="popup">
            <h2 className="popup__title">
              {university.name}
              {edit ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="popup__edit"
                  onClick={() => {
                    const uni = universities.find(
                      (u) => u.name === university.name
                    )!;
                    const index = universities.indexOf(uni);
                    uni.description = descriptionRef.current?.value;
                    uni.websiteUrl = websiteUrlRef.current?.value;
                    uni.phoneNumber = phoneNumberRef.current?.value;
                    uni.email = emailRef.current?.value;
                    universities[index] = uni;
                    setUniversities([...universities]);
                    setEdit(false);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPencil}
                  className="popup__edit"
                  onClick={() => {
                    setEdit(true);
                  }}
                />
              )}
            </h2>
            {edit ? (
              <input
                type="text"
                defaultValue={university.description}
                ref={descriptionRef}
              />
            ) : (
              <span className="popup__description">
                {university.description}
              </span>
            )}
            <span className="popup__type">
              <FontAwesomeIcon
                icon={renderFAIcon(university.type)}
                className="popup__icon type"
              />
              {university.type}
            </span>
            <span className="popup__address">
              <FontAwesomeIcon icon={faLocationDot} className="popup__icon" />
              {university.address.street}, {university.address.postalCode}{" "}
              {university.address.city}
            </span>
            <span className="popup__website">
              <FontAwesomeIcon icon={faGlobe} className="popup__icon" />
              {edit ? (
                <input
                  type="text"
                  defaultValue={university.websiteUrl}
                  ref={websiteUrlRef}
                />
              ) : (
                <a href={university.websiteUrl} target="_blank">
                  {university.websiteUrl}
                </a>
              )}
            </span>
            <span className="popup__phone">
              <FontAwesomeIcon icon={faPhone} className="popup__icon" />
              {edit ? (
                <input
                  type="text"
                  defaultValue={university.phoneNumber}
                  ref={phoneNumberRef}
                  maxLength={9}
                />
              ) : (
                <a href={`tel:${university.phoneNumber}`}>
                  +48 {university.phoneNumber}
                </a>
              )}
            </span>
            <span className="popup__email">
              <FontAwesomeIcon icon={faEnvelope} className="popup__icon" />
              {edit ? (
                <input
                  type="text"
                  defaultValue={university.email}
                  ref={emailRef}
                />
              ) : (
                <a href={`mailto:${university.email}`}>{university.email}</a>
              )}
            </span>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

interface GoogleMapProps {
  universities: University[];
  location: {
    x: number | undefined;
    y: number | undefined;
  };
  setLocation: (location: {
    x: number | undefined;
    y: number | undefined;
  }) => void;
  marker: boolean;
  setMarker: (marker: boolean) => void;
  setUniversities: (universities: []) => void;
}

export default function GoogleMap(props: GoogleMapProps) {
  const {
    universities,
    location,
    setLocation,
    marker,
    setMarker,
    setUniversities,
  } = props;

  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <GMap
        zoom={7}
        center={{ lat: 52.0102156, lng: 18.7701287 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        maxZoom={20}
        minZoom={6}
        clickableIcons={false}
        onClick={(e) => {
          setLocation({ x: e.detail.latLng.lat, y: e.detail.latLng.lng });
          setMarker(true);
        }}
      >
        {universities.map((u, i) => (
          <MapMarker
            university={u}
            index={i}
            key={i}
            universities={universities}
            setUniversities={setUniversities}
          />
        ))}
        {marker && <Marker position={{ lat: location.x, lng: location.y }} />}
      </GMap>
    </APIProvider>
  );
}
