import { LatLngTuple, icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";

import { IP } from "../../types";
import LocationIcon from "../assets/icon-location.svg";

interface MapProps {
  data: IP | null;
}

const ICON = icon({
  iconUrl: LocationIcon,
  iconSize: [48, 48],
});

const Map: React.FC<MapProps> = ({ data }) => {
  const center = useMemo(() => {
    const lat = data?.location?.lat ?? 51.505;
    const lng = data?.location?.lng ?? -0.09;
    return [lat, lng] as LatLngTuple;
  }, [data]);

  const HandleOnFlyTo = () => {
    const map = useMap();

    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    }, [map]);

    useEffect(() => {
      if (map) {
        map.flyTo(center, 13, {
          animate: true,
          duration: 1.5,
        });
      }
    }, [map]);

    return (
      <Marker icon={ICON} position={center}>
        <Popup>
          {data?.location.city}, {data?.location.country}
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={center}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: "100%", minHeight: "80vh", width: "100%", zIndex: 10 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HandleOnFlyTo />
    </MapContainer>
  );
};

export default Map;
