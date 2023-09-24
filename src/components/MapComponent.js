import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';

function MapComponent() {
  const mapRef = React.useRef(null);
  const API_KEY = "5b3ce3597851110001cf6248656cb4611bca4807b5706b5a25292703";

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapRef.current).setView([10.827154112694922, 106.77032001611946], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const markers = [
      { lat: 10.827154112694922, lng: 106.77032001611946, title: 'Marker 1' },
      { lat: 10.820409816182774, lng: 106.77203662993826, title: 'Marker 2' },
      { lat: 10.819735378184602, lng: 106.77873142383163, title: 'Marker 3' },
    ];

    const customIcon = new L.Icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    markers.forEach(mker => {
      L.marker([mker.lat, mker.lng], {icon: customIcon}).addTo(map);
    });
    
    // Convert coordinates to format expected by OpenRouteService
    const formattedCoords = markers.map(mker => `${mker.lng},${mker.lat}`);

    // Call OpenRouteService API to calculate the route
    axios
      .get(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=${formattedCoords[0]}&end=${formattedCoords[2]}&via=${formattedCoords.slice(1, -1).join('|')}`
      )
      .then(response => {
    if (response.data.features && response.data.features.length > 0) {
        const routeFeature = response.data.features[0];
        if (routeFeature.geometry.type === 'LineString') {
            const routeLatLngs = routeFeature.geometry.coordinates.map(coord => [coord[1], coord[0]]);
            L.polyline(routeLatLngs, { color: 'blue' }).addTo(map);
        } else {
            console.error('Unexpected geometry type', routeFeature.geometry.type);
        }
    } else {
        console.error('No route features found', response.data);
    }
})
.catch(error => {
    console.error('Error fetching route', error);
    alert('Error fetching route. Please check the console for more details.');
});


    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }} />;
}

export default MapComponent;
