import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useRef } from 'react';

function LiveBanksMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the map
        const map = L.map(mapRef.current).setView([10.823655994909222, 106.76969334943243], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
        const liveBanks = [
            { coordinate: [10.769837390114226, 106.72420503800126], title: 'TP, 109 Nguyễn Cơ Thạch, An Lợi Đông, Thủ Đức, Thành phố Hồ Chí Minh, Việt Namá' },
            { coordinate: [10.786341661666007, 106.72989104903829], title: 'Số 9 Đ. Trần Não, Bình An, Quận 2, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.792197483803971, 106.73986198636847], title: 'Số 29 Đ. Số 4, Kp 5, Phú 2, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.784936632068787, 106.74750483800148], title: 'Shop SAV3-00.22, Chung cư The Sun Avenue, Đ. Mai Chí Thọ, phường An, Phú 2, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.774260168785553, 106.7617766226574], title: 'Gian hàng A-1-1-2, khu TTTM tòa nhà The CBD Premium Home số, 125 đường Đồng Văn Cống, Phường Thạnh Mỹ Lợi, Thành phố Hồ Chí Minh, Việt Nam            ' },
            { coordinate: [10.767381269869535, 106.78424379567322], title: 'Shophouse 0.25, tòa H1-04, Chung cư Citihome, khu dân cư, Cát Lái, Thành phố Hồ Chí Minh, Việt Nam            ' },
            { coordinate: [10.789995222055026, 106.77976957251033], title: '698 Đ. Nguyễn Duy Trinh, Bình Trưng Đông, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.806584305962012, 106.78970873195809], title: 'Số 440 Đ. Liên Phường, phường, Quận 9, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.823655994909222, 106.76969334943243], title: 'Số 18 đường 270, 270 Đỗ Xuân Hợp, Phước Long A, Quận 9, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.836775502096975, 106.80857345540818], title: 'F-Town, 3 Đ. D1, P, Quận 9, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.851220944302515, 106.79828760978752], title: 'Công viên Công nghệ cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.847931854517489, 106.78728103551583], title: '53 Đ. Man Thiện, Hiệp Phú, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.843297240215524, 106.77180293800212], title: 'Shophouse A01.06 Chung cư Sài gòn Gateway, Đ. Võ Nguyên Giáp, phường Hiệp, Phú 9, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.858595815830522, 106.74885908218211], title: '278 Tô Ngọc Vân, Linh Đông, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.846008381304006, 106.71236580731177], title: '97 Nguyễn Thị Nhung, Hiệp Bình Phước, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam' },
            { coordinate: [10.87343589788871, 106.73275255753975], title: 'Số 15, Bình Chiểu, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam' }        
        ];

        const customMarkerIcon = new L.Icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        });

        liveBanks.forEach(liveBank => {
            L.marker([liveBank.coordinate[0], liveBank.coordinate[1]], {icon: customMarkerIcon}).addTo(map).bindPopup(liveBank.title);
        });
        
        // L.marker([10.85077990751791, 106.77224569094206], {icon: customMarkerIcon}).addTo(map);
    
        return () => {
            map.remove();
        };
    }, [])
    
    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%', margin: '0 auto'}} />;
}

export default LiveBanksMap;