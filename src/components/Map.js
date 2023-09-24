import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useRef } from 'react';

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the map
        const map = L.map(mapRef.current).setView([10.85077990751791, 106.77224569094206], 16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const customMarkerIcon = new L.Icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        });

        L.marker([10.85077990751791, 106.77224569094206], {icon: customMarkerIcon}).addTo(map);
    
        return () => {
            map.remove();
        };
    }, [])
    
    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%', margin: '0 auto'}} />;
}

export default Map;